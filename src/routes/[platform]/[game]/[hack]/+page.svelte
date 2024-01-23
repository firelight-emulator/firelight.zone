<script lang="ts">
  import Layout from "$lib/components/layout.svelte";
	import { Breadcrumbs, Breadcrumb } from "$lib/components/breadcrumbs";
  import Download from "$lib/components/patcher/download.svelte";
  import Markdown from "$lib/components/markdown";
	import YoutubeVideo from "$lib/components/youtube-video.svelte";

  export let data;
</script>

<Layout>
  <Breadcrumbs slot="breadcrumbs">
    <Breadcrumb up={2}>
      {data.platform?.name}
    </Breadcrumb>
    <Breadcrumb up={1}>
      {data.game?.game_name}
    </Breadcrumb>
    <Breadcrumb up={0}>
      {data.hack.name}
    </Breadcrumb>
  </Breadcrumbs>

  <header class="py-8 bg-cover bg-center" style="background-image: url({data.hack.bannerImage})">
    <img src={data.hack.logoImage} alt={data.hack.name} class="w-96 mx-auto my-16" />
  </header>

  <div class="flex flex-col lg:flex-row gap-4 max-w-screen-lg p-6 mx-auto">
    <main class="grow">
      <h1 class="py-3 text-4xl font-bold text-stone-900 dark:text-stone-100">{data.hack.name}</h1>

      <Markdown source={data.hack.markdownDescription} />
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
