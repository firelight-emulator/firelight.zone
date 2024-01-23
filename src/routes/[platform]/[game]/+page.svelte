<script lang="ts">
  import Layout from "$lib/components/layout.svelte";
	import { Breadcrumbs, Breadcrumb } from "$lib/components/breadcrumbs";
  import HacksCollection from "$lib/stores/hacks/collection.svelte";

  export let data;
</script>

<Layout>
  <Breadcrumbs slot="breadcrumbs">
    <Breadcrumb up={1}>
      {data.platform.name}
    </Breadcrumb>
    <Breadcrumb up={0}>
      {data.game.game_name}
    </Breadcrumb>
  </Breadcrumbs>

  <div class="max-w-screen-xl p-6 mx-auto">
    <main class="grow">
      <h1 class="py-3 text-4xl font-bold text-stone-900 dark:text-stone-100">
        {data.game.game_name} romhacks
      </h1>

      <HacksCollection gameId={data.game.id} />
    </main>
  </div>
</Layout>

