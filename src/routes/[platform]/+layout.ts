import { platforms } from '$lib/fakeapi';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const platform = Object.values(platforms).find((platform) => platform.id == params.platform);
	if (!platform) error(404);
	return {
		platform,
	};
}
