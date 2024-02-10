<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	import { Breadcrumbs, Breadcrumb } from '$lib/components/breadcrumbs';
	import Download from '$lib/components/patcher/download.svelte';
	import Markdown from '$lib/components/markdown';
	import YoutubeVideo from '$lib/components/youtube-video.svelte';
	import { getSession } from '$lib/session.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import Nav from './Nav.svelte';

	export let data;
</script>

<Layout>
	<Breadcrumbs slot="breadcrumbs">
		<Breadcrumb up={2}>
			{data.platform.name}
		</Breadcrumb>
		<Breadcrumb up={1}>
			{data.game.name}
		</Breadcrumb>
		<Breadcrumb up={0}>
			{data.hack.name}
		</Breadcrumb>
	</Breadcrumbs>

	<header
		class="bg-stone-200 bg-cover bg-center py-8 pb-0"
		style="background-image: url({data.hack.bannerImage})"
	>
		<img src={data.hack.logoImage} alt={data.hack.name} class="mx-auto my-16 w-96" />
		<div class="mx-auto max-w-screen-lg">
			<Nav base={data.base} />
		</div>
	</header>

	<div class="mx-auto flex max-w-screen-lg flex-col gap-4 p-6 lg:flex-row">
		<main class="grow">
			<slot />
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
