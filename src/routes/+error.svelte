<script lang="ts">
	import { page } from '$app/stores';
	import Layout from '$lib/components/layout.svelte';
</script>

<!-- TODO: style this like a libultra crash screen -->

<Layout centered>
	<div>
		<h1 class="text-3xl font-bold">{$page.status} {$page.error?.message}</h1>
	</div>
</Layout>
