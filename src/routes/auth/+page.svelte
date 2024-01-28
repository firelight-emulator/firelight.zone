<script lang="ts">
	import Layout from '$lib/components/layout.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { page } from '$app/stores';
	import { getSupabaseClient } from '$lib/supabase';
	import { isSignedIn } from '$lib/session';
	import type { AuthError } from '@supabase/supabase-js';
	import MagicLinkForm from './magic-link-form.svelte';
	import { DiscordLogo } from 'radix-icons-svelte';
	import type { PageData } from './$types';

	const supabase = getSupabaseClient();

	export let data: PageData;

	// note: must be in additional_redirect_urls in supabase settings
	const redirect = new URL($page.url.searchParams.get('redirect') || '/', $page.url);

	let error: AuthError | null = null;

	if (isSignedIn()) {
		window.location.replace(redirect);
	}

	async function signInWithDiscord() {
		const resp = await supabase.auth.signInWithOAuth({
			provider: 'discord',
			options: {
				redirectTo: redirect.href,
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
			<h1 class="text-2xl font-semibold tracking-tight">Sign in to Firelight</h1>
		</div>

		<MagicLinkForm form={data.form} {redirect} on:error={(evt) => (error = evt.detail)} />

		<div class="relative">
			<div class="absolute inset-0 flex items-center">
				<span class="w-full border-t" />
			</div>
			<div class="relative flex justify-center text-xs">
				<span class="bg-background px-2 text-muted-foreground"> or continue with </span>
			</div>
		</div>

		<Button on:click={signInWithDiscord} class="bg-blurple text-white hover:bg-blurple">
			<DiscordLogo class="mr-2 h-5 w-5" />
			Discord
		</Button>

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
