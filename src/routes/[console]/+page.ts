import { games } from '$lib/fakeapi';

export function load({ params }) {
  const consoleGames = Object.entries(games).filter(([, value]) => { return value.console == params.console; });

  return {
    games: consoleGames.map(([id, game]) => {
      return { id, ...game };
    }),
  };
}
