{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs
    nodePackages.pnpm
    prisma-engines
  ];

  shellHook = ''
    pnpm install --frozen-lockfile

    # Supabase
    pnpm supabase start
    pnpm supabase status -o env > .env

    # Make some vars available to SvelteKit client by prefixing with PUBLIC_
    sed -i 's/ANON_KEY/PUBLIC_ANON_KEY/' .env
    sed -i 's/API_URL/PUBLIC_API_URL/' .env

    # Load environment variables
    set -a
    source .env
    set +a

    # Prisma (ElectricSQL client dependency) needs binaries provided
    # !! prisma-engines version must match the version in package.json !!
    export PRISMA_SCHEMA_ENGINE_BINARY="${pkgs.prisma-engines}/bin/schema-engine"
    export PRISMA_QUERY_ENGINE_BINARY="${pkgs.prisma-engines}/bin/query-engine"
    export PRISMA_QUERY_ENGINE_LIBRARY="${pkgs.prisma-engines}/lib/libquery_engine.node"
    export PRISMA_FMT_BINARY="${pkgs.prisma-engines}/bin/prisma-fmt"
  
    # ⚡ ElectricSQL
    export LOGICAL_PUBLISHER_HOST=localhost
    pnpm electric-sql start --detach
    trap 'pnpm electric-sql stop && pnpm supabase stop' EXIT
  '';
}
