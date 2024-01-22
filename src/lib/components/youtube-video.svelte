<script lang="ts">
  import { Youtube } from 'svelte-youtube-lite';

  // TODO: it would be nice to use a higher res, custom thumbnail
  // this may involve embedding the iframe directly or using the jsapi

  export let id: string;  
</script>

<svelte:head>
  <script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div>
  <Youtube
    id={id}
    showTitle={false}
    thumbnail="hqdefault"
  />
</div>
