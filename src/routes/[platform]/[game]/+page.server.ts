export async function load({ locals: { supabase }, parent }) {
	const { game } = await parent();

	const { data: hacks, error: queryError } = await supabase
		.from('hacks')
		.select()
		.eq('game_id', game.id);

	if (queryError) {
		console.error(queryError);
		return { game, hacks: [] };
	}

	return { game, hacks };
}
