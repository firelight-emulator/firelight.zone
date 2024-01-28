<script lang="ts">
	import NavItem from './nav-item.svelte';
	import UserMenu from './user-menu.svelte';
</script>

<nav class="sticky top-0 flex w-full select-none items-center bg-stone-200 p-3 dark:bg-stone-800">
	<NavItem href="/">Firelight</NavItem>

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
