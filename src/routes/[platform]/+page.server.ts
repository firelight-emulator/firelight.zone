export async function load({ locals: { supabase }, parent }) {
	const { platform } = await parent();

	const { data: games, error: queryError } = await supabase
		.from('games')
		.select(`*, game_releases!inner(*)`)
		.eq('game_releases.platform_id', platform.id)
		.order('sort_key'); // TODO: create index

	if (queryError) {
		console.error('error querying games', queryError);
		return { platform, games: [] };
	}

	return { platform, games };
}
