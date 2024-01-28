import { PUBLIC_ANON_KEY, PUBLIC_API_URL } from '$env/static/public';
import type { Database } from '$lib/supabase/database.ts';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';

export const load = async ({ fetch, data, depends }) => {
	depends('supabase:auth');

	const supabase = createSupabaseLoadClient<Database>({
		supabaseUrl: PUBLIC_API_URL,
		supabaseKey: PUBLIC_ANON_KEY,
		event: { fetch },
		serverSession: data.session,
	});

	const {
		data: { session },
	} = await supabase.auth.getSession();

	return { supabase, session };
};
