<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	// TODO
	const bannerImage = 'http://placekitten.com/800/200';
	const logoImage = 'http://placekitten.com/200/200';

	export let name: string;
	export let description: string;
</script>

<Card.Root class="h-96">
	<Card.Header class="pb-4">
		<div
			class="flex h-64 w-full items-center justify-items-center rounded-lg bg-cover bg-center p-8"
			style={`background-image: url(${bannerImage})`}
		>
			<img src={logoImage} alt={name} class="max-h-full max-w-full" />
		</div>
	</Card.Header>
	<Card.Content>
		<Card.Title class="overflow-hidden text-ellipsis whitespace-nowrap pb-2">
			{name}
		</Card.Title>
		<Card.Description class="line-clamp-2">
			{description}
		</Card.Description>
	</Card.Content>
</Card.Root>
