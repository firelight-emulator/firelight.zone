<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { formSchema, type FormSchema } from './schema';
	import { getSupabaseClient } from '$lib/supabase';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { AuthError } from '@supabase/supabase-js';
	import { createEventDispatcher } from 'svelte';

	export let form: SuperValidated<FormSchema>;
	export let redirect: URL;

	const supabase = getSupabaseClient();

	let email: string | null = null;

	const dispatch = createEventDispatcher<{ error: AuthError }>();
</script>

<Form.Root
	{form}
	schema={formSchema}
	let:config
	let:submitting
	class="grid"
	options={{
		async onSubmit({ formData, cancel }) {
			cancel(); // Don't submit the form to the server
			email = formData.get('email')?.toString() ?? null;
			if (!email) return;
			const resp = await supabase.auth.signInWithOtp({
				email,
				options: {
					emailRedirectTo: redirect.href,
				},
			});
			if (resp.error) {
				email = null;
				dispatch('error', resp.error);
			}
		},
	}}
>
	<Form.Field {config} name="email">
		<Form.Item>
			<Form.Label>Email address</Form.Label>
			<Form.Input
				type="email"
				autocapitalize="none"
				autocomplete="email"
				autocorrect="off"
				placeholder="luigi@mushroomkingdom.com"
				autofocus
			/>
			<Form.Validation />
		</Form.Item>
	</Form.Field>
	<Form.SubmitButton {submitting}>Send magic link</Form.SubmitButton>
</Form.Root>

<AlertDialog.Root open={!!email}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Check your email</AlertDialog.Title>
			<AlertDialog.Description>
				<p>
					We've sent a sign in link to <strong>{email}</strong>.
				</p>
				<p>
					Click the link in the email to sign in. If you don't see the email, check your spam
					folder.
				</p>
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			{#if email?.endsWith('@gmail.com')}
				<AlertDialog.Action
					on:click={() => {
						window.open('https://mail.google.com/mail/u/0/#inbox', '_blank', 'noopener');
					}}
				>
					Open Gmail
				</AlertDialog.Action>
			{:else}
				<AlertDialog.Action>OK</AlertDialog.Action>
			{/if}
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
