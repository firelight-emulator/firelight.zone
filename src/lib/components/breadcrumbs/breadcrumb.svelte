<script lang="ts">
	import { page } from '$app/stores';
	import { Slash } from 'radix-icons-svelte';

	/**
	 * Number of parents to go up in the page hierarchy.
	 * For example, if the current page is /a/b/c/d, and you want to go up to /a/b, you would set this to 2.
	 */
	export let up: number;

	function getParentUrl(url: URL, goUpBy: number) {
		url = new URL(url);
		for (let i = 0; i < goUpBy; i++) {
			url.pathname = url.pathname.split('/').slice(0, -1).join('/');
		}
		return url;
	}

	let url = getParentUrl($page.url, up);
</script>

<a
	href={url.toString()}
	class="itmes-center flex rounded p-1 px-2 hover:bg-stone-100 dark:hover:bg-stone-900"
>
	<slot />
</a>

<span class="text-stone-400">
	<Slash />
</span>

<style>
	span:last-child {
		display: none;
	}
</style>
