<script context="module">
	import { base } from "$app/paths";

</script>


<script>
	import Section from "$lib/layout/Section.svelte";
	import Icon from "$lib/Icon.svelte";
	import Media from "$lib/layout/Media.svelte";
	import regions from "$lib/regions.json";
	import items from "$lib/items.json";
	import Header from "$lib/layout/Header.svelte";
	import Dropdown from "$lib/dropdown/App.svelte";

	function doSelect(e) {
		let selected = e.detail;
		if (window.dataLayer) dataLayer.push({
		event: "dropdownSelect",
		areaName: selected.areacd,
		areaCode: selected.areanm
		});
		window.location.href = `${base}/${selected.areacd}/`;
	}


	function doClear() {
		window.location.href = `${base}/`;
	}

	let animationOn = (function(){let mediaQuery = true; return !mediaQuery || mediaQuery.matches ? false : true;})();

	let selected = false;
	let showList = true;
</script>



<Header
	bgimage="{base}/img/bg-map.png"
	bgcolor="#206095"
	bgfixed={true}
	theme="light"
	center={false}
	short={true}
	>
    <h1 style="color: white; font-size: 54px; font-weight: bold;line-height: 1.5;">
		How the area where you live is changing: Census 2021
    </h1>

  <p style="color: white; margin-top: 20px; font-size: 21px;">28 November 2022</p>
  <br /> <br />

  <p class="text-big" style="color: white; margin-top: 5px; font-size: 30px;line-height: 1.5;">
    Latest Census data captures changes seen across local authority areas in England and Wales. Some areas changed drastically in the decade between the last two censuses, while the change is more subtle in other areas. Find out how your area has changed.
  </p>

  <br />

  <div class="ons-field">
    <Dropdown
      {selected}
      id="mainSelect"
      label="Select a local authority"
      on:select={doSelect}
      on:clear={doClear}
    />
  </div>

</Header>

<div class="col-wide">


<Section>
	<h2>
	  All versions of this article
	</h2>
	<p>
	  <Icon type="chevron" rotation={showList ? 90 : 0} />
	  <button class="btn-text" on:click={() => (showList = !showList)}
		>{showList ? "Hide" : "Show"} list of local authorities</button
	  >
	</p>
</Section>

<div class:visually-hidden={!showList}>
	<Media col="wide" grid="narrow">
	  {#each [...regions].sort((a, b) => a.code.localeCompare(b.code)) as region}
		<div class="text-small">
		  <strong>{region.name}</strong><br />
		  {#each items.filter((d) => d.regioncd == region.code) as place}
			<a href="{base}/{place.areacd}/" sveltekit:reload >{place.areanm}</a><br />
		  {/each}
		</div>
	  {/each}
	</Media>
  </div>

  
</div>






<!-- <script context="module">
	const prerender = true;

  import { base, assets } from "$app/paths";

	export async function load({ fetch }) {
    let options_raw = await fetch(`${assets}/data/lad_list_2021.json`);
    let options = await options_raw.json();

    return {
			props: { options }
		}
	}
</script>

<script>
  import Content from "$lib/layout/Content.svelte";

	export let options;
</script>

<svelte:head>
  <title>Page title</title>
  <meta property="og:title" content="Page title" />
	<meta property="og:description" content="This is a description of the page." />
	<meta name="description" content="This is a description of the page." />
</svelte:head>

<Content>
	<ul>
		{#each options as option}
		<li><a href="{base}/{option.code}">{option.name}</a></li>
		{/each}
	</ul>
</Content>

<style>
	li {
		font-size: 1rem;
		margin: 0;
		padding: 0;
	}
</style> -->