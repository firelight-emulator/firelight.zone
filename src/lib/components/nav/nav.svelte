<script lang="ts">
  import NavItem from "./nav-item.svelte";
  import UserMenu from "./user-menu.svelte";
</script>

<nav class="p-3 flex items-center select-none">
  <NavItem href="/">
    Firelight
  </NavItem>

  <slot name="breadcrumbs" />

  <div class="flex-1" />

  <div class="flex items-center">
    <UserMenu />
  </div>
</nav>
