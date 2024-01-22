<script lang="ts">
  import Layout from "$lib/components/layout.svelte";
	import { Breadcrumbs, Breadcrumb } from "$lib/components/breadcrumbs";
  import Download from "$lib/components/patcher/download.svelte";
  import Markdown from "$lib/components/markdown";
	import YoutubeVideo from "$lib/components/youtube-video.svelte";

  export let data;

  const hack = data.hack!;
</script>

<Layout>
  <Breadcrumbs slot="breadcrumbs">
    <Breadcrumb up={2}>
      {data.console?.title}
    </Breadcrumb>
    <Breadcrumb up={1}>
      {data.game?.title}
    </Breadcrumb>
    <Breadcrumb up={0}>
      {hack.title}
    </Breadcrumb>
  </Breadcrumbs>

  <header
    class="py-8 bg-cover bg-center"
    style:background-image="url({hack.heroBackground})"
    style:view-transition-name="hack-background"
  >
    <img
      src={hack.heroLogo}
      alt={hack.title}
      class="w-96 mx-auto my-16"
      style:view-transition-name="hack-logo"
    />
  </header>

  <div class="flex flex-col lg:flex-row gap-4 max-w-screen-lg p-6 mx-auto">
    <main class="grow">
      <h1 class="py-3 text-4xl font-bold text-stone-900 dark:text-stone-100">{hack.title}</h1>

      <Markdown source={hack.markdownDescription} />
    </main>
    <aside class="w-96 overflow-hidden">
      <div class="py-4">
        <Download url={hack.downloadUrl} />
      </div>

      <YoutubeVideo id={hack.trailerYouTubeId} />
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
