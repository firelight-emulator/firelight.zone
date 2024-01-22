import { consoles, games, hacks } from '$lib/fakeapi';

export function load({ params }) {
  const gameConsole = consoles[params.console];
  if (!gameConsole) return { status: 404 };

  const game = Object.entries(games).find(([, value]) => {
    return value.console == params.console && value.slug == params.game;
  });
  if (!game) return { status: 404 };

  const hack = Object.entries(hacks).find(([, value]) => {
    return value.game == game[0] && value.slug == params.hack;
  });
  if (!hack) return { status: 404 };

  return {
    consoleId: params.console,
    console: gameConsole,
    gameId: game[0],
    game: game[1],
    hackId: hack[0],
    hack: hack[1],
  };
}
