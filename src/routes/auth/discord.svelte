<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { getSupabaseClient } from '$lib/supabase';

	const supabase = getSupabaseClient();

	export let redirectTo = '/';

	async function signInWithDiscord() {
		const { error } = supabase.auth.signInWithOAuth({
			provider: 'discord',
			options: {
				redirectTo,
			},
		});
		console.log(error);
	}
</script>

<Button on:click={signInWithDiscord}>Sign in with Discord</Button>
