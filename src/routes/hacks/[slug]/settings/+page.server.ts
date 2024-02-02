import { error, fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import type { Actions, PageServerLoad } from './$types';
import { formSchema } from './schema';

export const load: PageServerLoad = async ({ locals: { getSession }, parent }) => {
	// User must own the hack
	const session = await getSession();
	const data = await parent();
	if (data.hack.creator === null || data.hack.creator !== session?.user.id) {
		throw error(403, 'You do not have permission to edit this hack');
	}

	return {
		form: await superValidate(formSchema),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, formSchema);
		if (!form.valid) return fail(400, { form });
		const { supabase } = event.locals;

		// TODO

		return { form };
	},
};
