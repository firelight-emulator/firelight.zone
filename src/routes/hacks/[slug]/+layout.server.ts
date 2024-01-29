import { error } from '@sveltejs/kit';

export async function load({ locals: { supabase }, params }) {
	const { data: hack, error: queryError } = await supabase
		.from('hacks')
		.select()
		.eq('slug', params.slug)
		.single();

	if (queryError) {
		console.error(queryError);
		error(404);
	}

	return { hack };
}
