<!--
  Custom layout shell to mitigate https://github.com/sveltejs/kit/issues/627.
  Use this in pages instead of +layout.svelte.
-->

<script lang="ts">
  import "../../app.css";

  import { Nav } from "$lib/components/nav";
</script>

<Nav>
  <slot name="breadcrumbs" slot="breadcrumbs" />
</Nav>

<main>
  <slot />
</main>
