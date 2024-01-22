import { consoles } from '$lib/fakeapi';

export function load({ params }) {
  const gameConsole = consoles[params.console];
  if (!gameConsole) return { status: 404 };

  return {
    consoleId: params.console,
    console: gameConsole,
  };
}
