<script lang="ts">
  import Layout from "$lib/components/layout.svelte";
	import { Breadcrumbs, Breadcrumb } from "$lib/components/breadcrumbs";
  import { page } from "$app/stores";
	import * as Card from "$lib/components/ui/card";

  export let data;

  const console = data.console!;
  const games = data.games!;
</script>

<Layout>
  <Breadcrumbs slot="breadcrumbs">
    <Breadcrumb up={0}>
      {data.console?.title}
    </Breadcrumb>
  </Breadcrumbs>

  <div class="max-w-screen-xl p-6 mx-auto">
    <main class="grow">
      <h1 class="py-3 text-4xl font-bold text-stone-900 dark:text-stone-100">
        {console.title} games
      </h1>

      <ol class="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
        {#each games as game}
          <li>
            <a href={$page.url.toString() + "/" + game.slug} class="w-full">
              <Card.Root>
                <Card.Header>
                  <Card.Title>{game.title}</Card.Title>
                </Card.Header>
              </Card.Root>
            </a>
          </li>
        {/each}
      </ol>
    </main>
  </div>
</Layout>
