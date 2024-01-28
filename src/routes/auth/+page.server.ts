import { superValidate } from 'sveltekit-superforms/server';

import type { PageServerLoad } from './$types';
import { formSchema } from './schema';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(formSchema),
	};
};
