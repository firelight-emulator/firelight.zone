import type { SupabaseClient } from '@supabase/supabase-js';
import { getContext } from 'svelte';

export function getSupabaseClient() {
	return getContext<SupabaseClient>('supabase');
}
