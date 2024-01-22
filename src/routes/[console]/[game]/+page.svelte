<script lang="ts">
  import Layout from "$lib/components/layout.svelte";
	import { Breadcrumbs, Breadcrumb } from "$lib/components/breadcrumbs";
  import Hack from "$lib/components/card/hack.svelte";
  import { page } from "$app/stores";

  export let data;

  const game = data.game!;
  const hacks = data.hacks!;
</script>

<Layout>
  <Breadcrumbs slot="breadcrumbs">
    <Breadcrumb up={1}>
      {data.console?.title}
    </Breadcrumb>
    <Breadcrumb up={0}>
      {data.game?.title}
    </Breadcrumb>
  </Breadcrumbs>

  <div class="max-w-screen-xl p-6 mx-auto">
    <main class="grow">
      <h1 class="py-3 text-4xl font-bold text-stone-900 dark:text-stone-100">
        {game.title} romhacks
      </h1>

      <ol class="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
        <li>
          {#each hacks as hack}
            <a href={$page.url.toString() + "/" + hack.slug} class="w-full">
              <Hack {hack} />
            </a>
          {/each}
        </li>
      </ol>
    </main>
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
