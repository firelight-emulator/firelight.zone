import type { Session } from '@supabase/supabase-js';
import { getContext } from 'svelte';

export function getSession(): Session | null {
	return getContext<Session>('session');
}

export function isSignedIn(): boolean {
	const session = getSession();
	return !!(session && session.user);
}
