<script lang="ts">
  import Layout from "$lib/components/layout.svelte";
	import { Breadcrumbs, Breadcrumb } from "$lib/components/breadcrumbs";
  import Download from "$lib/components/patcher/download.svelte";
  import Markdown from "$lib/components/markdown";

  const hack = {
    title: "Paper Mario Party",
    headerImage: "/temp/pmp-logo.png",
    markdownDescription: `
### *Flatter Mario, Bigger Party!*

Paper Mario Party is a mod for Paper Mario that turns it into the classic party game.

![](https://media.discordapp.net/attachments/693498743668080650/693928224412926063/unknown.png?ex=65bffb85&is=65ad8685&hm=5c2eb4131367ef321e94809ecbec13fe9870233bf09f92d395121e55848f7cf6&=&format=webp&quality=lossless&width=872&height=588)
`,
    downloadUrl: "/mod.mod",
  };
</script>

<Layout>
  <Breadcrumbs slot="breadcrumbs">
    <Breadcrumb up={2}>
      Nintendo 64
    </Breadcrumb>
    <Breadcrumb up={1}>
      Paper Mario
    </Breadcrumb>
  </Breadcrumbs>

  <header class="py-8">
    {#if hack.headerImage}
      <img src={hack.headerImage} alt={hack.title} class="mx-auto max-w-3xl max-h-64" />
    {/if}
  </header>

  <div class="flex flex-col lg:flex-row gap-4 max-w-screen-lg px-6 mx-auto">
    <main class="grow">
      <h1 class="py-3 text-4xl font-bold text-stone-900">{hack.title}</h1>

      <Markdown source={hack.markdownDescription} />
    </main>
    <aside class="w-96 overflow-hidden">
      <div>
        A romhack by <a href="/users/nanaian" class="text-stone-500 font-medium">nanaian</a>
      </div>

      <div class="py-4">
        <Download url={hack.downloadUrl} />
      </div>

      <video controls>
        <source src="https://cdn.discordapp.com/attachments/693498743668080650/696438939111915580/AQolJ3KPUk.mp4?ex=65bfe34e&is=65ad6e4e&hm=6399f6d2afef03de08da29dd149b83645f1d15449f0d1d0e157f96faa234d0ce&" type="video/mp4" />
      </video>
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
