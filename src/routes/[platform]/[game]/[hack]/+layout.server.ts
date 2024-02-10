import { error } from '@sveltejs/kit';

export async function load({ locals: { supabase, getSession }, params, parent }) {
	const { platform, game } = await parent();

	const { data: hack, error: queryError } = await supabase
		.from('hacks')
		.select()
		.eq('game_id', game.id)
		.eq('slug', params.hack)
		.single();

	if (queryError) {
		console.error('error querying hack', queryError);
		error(404);
	}

	const session = await getSession();

	const base = `/${platform.slug}/${game.slug}/${hack.slug}`;

	const isCreator = hack.creator !== null && hack.creator === session?.user.id;

	return {
		hack,
		base,
		permissions: {
			edit: isCreator,
			delete: isCreator,
		},
	};
}
