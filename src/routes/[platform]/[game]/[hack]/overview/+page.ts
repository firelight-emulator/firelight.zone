import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
	const { base } = await parent();
	return redirect(301, base);
}
