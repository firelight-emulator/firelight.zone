<script lang="ts">
	import type { Session, SupabaseClient } from '@supabase/supabase-js';
	import { setContext } from 'svelte';

	export let supabase: SupabaseClient;
	export let session: Session | null;

	setContext('supabase', supabase);
	setContext('session', session);
</script>

<slot />
