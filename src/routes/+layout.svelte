<script lang="ts">
	import type { Session, SupabaseClient } from '@supabase/supabase-js';
	import { setContext } from 'svelte';

	export let data: {
		supabase: SupabaseClient;
		session: Session | null;
	};

	setContext('supabase', data.supabase);
	setContext('session', data.session);
</script>

<slot />
