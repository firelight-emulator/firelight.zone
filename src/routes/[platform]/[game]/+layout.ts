import { games } from '$lib/fakeapi';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const game = Object.values(games).find((game) => {
		return game.platform == params.platform && game.slug == params.game;
	});
	if (!game) error(404);

	return {
		game,
	};
}
