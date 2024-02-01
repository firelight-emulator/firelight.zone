<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	import { Breadcrumbs, Breadcrumb } from '$lib/components/breadcrumbs';
	import Download from '$lib/components/patcher/download.svelte';
	import Markdown from '$lib/components/markdown';
	import YoutubeVideo from '$lib/components/youtube-video.svelte';
	import { getSession } from '$lib/session.js';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data;

	const isCreator = data.hack.creator !== null && data.hack.creator === getSession()?.user.id;

	function deleteHack() {
		// TODO
	}
</script>

<Layout>
	<Breadcrumbs slot="breadcrumbs">
		<Breadcrumb up={0}>
			{data.hack.name}
		</Breadcrumb>
	</Breadcrumbs>

	<header class="bg-cover bg-center py-8" style="background-image: url({data.hack.bannerImage})">
		<img src={data.hack.logoImage} alt={data.hack.name} class="mx-auto my-16 w-96" />
	</header>

	<div class="mx-auto flex max-w-screen-lg flex-col gap-4 p-6 lg:flex-row">
		<main class="grow">
			<h1 class="py-3 text-4xl font-bold text-stone-900 dark:text-stone-100">{data.hack.name}</h1>

			<Markdown source={data.hack.markdown_description} />

			{#if isCreator}
				<div class="rounded border border-red-500 p-3">
					<Button on:click={deleteHack}>Delete</Button>
				</div>
			{/if}
		</main>
		<aside class="w-96 overflow-hidden">
			<!--
      <div class="py-4">
        <Download url={data.hack.downloadUrl} />
      </div>

      <YoutubeVideo id={data.hack.trailerYouTubeId} />
      -->
		</aside>
	</div>
</Layout>

<style>
	main {
		text-wrap: pretty;
	}

	h1 {
		text-wrap: balance;
	}
</style>
