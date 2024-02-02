import { redirect } from '@sveltejs/kit';

// Redirect to base
export function load({ params }) {
	return redirect(301, `/hacks/${params.slug}`);
}
