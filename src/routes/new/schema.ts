import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, { message: 'Required' }),
	slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
		message: 'Must be kebab-case (lowercase, hyphenated, no spaces)',
	}),
	game_name: z.string().min(1, { message: 'Required' }),
});

export type FormSchema = typeof formSchema;
