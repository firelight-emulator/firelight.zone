<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	import { Breadcrumbs, Breadcrumb } from '$lib/components/breadcrumbs';
	import HackCard from '$lib/components/card/hack.svelte';

	export let data;
</script>

<Layout>
	<Breadcrumbs slot="breadcrumbs">
		<Breadcrumb up={1}>
			{data.platform.name}
		</Breadcrumb>
		<Breadcrumb up={0}>
			{data.game.name}
		</Breadcrumb>
	</Breadcrumbs>

	<div class="mx-auto max-w-screen-xl p-6">
		<main class="grow">
			<h1 class="py-3 text-4xl font-bold text-stone-900 dark:text-stone-100">
				{data.game.name} hacks
			</h1>

			<ol class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{#each data.hacks as hack}
					<li>
						<a href={`/hacks/${hack.slug}`} class="w-full">
							<HackCard name={hack.name} description={hack.short_description} />
						</a>
					</li>
				{/each}
			</ol>
		</main>
	</div>
</Layout>
