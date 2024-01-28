<script lang="ts">
	import { Collection } from 'sveltefire';
	import { hacks, type Hack } from '.';
	import HackCard from '$lib/components/card/hack.svelte';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { where, query } from 'firebase/firestore';
	import { page } from '$app/stores';

	export let gameId: string;

	const q = query(hacks(), where('gameId', '==', gameId));

	const HacksCollection = Collection<Hack>;

	// NOTE: there is a bug in sveltefire where Collection's loading state is not used.
	// see https://github.com/codediodeio/sveltefire/pull/145
</script>

<HacksCollection ref={q} let:data={hacks}>
	<ol class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
		{#each hacks as hack}
			<li>
				<a href={$page.url.toString() + '/' + hack.slug} class="w-full">
					<HackCard {hack} />
				</a>
			</li>
		{/each}
	</ol>

	<div slot="loading" class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
		{#each Array(6) as _}
			<div class="h-96 w-full rounded-xl border bg-card p-6">
				<Skeleton class="mb-4 h-64 rounded-lg"></Skeleton>
				<Skeleton class="mb-2 h-5 w-1/2"></Skeleton>
				<Skeleton class="mb-2 h-3 w-full"></Skeleton>
				<Skeleton class="h-3 w-3/4"></Skeleton>
			</div>
		{/each}
	</div>
</HacksCollection>
