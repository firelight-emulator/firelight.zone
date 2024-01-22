import { games } from '$lib/fakeapi';

export function load({ params }) {
  const game = Object.entries(games).find(([, value]) => {
    return value.console == params.console && value.slug == params.game;
  });
  if (!game) return { status: 404 };

  return {
    gameId: game[0],
    game: game[1],
  };
}
