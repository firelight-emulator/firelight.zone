<!--
  Custom layout shell to mitigate https://github.com/sveltejs/kit/issues/627.
  Use this in pages instead of +layout.svelte.
-->

<script lang="ts">
	import '../../app.css';

	import { Nav } from '$lib/components/nav';

	export let centered = false;
</script>

<div class="min-h-dvh bg-background text-foreground" class:centered>
	<Nav>
		<slot name="breadcrumbs" slot="breadcrumbs" />
	</Nav>

	<div class="slot">
		<slot />
	</div>
</div>

<style>
	.centered {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.centered .slot {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
