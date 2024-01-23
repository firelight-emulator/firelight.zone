<script lang="ts">
  import NavItem from "./nav-item.svelte";
  import UserMenu from "./user-menu.svelte";
</script>

<nav class="p-3 flex items-center select-none sticky w-full top-0 bg-stone-200 dark:bg-stone-800">
  <NavItem href="/">
    Firelight
  </NavItem>

  <slot name="breadcrumbs" />

  <div class="flex-1" />

  <div class="flex items-center">
    <UserMenu />
  </div>
</nav>

<style>
  @supports (backdrop-filter: blur(16px)) {
    nav {
      backdrop-filter: blur(16px);
      --tw-bg-opacity: 0.8 !important;
    }
  }
</style>
