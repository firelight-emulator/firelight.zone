<script lang="ts">
  import NavItem from "./nav-item.svelte";
  import UserMenu from "./user-menu.svelte";
</script>

<nav class="p-3 flex items-center select-none sticky top-0 bg-slate-200">
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
      --tw-bg-opacity: 0.7;
    }
  }
</style>
