<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { type Hack } from '$lib/stores/hacks';

	export let hack: Hack;
</script>

<Card.Root class="h-96">
	<Card.Header class="pb-4">
		<div
			class="flex h-64 w-full items-center justify-items-center rounded-lg bg-cover bg-center p-8"
			style={`background-image: url(${hack.bannerImage})`}
		>
			<img src={hack.logoImage} alt={hack.name} class="max-h-full max-w-full" />
		</div>
	</Card.Header>
	<Card.Content>
		<Card.Title class="overflow-hidden text-ellipsis whitespace-nowrap pb-2">
			{hack.name}
		</Card.Title>
		<Card.Description class="line-clamp-2">
			{hack.shortDescription}
		</Card.Description>
	</Card.Content>
</Card.Root>
