import { error } from '@sveltejs/kit';

export async function load({ parent, locals: { supabase }, params }) {
	const { game } = await parent();

	const { data: hack, error: queryError } = await supabase
		.from('hacks')
		.select()
		.eq('game_id', game.id)
		.eq('slug', params.hack);

	if (queryError) {
		console.error(queryError);
		error(404);
	}

	return { hack };
}
