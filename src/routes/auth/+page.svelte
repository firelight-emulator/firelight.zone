<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { page } from '$app/stores';
	import { getSupabaseClient } from '$lib/supabase';

	import type { AuthError } from '@supabase/supabase-js';

	const supabase = getSupabaseClient();

	const redirectTo = $page.url.searchParams.get('redirect') || '/';

	let error: AuthError | null = null;

	async function signInWithDiscord() {
		const resp = await supabase.auth.signInWithOAuth({
			provider: 'discord',
			options: {
				redirectTo,
			},
		});
		if (resp.error) {
			error = resp.error;
		}
	}
</script>

<Layout centered>
	<main class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">Sign in</h1>
		</div>
		<Button on:click={signInWithDiscord}>Sign in with Discord</Button>

		<!-- TODO: add these pages -->
		<p class="px-8 text-center text-sm text-muted-foreground">
			By continuing, you agree to our{' '}
			<a href="/terms" class="underline underline-offset-4 hover:text-primary">
				Terms of Service
			</a>{' '}
			and{' '}
			<a href="/privacy" class="underline underline-offset-4 hover:text-primary">
				Privacy Policy
			</a>
			.
		</p>
	</main>
</Layout>

<AlertDialog.Root open={!!error}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Authentication error</AlertDialog.Title>
			<AlertDialog.Description>
				{error?.message}
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Action>OK</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
