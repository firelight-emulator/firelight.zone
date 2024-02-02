import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(1, { message: 'Required' }),
	// TODO: ability to change slug, with redirect history
	markdown_description: z.string(),
});

export type FormSchema = typeof formSchema;
