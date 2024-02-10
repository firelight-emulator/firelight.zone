<script lang="ts">
	import Form from './form.svelte';

	export let data;
</script>

<Form hack={data.hack} form={data.form} />
