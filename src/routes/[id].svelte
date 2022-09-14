<script context="module">
	
	const prerender = true;

	import { base, assets } from "$app/paths";

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
	let place_raw_new = await fetch(`${assets}/data/json_new/place/${id}.json`);

    let place = await place_raw.json();
	let place_new = await place_raw_new.json();

    let s = place_new.stories.map(d => d.label.split("_"))
    s.forEach(e => {
      if (e.length>4) {
        e[3] = e[3]+"_"+e[4]
        e.pop()
      }
    });
    let rgncd = place_new.parent.code
	// let rgncd = place.parents[0].code
    let rgn_raw = await fetch(`${assets}/data/json/place/${rgncd}.json`);
    let rgn_raw_new = await fetch(`${assets}/data/json_new/place/${rgncd}.json`);
    let rgn = await rgn_raw.json();
	let rgn_new = await rgn_raw_new.json();
    let eng_raw = await fetch(`${assets}/data/json_new/place/E92000001.json`);
    let eng = await eng_raw.json();
    let wal_raw = await fetch(`${assets}/data/json_new/place/W92000004.json`);
    let wal = await wal_raw.json();

	let cou = place.parents[0].name=="Wales"?wal:eng

	let ladData_raw = await fetch("https://raw.githubusercontent.com/theojolliffe/census-data/main/laddata.csv");
  	let ladData_string = await ladData_raw.text();
	let ladData = await csvParse(ladData_string, autoType);

    return {
			props: { options, topics, place, place_new, rgn, rgn_new, eng, wal, s, template, prodResults, cou, ladData }
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
	export let place_new;
	export let s;
	export let rgn;
	export let rgn_new;
	export let eng;
	export let wal;
	export let prodResults;
	export let cou;
	export let ladData;


	$: console.log('place_new', place_new)
	$: console.log('rgn', rgn)
	$: console.log('cou', cou)
  
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

  var more = true;


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
		let res = rosaenlg_en_US.render(template, {
			language: 'en_UK',
			place: place_new,
			data: place_new.data,
			cou: cou,
			eng: eng,
			rgn: rgn_new,
			uncap1: uncap1,
			regionThe: regionThe,
			parent: uncap1(regionThe(place.parent.name)),
			parentNT: uncap1(regionThe(place.parent.name, "NT")),
			s: s,
			sf: sf,
			stories: place_new.stories,
			// grewSyn: grewSyn,
			topic: topic,
			topics: o,
			chains: chains,
			country: place.parent.name=="Wales"?"Wales":"England",
			get_word: get_word,
			figs: figs,
			otherEst: otherEst,
			cur: cur,
			cha: cha,
			qui: qui,
			otherRank: otherRank,
			ud: ud,
			drop, drop,
			ord: ord,
			ageBandLU: ageBandLU,
			eq: eq,
			nuword: nuword,
			sign: sign,
			udord: udord, 
			near: place_new.near,
			simi: place_new.similar,
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



<!-- TBA TBA TBA -->
<div class="promo__background--plum-gradient">
	<div class="wrapper">
		<div class="banner--half-padding">
			<p class="margin-top--0 margin-bottom--0 padding-bottom--0 padding-top--0 flex flex-wrap-wrap banner--vertical-center">
				<a class="flex" href="/census"><img src="https://cdn.ons.gov.uk/assets/images/census-logo/logo-census-2021-white-landscape.svg" title="Census 2021" alt="" class="header__svg-logo margin-right--1" focusable="false" width="167" height="32" viewbox="0 0 242 44" aria-labelledby="census-logo-banner"></a>
				<a class="margin-top--0 text--white font-size--18 underline-link" href="/census">Data and analysis from Census 2021</a>
			</p>
		</div>
	</div>
</div>
<!-- TBA TBA TBA -->

<div style="height: 50px;"></div>
<Titleblock
  background="none"
  >
	<Headline>How life has changed in {place.name}</Headline>
	<div style="height: 20px;"></div>
	<Select items={options} mode="search" idKey="code" labelKey="name" placeholder="Find another area" on:select={gotoPlace} autoClear/>
</Titleblock>

<Article>
	<Section backlink hr>
    <div style="height: 50px"></div>

	{#if !production}
		{#if loaded}
			{#each results(place_new, rgn, topics) as res, i (i)}
				{@html res}
				<div style="width: 100%; height: 200px; background: lightgrey; padding: 20px">
					<h4>CHART PLACEHOLDER</h4>
				</div>
			{/each}
		{/if}
	{:else}
		{#each prodResults as res, i (i)}
			{@html res}
			<div style="width: 100%; height: 200px; background: lightgrey; padding: 20px">
				<h4>CHART PLACEHOLDER</h4>
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
h2 {
    font-size: 30px;
    margin: 32px 0;
    padding: 24px 0 0;
    font-weight: 700;
    line-height: 40px;
}
</style>