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
pnpm supabase status -o env > .env
sed -i 's/ANON_KEY/PUBLIC_ANON_KEY/' .env
sed -i 's/API_URL/PUBLIC_API_URL/' .env
```

### Development server

Run SvelteKit:

```bash
pnpm dev
```

Then open the provided URL in your browser.

### Authentication in local environment

To log in, you must use magic link authentication. The OAuth providers won't work.

Emails are sent to an Inbucket service at http://localhost:54324/.
