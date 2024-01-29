<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
	import * as Command from '$lib/components/ui/command';
	import { cn } from '$lib/utils';
	import { tick } from 'svelte';
	import { Check, CaretSort } from 'radix-icons-svelte';
	import { getFormField } from 'formsnap';
	import { getSupabaseClient } from '$lib/supabase';
	import { writable } from 'svelte/store';
	import { debounce } from 'svelte-reactive-debounce';

	let open = false;

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}

	const { value, setValue } = getFormField();

	const supabase = getSupabaseClient();

	const search = writable('');
	const debouncedSearch = debounce(search, 200);

	let games: string[] = [];
	let loading = false;

	$: {
		(async () => {
			loading = true;
			const { data, error } = await supabase
				.from('games')
				.select('name')
				.textSearch('name', $debouncedSearch, {
					type: 'websearch',
				}) // TODO: use full text search
				.limit(10);
			if (error) throw error; // TODO: handle
			games = data.map((d) => d.name);
			loading = false;
		})();
	}
</script>

<Popover.Root bind:open let:ids>
	<Popover.Trigger asChild let:builder>
		<Form.Control id={ids.trigger} let:attrs>
			<Button
				{...attrs}
				builders={[builder]}
				variant="outline"
				role="combobox"
				class={cn('w-[400px] justify-between', !value && 'text-muted-foreground')}
			>
				{games.find((f) => f === $value) ?? 'Select game'}
				<CaretSort class="ml-2 h-4 w-4 shrink-0 opacity-50" />
			</Button>
		</Form.Control>
	</Popover.Trigger>
	<Popover.Content class="w-[400px] p-0">
		<Command.Root>
			<Command.Input autofocus placeholder="Search games..." class="h-9" bind:value={$search} />
			{#if $search}
				<Command.Group>
					{#if loading}
						<Command.Loading />
					{:else}
						{#each games as game}
							<Command.Item
								value={game}
								onSelect={() => {
									setValue(game);
									closeAndFocusTrigger(ids.trigger);
								}}
							>
								{game}
								<Check class={cn('ml-auto h-4 w-4', game !== $value && 'text-transparent')} />
							</Command.Item>
						{:else}
							<Command.Empty>Game not found</Command.Empty>
						{/each}
					{/if}
				</Command.Group>
			{/if}
		</Command.Root>
	</Popover.Content>
</Popover.Root>
