<script lang="ts">
  import * as Card from "$lib/components/ui/card";

  export let hack: any; // TODO: type
</script>

<Card.Root>
  <Card.Header>
    <div
      class="flex items-center justify-items-center bg-cover bg-center w-full p-8 rounded-lg"
      style:background-image="url({hack.heroBackground})"
      style:view-transition-name="hack-background"
    >
      <img
        src={hack.heroLogo}
        alt={hack.title}
        class="max-h-full max-w-full"
        style:view-transition-name="hack-logo"
      />
    </div>
  </Card.Header>
  <Card.Content>
    <Card.Title class="pb-2">{hack.title}</Card.Title>
    <Card.Description>{hack.shortDescription}</Card.Description>
  </Card.Content>
</Card.Root>
