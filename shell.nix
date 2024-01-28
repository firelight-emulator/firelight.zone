{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs
    nodePackages.pnpm
  ];

  shellHook = ''
    pnpm install
    pnpm supabase start
    pnpm supabase status -o env > .env
    sed -i 's/ANON_KEY/PUBLIC_ANON_KEY/' .env
    sed -i 's/API_URL/PUBLIC_API_URL/' .env
    trap 'pnpm supabase stop' EXIT
  '';
}
