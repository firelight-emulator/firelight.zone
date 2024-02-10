import { error } from '@sveltejs/kit';

export async function load({ locals: { supabase }, params }) {
	const { data: platform, error: queryError } = await supabase
		.from('platforms')
		.select()
		.eq('slug', params.platform)
		.single();

	if (queryError) {
		console.error(queryError);
		error(404);
	}

	const { data: games, error: queryError2 } = await supabase
		.from('games')
		.select(`*, game_releases!inner(*)`)
		.eq('game_releases.platform_id', platform.id)
		.order('sort_key'); // TODO: create index

	if (queryError2) {
		console.error(queryError2);
		return { platform, games: [] };
	}

	return { platform, games };
}
