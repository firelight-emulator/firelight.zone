import { z } from 'zod';

export const formSchema = z.object({
	name: z.string(),
	slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
		message: 'Must be kebab-case (lowercase, hyphenated, no spaces)',
	}),
	game_name: z.string(),
});

export type FormSchema = typeof formSchema;
