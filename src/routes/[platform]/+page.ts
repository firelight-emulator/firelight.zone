import { games } from '$lib/fakeapi';

export function load({ params }) {
	const platformGames = Object.values(games).filter((game) => game.platform == params.platform);

	return {
		games: platformGames,
	};
}
