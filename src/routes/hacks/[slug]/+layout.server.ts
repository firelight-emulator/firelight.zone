import { error } from '@sveltejs/kit';

export async function load({ locals: { supabase, getSession }, params }) {
	const { data, error: queryError } = await supabase
		.from('hacks')
		.select(`*, games(name, slug)`)
		.eq('slug', params.slug)
		.single();

	if (queryError || !data.games) {
		console.error(queryError);
		error(404);
	}

	const session = await getSession();

	const { games: game, ...hack } = data;

	const base = `/hacks/${params.slug}`;

	const isCreator = hack.creator !== null && hack.creator === session?.user.id;

	return {
		hack,
		game,
		base,
		permissions: {
			edit: isCreator,
			delete: isCreator,
		},
	};
}
