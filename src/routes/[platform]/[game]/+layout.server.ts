import { error } from '@sveltejs/kit';

export async function load({ locals: { supabase }, params, parent }) {
	const { platform } = await parent();

	const { data: game, error: queryError } = await supabase
		.from('games')
		.select(`*, game_releases!inner(*)`)
		.eq('slug', params.game)
		.eq('game_releases.platform_id', platform.id)
		.single();

	if (queryError) {
		console.error('error querying game', queryError);
		error(404);
	}

	return { game };
}
