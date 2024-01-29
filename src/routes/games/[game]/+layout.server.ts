import { error } from '@sveltejs/kit';

export async function load({ locals: { supabase }, params }) {
	const { data: game, error: queryError } = await supabase
		.from('games')
		.select()
		.eq('slug', params.game)
		.single();

	if (queryError) {
		console.error(queryError);
		error(404);
	}

	const { data: hacks, error: queryError2 } = await supabase
		.from('hacks')
		.select()
		.eq('game_id', game.id);

	if (queryError2) {
		console.error(queryError2);
		return { game, hacks: [] };
	}

	return { game, hacks };
}
