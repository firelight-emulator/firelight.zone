<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { z } from 'zod';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	export let form: SuperValidated<FormSchema>;

	type Hack = z.infer<FormSchema>;

	export let hack: Hack;
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config let:submitting>
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Title</Form.Label>
			<Form.Input autocomplete="off" value={hack.name} />
			<!-- FIXME: value doesn't work -->
			<Form.Validation />
		</Form.Item>
		<!-- TODO: prosemirror -->
	</Form.Field>
	<Form.SubmitButton {submitting}>Save</Form.SubmitButton>
</Form.Root>
