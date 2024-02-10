export async function load({ locals: { supabase }, parent }) {
	const { platform } = await parent();

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
