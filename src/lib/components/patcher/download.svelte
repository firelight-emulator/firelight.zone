<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Download } from 'radix-icons-svelte';

	export let url: string;

	// TODO
</script>

<Button size="lg">
	<Download class="mr-2" />
	Download
</Button>
