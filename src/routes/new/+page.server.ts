import { superValidate } from 'sveltekit-superforms/server';

import { formSchema } from './schema';

export async function load() {
	return {
		form: await superValidate(formSchema),
	};
}
