<script lang="ts">
	import Layout from '$lib/components/layout.svelte';

	export let data;
</script>

<Layout>
	<h1>Hello</h1>
	<ul>
		{#each data.platforms as platform}
			<li>
				<a href={platform.slug}>{platform.name}</a>
			</li>
		{/each}
	</ul>
</Layout>
