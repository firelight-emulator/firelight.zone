<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	import { Breadcrumbs, Breadcrumb } from '$lib/components/breadcrumbs';
	import HackCard from '$lib/components/card/hack.svelte';
	import { page } from '$app/stores';

	export let data;
</script>

<Layout>
	<Breadcrumbs slot="breadcrumbs">
		<Breadcrumb up={0}>
			{data.platform.name}
		</Breadcrumb>
	</Breadcrumbs>

	<div class="mx-auto max-w-screen-xl p-6">
		<main class="grow">
			<h1 class="py-3 text-4xl font-bold text-stone-900 dark:text-stone-100">
				{data.platform.name} games
			</h1>

			<ol class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{#each data.games as game}
					<li>
						<a href={`${data.platform.slug}/${game.slug}`} class="w-full">
							{game.name}
						</a>
					</li>
				{/each}
			</ol>
		</main>
	</div>
</Layout>
