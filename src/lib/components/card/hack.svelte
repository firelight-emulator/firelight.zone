<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { type Hack } from "$lib/stores/hacks";

  export let hack: Hack;
</script>

<Card.Root class="h-96">
  <Card.Header class="pb-4">
    <div class="flex items-center justify-items-center bg-cover bg-center w-full h-64 p-8 rounded-lg" style={`background-image: url(${hack.bannerImage})`}>
      <img src={hack.logoImage} alt={hack.name} class="max-h-full max-w-full" />
    </div>
  </Card.Header>
  <Card.Content>
    <Card.Title class="pb-2 whitespace-nowrap overflow-hidden text-ellipsis">
      {hack.name}
    </Card.Title>
    <Card.Description class="line-clamp-2">
      {hack.shortDescription}
    </Card.Description>
  </Card.Content>
</Card.Root>
