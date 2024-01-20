<script lang="ts">
  export let href: string | undefined;
</script>

<a {href} class="font-medium">
  <slot />
</a>
