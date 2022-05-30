<script context="module">
	
	const prerender = true;

	import { base, assets } from "$app/paths";

	import { load as loadarch } from "archieml";


	export async function load({ params, fetch }) {
    let id = params.id;

    let options_raw = await fetch(`${assets}/data/lad_list_2021.json`);
    let options = await options_raw.json();

	let reports_raw = await fetch(`${assets}/areareportsprgen.json`);
    let reports = await reports_raw.json();
	let prodResults = reports[id].split(`<div id="esc123"></div>`)

	let template_raw = await fetch(`${assets}/template.pug`)
	let template = await template_raw.text();

	let topics_raw = await fetch(`${assets}/data/topics.json`);
    let topics = await topics_raw.json();

    let place_raw = await fetch(`${assets}/data/json/place/${id}.json`);
    let place = await place_raw.json();
    let s = place.stories.map(d => d.label.split("_"))
    s.forEach(e => {
      if (e.length>4) {
        e[3] = e[3]+"_"+e[4]
        e.pop()
      }
    });
    let rgncd = place.parents[0].code
    let rgn_raw = await fetch(`${assets}/data/json/place/${rgncd}.json`);
    let rgn = await rgn_raw.json();
    let eng_raw = await fetch(`${assets}/data/json/place/E92000001.json`);
    let eng = await eng_raw.json();
    let wal_raw = await fetch(`${assets}/data/json/place/W92000004.json`);
    let wal = await wal_raw.json();

	let cou = place.parents[0].name=="Wales"?wal:eng

	// var ladData
	// // Data load functions
	// console.log('getData', getData)
	// getData("https://raw.githubusercontent.com/theojolliffe/census-data/main/laddata.csv").then(res => {
	// 	res.forEach(d => {
	// 		d.code = d[""];
	// 		delete d[""];
	// 	});
	// 	ladData = res
	// });

	let ladData_raw = await fetch("https://raw.githubusercontent.com/theojolliffe/census-data/main/laddata.csv");
  	let ladData_string = await ladData_raw.text();
	let ladData = await csvParse(ladData_string, autoType);

    return {
			props: { options, topics, place, rgn, eng, wal, s, template, prodResults, cou, ladData }
		}
	}
</script>


<script>
	import { uds, adv, udord, sign, nuword, eq, ageBandLU, ord, uncap1, getData, regionThe, drop, ud, otherRank, otherEst, qui, cha, cur, figs, get_word, chains, prev } from "./utils";
	import { goto } from '$app/navigation';
	import { capitalise } from "$lib/utils";
	import { csvParse, autoType } from 'd3-dsv';
  
	import Titleblock from "$lib/layout/Titleblock.svelte";
	  import Headline from "$lib/layout/partial/Headline.svelte";
	  import Section from "$lib/layout/Section.svelte";
	  import Article from "$lib/layout/Article.svelte";
	  import Figure from "$lib/layout/partial/Figure.svelte";
	  import Linkbox from "$lib/layout/Linkbox.svelte";
	import Select from "$lib/ui/Select.svelte";
  
	  // // import { ScatterChart } from './@onsvisual/svelte-charts';
	  import ScatterChart from '$lib/charts/ScatterChart/ScatterChart.svelte';
	  import AgeChart from '$lib/charts/small-multiple/AgeChart.svelte';
	  import HBarChart from '$lib/charts/HBarChart/HBarChart.svelte';
	  import DotPlotChart from '$lib/charts/DotPlotChart.svelte';
  
	import robojournalist from 'robojournalist';
	import pluralize from 'pluralize';
	  import Fuse from 'fuse.js';
  
	export let options;
	export let topics;
	export let template;
	export let place;
	export let s;
	export let rgn;
	export let eng;
	export let wal;
	export let prodResults;
	export let cou;
	export let ladData;

	console.log('topics', topics)
  
	var health, expand, props;

	const production =  process.env.NODE_ENV === 'production'; // false //


  // Define the word to describe population change in standfirst
  if (place.data.population.value.change.all>8) {
    expand = "expanded"
  } else if (place.data.population.value.change.all>3) {
    expand = "grew"
  } else if (place.data.population.value.change.all>0) {
    expand = "did not change much"
  } else {
    expand = "shrunk"
  } 
  // Define the word to describe health change in standfirst
  if (place.data.health.perc.change.good>0) {
    health = "improved"
  } else if (place.data.health.perc.change.good<0) {
    health = "deteriorated"
  }

	var regionLU = {};
	// Data load functions
	getData("https://raw.githubusercontent.com/theojolliffe/census-data/main/csv/lists/Corresponding%20Local%20Authorities-Table%201.csv").then(res => {
		res.forEach(d => {
			regionLU[d['Name']] = d['Region/Country'];
		});
	});

	var countyLU = {};
	// Data load functions
	getData("https://raw.githubusercontent.com/theojolliffe/census-data/main/csv/lists/Local_Authority_District_to_County_(April_2021)_Lookup_in_England.csv").then(res => {
		res.forEach(d => {
			countyLU[d['LAD21NM']] = d['CTY21NM'];
		});
	});

  const findOne = (haystack, arr) => {
		return arr.some(v => haystack.includes(v));
	};
	let loaded = false
	const onRosaeNlgLoad = () => { loaded = true }


  function gotoPlace(e) {
    goto(`${base}/${e.detail.code}`, {noscroll: true});
  }


  let grewSyn = {
		1: "expanded",
		2: "grew",
		3: "grew",
		4: "remained relatively stable",
		5: "fell"
	};

  var more = false;


  function fuzz(w1, w2) {
		const options = {
			includeScore: true
		}
		const fuse = new Fuse([w1], options)
		const result = fuse.search(w2)
		if (result.length>0) {
			return false
		} else {
			return true
		}
	}

  function iterate(obj, pname) {
		Object.keys(obj).forEach(key => {
			if (typeof obj[key] === 'object') {
				iterate(obj[key], pname)
			} else {
				obj[key] = robojournalist(obj[key], {
					health, health,
					expanded: expand,
					plcname: pname,
				})
			}
		})
	}

  function results(place, rgn, topicsIn) {
    var o = JSON.parse(JSON.stringify(topicsIn));
    iterate(o, place.name)

    function topic(i, top) {
      let ttop
      if (top) {
        ttop = top
      } else {
        ttop = s[i][3]
      }
      return o[s[i][0]][ttop]
    }

    let sf = []
		let changeMag = 0
		place.stories.forEach(e => {
			if ((sf.length<4)&(Math.abs(e['value'])>3)) {
				sf.push(e['label'].split("_"))
				changeMag = changeMag+Math.abs(e['value'])
			}
		});

		console.log('place')
    

    let res = rosaenlg_en_US.render(template, {
    	language: 'en_UK',
		place: place,
		data: place.data,
		cou: cou,
		// replace eng with country data (inc Wales)
		eng: eng,
		rgn: rgn,
		uncap1: uncap1,
		regionThe: regionThe,
		parent: uncap1(regionThe(place.parents[0].name)),
		parentNT: uncap1(regionThe(place.parents[0].name, "NT")),
		s: s,
		sf: sf,
		stories: place.stories,
		priorities: place.Priorities,
		grewSyn: grewSyn,
		// locRankCha: locRankCha,
		// natRankCha: natRankCha,
		// locRankCur: locRankCur,
		// natRankCur: natRankCur,
		hiRank: place.hiRank,
		topic: topic,
		topics: o,
		chains: chains,
		country: place.parents[0].name=="Wales"?"Wales":"England",
		get_word: get_word,
		figs: figs,
		otherEst: otherEst,
		cur: cur,
		cha: cha,
		qui: qui,
		// cap,cap,
		otherRank: otherRank,
		ud: ud,
		drop, drop,
		ord: ord,
		ageBandLU: ageBandLU,
		eq: eq,
		nuword: nuword,
		sign: sign,
		udord: udord, 
		near: place.nearbyArea.nearTops,
		simi: place.similar,
		adv: adv,
		uds: uds,
		more: more,
		pluralize, pluralize,
		countyLU: countyLU,
		fuzz: fuzz,
		prev: prev,
		regionLU: regionLU,
		findOne: findOne
    })

    return res.split(`<div id="esc123"></div>`)
  }


  function fbp(x) {
		return Number.parseFloat(Number.parseFloat(0.714*x).toPrecision(2))
	}

  function swap(array, indexA, indexB) {
    var tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
  }

	function makeProps(i) {
		let s = place.stories[i].label.split("_")
			if (s.length>4) {
				s[3] = s[3]+"_"+s[4]
				s.pop()
			}
		if (["religion", "agemed", "ethnicity", "care", "disability"].includes(s[0])) {

			function dtrans(d, g) {
				let a = []
				let t
				if (s[0]=='agemed') {
					t = 'age10yr'
				} else {
					t = s[0]
				}
				Object.keys(d.data[t].perc[g]).forEach(e => {
					a.push({'x': e, 'y': d.data[t].perc[g][e], 'g': g})
				});

        		if (s[0]=='religion') {
	
				// filter out religion not stated
				a = a.filter(d => d['x'] != "Religionnotstated")

				// move 'Other' to the end of the list
				const findOther = (e) => e['x'] == 'Otherreligion';
				swap(a, a.findIndex(findOther), a.length-1);
				}

				if (s[0]=='ethnicity') {
	
				// move 'Other' to the end of the list
				const findOther2 = (e) => e['x'] == 'other';
				swap(a, a.findIndex(findOther2), a.length-1);
				}

				
				
				return a
			}
			let chartData
			if (rgn.name == 'Wales') {
				chartData = [
					[dtrans(cou, 2001), dtrans(cou, 2011)],
					[dtrans(place.nearbyArea.nearTops, 2001), dtrans(place.nearbyArea.nearTops, 2011)],
					[dtrans(place, 2001), dtrans(place, 2011)],
				]
			}
			else {
				chartData = [
					[dtrans(cou, 2001), dtrans(cou, 2011)],
					[dtrans(rgn, 2001), dtrans(rgn, 2011)],
					[dtrans(place, 2001), dtrans(place, 2011)],
				]
			}

			let xTickCal = Math.round((Math.max(...chartData.flat().flat().map(d => d.y))-5)/10)*10
			let xMax = Math.round((Math.max(...chartData.flat().flat().map(d => d.y))-5)/10)*10
			let props = {
						legend: true,
						height: 120,
						chartData: chartData,
						labels: (rgn.name == 'Wales') ? [cou.name, place.nearbyArea.nearTops.name, place.name] : [cou.name, rgn.name, place.name],
						xKey: "value",
						yKey: "year",
						xTickCal: xTickCal,
						xMax: xMax,
						topics: topics[s[0]]
					}
			return props
		}
		else if (["care"].includes(s[0])) {
			let datrev = {2011: 2001, 2001: 2011}
			let chartData = []
			let dates = [2001, 2011]
			dates.forEach(d => {
				let tar = []
				if (d != 'change') {
					Object.keys(place.data[s[0]].perc[d]).forEach(e => {
						if ((e != 'all') & (e != 'noCare')) {
							// if ((place.data[s[0]].perc[d][e] > 1)|(place.data[s[0]].perc[datrev[d]][e] > 1)) {
								tar.push({g: +d, x: topics[s[0]][e]['label'], y: place.data[s[0]].perc[d][e]})
							// }
						}
					})
					chartData.push(tar)
				}
			})
			let props = {
						legend: true,
						height: 120,
						data: chartData,
						labels: [cou.name, rgn.name, place.name],
						xKey: "year",
						yKey: "value",
						zKey: "group"
					}
			return props
		}
		else if (place.stories[i].type.includes('size')) {
			if (s[0]=="population") {
				if (rgn.name != 'Wales') {
					return {
						height: 120,
						data: [
							{label: eng.name, 2001: fbp(eng.data.density.value[2001].all), 2011: fbp(eng.data.density.value[2011].all)},
							{label: rgn.name, 2001: fbp(rgn.data.density.value[2001].all), 2011: fbp(rgn.data.density.value[2011].all)},
							{label: place.name, 2001: fbp(place.data.density.value[2001].all), 2011: fbp(place.data.density.value[2011].all)},
						],
					}
				} else {
					return {
						height: 120,
						data: [
							{label: rgn.name, 2001: fbp(rgn.data.density.value[2001].all), 2011: fbp(rgn.data.density.value[2011].all)},
							{label: place.nearbyArea.nearTops.name, 2001: fbp(place.nearbyArea.nearTops.data.density.value[2001].all), 2011: fbp(place.nearbyArea.nearTops.name.data.density.value[2011].all)},
							{label: place.name, 2001: fbp(place.data.density.value[2001].all), 2011: fbp(place.data.density.value[2011].all)},
						],
					}
				}
			}
			else {
				if (rgn.name == 'Wales') {
					return {
						legend: true,
						height: 120,
						data: [
							{
								label: rgn.name, 
								2001: rgn.data[s[0]][s[1]][2001][s[3]],
								2011: rgn.data[s[0]][s[1]][2011][s[3]]
							},
							{
								label: place.nearbyArea.nearTops.name, 
								2001: place.nearbyArea.nearTops.data[s[0]][s[1]][2001][s[3]], 
								2011: place.nearbyArea.nearTops.data[s[0]][s[1]][2011][s[3]],
							},
							{
								label: place.name, 
								2001: place.data[s[0]][s[1]][2001][s[3]],
								2011: place.data[s[0]][s[1]][2011][s[3]]
							},
						],
					}
				} else {
					return {
						legend: true,
						height: 120,
						data: [
							{
								label: eng.name, 
								2001: eng.data[s[0]][s[1]][2001][s[3]], 
								2011: eng.data[s[0]][s[1]][2011][s[3]],
							},
							{
								label: place.parents[0].name,
								2001: rgn.data[s[0]][s[1]][2001][s[3]], 
								2011: rgn.data[s[0]][s[1]][2011][s[3]]
							},
							{
								label: place.name, 
								2001: place.data[s[0]][s[1]][2001][s[3]], 
								2011: place.data[s[0]][s[1]][2011][s[3]]
							},
						],
					}
				}
			}
		}
		else {
			// ScatterChart
			var chartdata
			if (s[0]=="population") {
				s[0] = 'density';
				s[3] = 'all';
			}
			chartdata = ladData.filter(d => (d['parent']==place.parents[0].name)&(d.topic == s[0]+"_"+s[3]))

			chartdata = chartdata.map(d => ({ 'change': d['change'], 'value': (s[0]=="density")? 0.714*parseFloat(d[2011]) : parseFloat(d[2011]), 'unique': d['lad'], 'id': d['parent']}))
			chartdata.forEach((item, i) => {
				if (item.unique==place.name) {
					item.id = place.name
				} else if (item.id == place.parents[0].name) {
					item.id = "Rest of "+uncap1(regionThe(place.parents[0].name))
				} else {
					item.id = "Rest of England"
				}
			})
			chartdata.push({
				change: +cou.data[s[0]][s[1]]['change'][s[3]],
				value: +cou.data[s[0]][s[1]]['2011'][s[3]],
				unique: 'Average across ' + cou.name, 
				id: 'Average across ' + cou.name, 
			})

			return props = {
				mode: "stacked",
				line: false,
				legend: true,
				data: chartdata,
				xKey: "value",
				yKey: null,
				rKey: "change",
				r: [3, 9],
				zKey: "id",
			}
		}
	}
	function chartType(i) {
		let s = place.stories[i].label.split("_")
		if (s.length>4) {
			s[3] = s[3]+"_"+s[4]
			s.pop()
		}
		if (["religion", "agemed", "ethnicity", "care", "disability"].includes(s[0])) {
			return AgeChart
		} else if (["care"].includes(s[0])) {
			return HBarChart
		}
		else if (place.stories[i].type.includes('size')) {
			return DotPlotChart
		} else {
			// LINECHART
			return ScatterChart
		}
	}


  function readMore() {
		more = !more
		results = results
	}
  </script>

<svelte:head>
	<title>{place.name}</title>
	<meta property="og:title" content="{place.name}" />
	<meta property="og:description" content="This is a description of the page." />
	<meta name="description" content="This is a description of the page." />
	<script src="https://unpkg.com/rosaenlg@3.0.1/dist/rollup/rosaenlg_tiny_en_US_3.0.1_comp.js" on:load="{onRosaeNlgLoad()}"></script>
</svelte:head>

<Titleblock
  background="none"
	breadcrumb="{[
    {label: 'Home', url: `${base}/`},
    {label: place.name, url: `${base}/`},
    {label: 'Changes over time'}
  ]}"
  contents="{[
    {label: 'Overview', url: '/'},
    {label: 'Facts and figures', url: '/'},
    {label: 'Changes over time'},
    {label: 'Latest results and insights', url: '/'}
  ]}">
	<Headline>{place.name}</Headline>
	<p style:margin="0 0 10px 0" style:padding={0}><strong>{ (place.parents[0].name == 'Wales')? "Unitary authority" : capitalise(place.gss.long)}: </strong>{capitalise(place.code)}</p>
	<Select items={options} mode="search" idKey="code" labelKey="name" placeholder="Find another area" on:select={gotoPlace} autoClear/>
</Titleblock>

<Article>
	<Section backlink hr>
    <!-- {#if wal} -->
    <!-- {#if ladData} -->
    <!-- {#if place} -->
    <!-- {#if template} -->
    <div style="height: 50px"></div>

	{#if !production}
		{#if loaded}
			{#each results(place, rgn, topics) as res, i (i)}
				{@html res}
				<div style="width: 100%">
					{#if i < place.stories.length}
						{#if makeProps(i)}
							<svelte:component this="{chartType(i)}" {...makeProps(i)}/>
						{/if}
					{/if}
				</div>
			{/each}
		{/if}
	{:else}
		{#each prodResults as res, i (i)}
			{@html res}
			<div style="width: 100%">
				{#if i < place.stories.length}
					{#if makeProps(i)}
						<svelte:component this="{chartType(i)}" {...makeProps(i)}/>
					{/if}
				{/if}
			</div>
		{/each}
	{/if}

    {#if place.stories.length>6}
    <button on:click={readMore}>
      <div class="triangle-container">
        <svg height="25" width="50">
            {#if more}
              <polygon points="25,10 15,20 25,10 35,20" class="triangle" />
            {:else}
              <polygon points="25,20 15,10 25,20 35,10" class="triangle" />
            {/if}
        </svg>
      </div>
      {more?'Read less':'Read more'}
    </button>
    {/if}
    <div style="height: 50px"></div>
    <!-- {/if} -->
    <!-- {/if}
    {/if}
    {/if} -->
  </Section>

  <Linkbox
    mode="neutral"
    title="Area report data"
    links="{[
      {label: 'Dataset one title', url: '/', type: 'Dataset', meta: '31 January 2022', description: 'This is a description of the dataset.'},
      {label: 'Dataset two title', url: '/', type: 'Dataset', meta: '16 January 2022', description: 'This is a description of the dataset.'}
    ]}"/>

  <Linkbox
    mode="neutral"
    links="{[
      {label: 'Article one title', url: '/', type: 'Article', meta: '31 January 2022', description: 'This is a description of the article.'},
      {label: 'Article two title', url: '/', type: 'Article', meta: '16 January 2022', description: 'This is a description of the article.'}
    ]}"/>
</Article>

<style>
  	.triangle{
  fill: transparent;
  stroke: #206095;
    stroke-width: 3;
  transition: all 0.8s ease-in-out;
  /* transform: rotate(-180deg);  */
}
.triangle-container {
    float: left;
}

button {
	color: #206095;
    background-color: transparent;
    outline: transparent;
    border: none;
    text-decoration: underline;
    font-weight: 700;
    font-size: 18px;
	margin-top: 60px;
	cursor: pointer;
}
button:active{
    background-color: transparent;
}
</style>