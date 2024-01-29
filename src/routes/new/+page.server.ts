import { toSlug } from '$lib/convert';
import { error, fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

import type { Actions, PageServerLoad } from './$types';
import { formSchema } from './schema';

export const load: PageServerLoad = async ({ locals: { getSession } }) => {
	// if not logged in, redirect to login
	const session = await getSession();
	if (!session) {
		return redirect(303, `/auth?redirect=/new`);
	}

	return {
		form: await superValidate(formSchema),
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, formSchema);
		if (!form.valid) {
			return fail(400, {
				form,
			});
		}

		const { supabase } = event.locals;

		// Get the game id
		const gameResp = await supabase
			.from('games')
			.select('id')
			.eq('name', form.data.game_name)
			.single();
		if (gameResp.error) {
			console.error(gameResp.error);
			throw error(500, 'Error finding game');
		}

		// Create the hack
		const createResp = await supabase
			.from('hacks')
			.insert({
				game_id: gameResp.data.id,
				name: form.data.name,
				slug: form.data.slug.length === 0 ? toSlug(form.data.name) : form.data.slug,
			})
			.select('slug')
			.single();
		if (createResp.error) {
			console.error(createResp.error);
			throw error(500, 'Error creating hack');
		}

		// Redirect to the hack's page
		return redirect(303, `/hacks/${createResp.data.slug}`);
	},
};
