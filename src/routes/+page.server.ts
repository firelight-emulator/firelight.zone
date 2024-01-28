export async function load({ locals: { supabase } }) {
	const { data, error } = await supabase.from('platforms').select();

	if (error) {
		throw error;
	}

	return { platforms: data };
}
