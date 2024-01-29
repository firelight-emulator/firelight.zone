export function toSlug(name: string): string {
	return name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-') // replace non-alphanumeric characters with dashes
		.replace(/^-|-$/g, '') // remove leading and trailing dashes
		.replace(/-+/g, '-'); // replace multiple dashes with a single dash
}
