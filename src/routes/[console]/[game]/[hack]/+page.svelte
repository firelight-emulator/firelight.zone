<script lang="ts">
  import Layout from "$lib/components/layout.svelte";
	import { Breadcrumbs, Breadcrumb } from "$lib/components/breadcrumbs";
  import Download from "$lib/components/patcher/download.svelte";
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

  <main class="mx-auto max-w-3xl">
    <h1 class="text-4xl">
      Paper Mario: The Cylinder of Wood
    </h1>
    
    <span>
      A romhack of Paper Mario
    </span>
    
    <iframe
      title="Video"
      src="https://youtube.com/embed/g0_9YTy1MVY"
    ></iframe>
    
    <Download url="/mod.mod" />
  </main>
</Layout>
