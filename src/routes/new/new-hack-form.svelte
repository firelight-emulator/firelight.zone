<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { formSchema, type FormSchema } from './schema';
	import type { SuperValidated } from 'sveltekit-superforms';
	export let form: SuperValidated<FormSchema>;
</script>

<Form.Root method="POST" {form} schema={formSchema} let:config>
	<Form.Field {config} name="game_name">
		<Form.Item>
			<Form.Label>Game</Form.Label>
			<Form.Game />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="name">
		<Form.Item>
			<Form.Label>Title</Form.Label>
			<Form.Input autocomplete="off" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Field {config} name="slug">
		<Form.Item>
			<!-- TODO: display as url, like https://site/games/[game]/[slug] -->
			<Form.Label>Slug</Form.Label>
			<Form.Slug mimic="name" />
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.Button>Create</Form.Button>
</Form.Root>
