<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	import type { PageData } from './$types';
	import NewHackForm from './new-hack-form.svelte';
	export let data: PageData;
</script>

<Layout>
	<div class="mx-auto w-full max-w-screen-sm p-4 pt-16">
		<h1 class="mb-4 text-3xl font-bold">Create a new hack</h1>

		<NewHackForm form={data.form} />
	</div>
</Layout>
