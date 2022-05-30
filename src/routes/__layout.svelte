<script>
  import { assets } from "$app/paths";
  import { page } from '$app/stores';
	import { setContext } from "svelte";
  import "../app.css";
	import { themes } from "$lib/config";
	import Warning from "$lib/ui/Warning.svelte";
	import ONSHeader from "$lib/layout/ONSHeader.svelte";
	import ONSFooter from "$lib/layout/ONSFooter.svelte";
	
  let path = $page.url.pathname;
  let lang = $page.url.hostname.split(".")[0] == "cy" ? "cy" : "en";
  let baseurl = lang == "cy" ? "//cy.ons.gov.uk" : "//www.ons.gov.uk";

  // STYLE CONFIG
  // Set theme globally (options are 'light' or 'dark')
  let theme = "light";
  setContext("theme", themes[theme]);
</script>

<svelte:head>
  <link rel="icon" href="{assets}/favicon.ico" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{assets}/" />
	<meta property="og:image" content="{assets}/img/og.png" />
	<meta property="og:image:type" content="image/png" />
</svelte:head>

<Warning>
  WARNING! This is a prototype containing a combination of old and synthetic data. This prototype contains inaccuracies. Please do not share data from this prototype.
</Warning>

<ONSHeader {baseurl} {path} {lang}/>

<main id="main" tabindex="-1">
  <slot/>
</main>

<ONSFooter {baseurl} {lang}/>