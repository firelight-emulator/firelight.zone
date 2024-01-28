<script lang="ts">
	import Layout from '$lib/components/layout.svelte';

	export let data;
</script>

<Layout>
	<h1>Hello</h1>
	<p>
		There are {data.platforms.length} platforms.
	</p>
</Layout>
