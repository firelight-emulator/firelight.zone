<!--
  Custom layout shell to mitigate https://github.com/sveltejs/kit/issues/627.
  Use this in pages instead of +layout.svelte.
-->

<script lang="ts">
  import "../../app.css";

  import { Nav } from "$lib/components/nav";
</script>

<div class="text-stone-700 bg-stone-100 dark:text-stone-300 dark:bg-stone-900">
  <Nav>
    <slot name="breadcrumbs" slot="breadcrumbs" />
  </Nav>
  
  <slot />  
</div>
