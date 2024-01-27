<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import NavItem from './nav-item.svelte';
	import { getSession } from '$lib/session';
	import { getSupabaseClient } from '$lib/supabase';

	const supabase = getSupabaseClient();
	const session = getSession();

	async function signOut() {
		await supabase.auth.signOut();
		// Reload page because session is not reactive
		window.location.reload();
	}
</script>

{#if session}
	<DropdownMenu.Root>
		<DropdownMenu.Trigger>
			<Avatar.Root>
				<Avatar.Fallback>AB</Avatar.Fallback>
			</Avatar.Root>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<DropdownMenu.Label>{session.user.email}</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>Profile</DropdownMenu.Item>
				<DropdownMenu.Separator />
				<DropdownMenu.Item on:click={signOut}>Sign out</DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
{:else}
	<NavItem href="/auth">Sign in</NavItem>
{/if}
