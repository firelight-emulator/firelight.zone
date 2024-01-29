export async function load({ locals: { supabase }, params }) {
	const { data, error: queryError } = await supabase.

	if (queryError) {
		console.error(queryError);
	}

	return { platformGames: data };
}
