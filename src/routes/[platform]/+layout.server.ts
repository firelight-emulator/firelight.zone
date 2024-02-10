import { error } from '@sveltejs/kit';

export async function load({ locals: { supabase }, params }) {
	const { data: platform, error: queryError } = await supabase
		.from('platforms')
		.select()
		.eq('slug', params.platform)
		.single();

	if (queryError) {
		console.error('error querying platform', queryError);
		error(404);
	}

	return { platform };
}
