<script lang="ts">
  import Layout from "$lib/components/layout.svelte";
	import { Breadcrumbs, Breadcrumb } from "$lib/components/breadcrumbs";
  import Download from "$lib/components/patcher/download.svelte";
  import Markdown from "$lib/components/markdown";
	import YoutubeVideo from "$lib/components/youtube-video.svelte";

  const hack = {
    title: "Paper Mario: TTYD64",
    trailerYouTubeId: "HFngd-Uq6p0",
    heroLogo: "https://camo.githubusercontent.com/410ab6ce6f0f5196280c1b91a18413760b60ef546034fe6a2901b9db571f4375/68747470733a2f2f692e696d6775722e636f6d2f7a43646c4171782e706e67",
    heroBackground: "https://camo.githubusercontent.com/515292d0351cbb1c2ac82f5bad5274443a043bc3cf30733203b3120aa1c67c6d/68747470733a2f2f692e696d6775722e636f6d2f4a437a6b4b506f2e706e67",
    markdownDescription: `
**What's TTYD64?**
TTYD64 is a PM64 romhack that adds TTYD's gameplay, items, badges, and recipes into PM64, plus a bunch of new areas into the game.

**Some of the new content includes:**
+60 New Badges
+50 New Items
+35 New Star Pieces
+30 Shine Sprites
+35 New Maps
+70 Modified Maps
And much more!

# Credits
**Romhack by:** [elDexter](https://www.youtube.com/channel/UCu4pDFUCpP6oeXNjerf7GfQ)

**New Badges sprites:** [BossBuzz](https://twitter.com/bossbuzz64)
**New items and recipes sprites:** [Typografx](https://twitter.com/typografx)
**Miscellaneous new sprites:** [BossBuzz](https://twitter.com/bossbuzz64), special thanks to Brotenko too!
**New enemies sprites:** [ShyGuyXXL](https://twitter.com/ShyGuyXXL), Starzee, Riviera, fraiseffddf4

**Game Artwork/BG:** [BossBuzz](https://twitter.com/bossbuzz64)
**Game Logo:** [Kevin Arthur LS](https://twitter.com/KevinArthurLS)

**Music:** StevenBlue

**With special thanks to:**
PM64's decomp team, Jdaster64, JaThePlayer, ShadeBlade, Zephiles & ZoomZike.

# FAQ
> **Project64: "R4300i opcode" error**

After attempting to load the ROM, go to settings. Under Paper Mario, change 4 MB ram to 8 MB. Then, click on Recompiler by expanding the Paper Mario settings. Uncheck register caching and save your changes.

> **Where do I report bugs?**

You can report bugs in my discord server:
https://discord.gg/HZ9zqPK2ax

> **Is this a demake of TTYD into PM64?**

No
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

  <header class="py-8 bg-cover bg-center" style="background-image: url({hack.heroBackground})">
    <img src={hack.heroLogo} alt={hack.title} class="w-96 mx-auto my-16" />
  </header>

  <div class="flex flex-col lg:flex-row gap-4 max-w-screen-lg p-6 mx-auto">
    <main class="grow">
      <h1 class="py-3 text-4xl font-bold text-stone-900">{hack.title}</h1>

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
