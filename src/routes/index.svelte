<script context="module">
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
</style>