import { games, hacks } from '$lib/fakeapi';

export function load({ params }) {
  const game = Object.entries(games).find(([, value]) => {
    return value.console == params.console && value.slug == params.game;
  });
  if (!game) return { status: 404 };

  const gameHacks = Object.entries(hacks).filter(([, value]) => { return value.game == game[0]; });

  return {
    gameId: game[0],
    game: game[1],
    hacks: gameHacks.map(([id, hack]) => {
      return { id, ...hack };
    })
  };
}
