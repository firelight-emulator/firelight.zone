<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import NavItem from "./nav-item.svelte";
  import { SignedIn, SignedOut } from "sveltefire";
</script>

<SignedIn let:user let:signOut>
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <Avatar.Root>
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar.Root>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
        <DropdownMenu.Label>{user.email}</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item on:click={signOut}>Sign out</DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</SignedIn>

<SignedOut>
  <NavItem href="/auth">Sign in</NavItem>
</SignedOut>
