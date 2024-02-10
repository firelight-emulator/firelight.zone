<script lang="ts">
	import { page } from '$app/stores';

	export let base: string;

	const items = [
		{
			name: 'Overview',
			slug: 'overview',
		},
		{
			name: 'Settings',
			slug: 'settings',
		},
	];

	console.log($page.params); // TODO: figure out how to access [tab] in layout

	let active = $page.params.tab ?? 'overview';
</script>

<nav>
	<ul class="flex gap-2">
		{#each items as item (item.name)}
			<li
				class="rounded-tl rounded-tr text-sm font-medium"
				class:bg-background={active === item.slug}
			>
				<a
					href={`${base}/${item.slug}`}
					class="inline-block px-6 py-2 text-stone-900 dark:text-stone-400">{item.name}</a
				>
			</li>
		{/each}
	</ul>
</nav>
