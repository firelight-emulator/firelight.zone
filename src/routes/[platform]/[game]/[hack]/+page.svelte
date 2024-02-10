<script lang="ts">
	import Markdown from '$lib/components/markdown';

	export let data;
</script>

<h1 class="py-3 text-4xl font-bold text-stone-900 dark:text-stone-100">{data.hack.name}</h1>

<p></p>

<Markdown source={data.hack.markdown_description} />
