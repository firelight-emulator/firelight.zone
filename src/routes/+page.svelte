<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h1 class="text-3xl font-bold underline bg-red">
  Hello world!

  <Button variant="outline" on:click={() => alert("Hello world!")}>
    Click me
  </Button>
</h1>
