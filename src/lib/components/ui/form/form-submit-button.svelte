<script lang="ts">
	import * as Button from '$lib/components/ui/button';
	import { Reload } from 'radix-icons-svelte';
	import { fade } from 'svelte/transition';

	type $$Props = Button.Props & { submitting: boolean };
	type $$Events = Button.Events;

	export let submitting: boolean;
</script>

<Button.Root type="submit" {...$$restProps} on:click on:keydown>
	<slot />

	<span
		class="mr-0 h-4 w-6 transition-[width,margin-right] duration-150 ease-out"
		class:!w-0={!submitting}
		class:-mr-1={submitting}
	>
		{#if submitting}
			<span transition:fade={{ duration: 100 }}>
				<Reload class="ml-2 h-4 w-4 animate-spin" />
			</span>
		{/if}
	</span>
</Button.Root>
