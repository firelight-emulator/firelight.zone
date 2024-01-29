<script lang="ts">
	import { getForm, getFormField } from 'formsnap';
	import { Input } from '$lib/components/ui/input';
	import type { Writable } from 'svelte/store';
	import { toSlug } from '$lib/convert';

	const form = getForm();
	const { attrStore, value, setValue } = getFormField();

	/// The name of the form field to mimic in case the user doesn't provide their own slug.
	/// The field's type must be string.
	export let mimic: string;

	const mimicValue = form.fields[mimic].value as Writable<string>;
	let placeholder = '';

	$: {
		placeholder = toSlug($mimicValue);
	}
</script>

<Input
	{...$attrStore}
	bind:value={$value}
	{placeholder}
	autocapitalize="none"
	autocomplete="off"
	autocorrect="off"
/>
