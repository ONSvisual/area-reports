<script>
      import Content from "$lib/layout/Content.svelte";

</script>

<div style="width: 80%; margin:auto;">
	<p>
		Click on a phrase type (e.g. 'clausal modifier') to see the various phrases used across different topics.
	</p>
	<p>
		Click on a phrase to see it used in context. 
	</p>
	<p>
		Note that when a phrase is selected, only the bold text is dynamic so may not provide perfect context.
	</p>
</div>

<!-- <Content> -->
<!-- <iframe width="100%" height="5212" frameborder="0"
  src="https://observablehq.com/embed/cc9449078bb7b9ae?cells=chart%2Csent"></iframe>  -->
  
  <iframe width="100%" height="921" frameborder="0"
  src="https://observablehq.com/embed/cc9449078bb7b9ae?cells=chart%2Csent%2Cviewof+color"></iframe>

  <!-- </Content> -->
<style>
	.chart :global(div) {
		font: 10px sans-serif;
		background-color: steelblue;
		text-align: right;
		padding: 3px;
		margin: 1px;
		color: white;
	}
</style>
