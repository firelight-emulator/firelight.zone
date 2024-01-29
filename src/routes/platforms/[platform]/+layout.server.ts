import { error } from '@sveltejs/kit';

export async function load({ locals: { supabase }, params }) {
	const { data, error: queryError } = await supabase
		.from('platforms')
		.select()
		.eq('slug', params.platform)
		.single();

	if (queryError) {
		console.error(queryError);
		error(404);
	}

	return { platform: data };
}
