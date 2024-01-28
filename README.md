# Firelight website

## Development

There are three deployment environments:

- Production (`main` branch)
- Staging (`develop` branch)
- Local (what we're going to set up)

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- Either of the following:
  - [Nix](https://nixos.org/download); or
  - Node.js and [pnpm](https://pnpm.io/installation)

### Setup

If you're using Nix, just run `nix-shell`. Otherwise, install and set up a local Supabase deployment:

```bash
pnpm install
pnpm supabase start
```

Create a `.env` file with the API URL and anon key provided by Supabase (you can run `pnpm supabase status` to see them again):

```ini
PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
PUBLIC_SUPABASE_ANON_KEY=abdefghijklmnopqrstuvwxyz
```

(TODO: do this automatically with `pnpm supabase status -o env`)

### Development server

Run SvelteKit:

```bash
pnpm dev
```

Then open the provided URL in your browser.
