<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Reload } from "radix-icons-svelte";

  import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
  import { page } from "$app/stores";
  import { createEventDispatcher } from "svelte";

  export const dispatch = createEventDispatcher<{ sent: string }>();
	
  const finishUrl = new URL('/auth/finish', $page.url);
  finishUrl.searchParams.set('redirect', $page.url.searchParams.get("redirect") ?? "/");

  const auth = getAuth();

  let email = "";
  let isLoading = false;

  async function onSubmit() {
    isLoading = true;

    const actionCodeSettings = {
      url: finishUrl.href,
      handleCodeInApp: true,
    };

    // Save email for finish page to check for session fixation attacks.
    window.localStorage.setItem('emailForAuth', email);

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    } finally {
      isLoading = false;
    }

    console.log("sent", email);
    dispatch("sent", email);
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="grid gap-2">
    <div class="grid gap-1">
      <Label class="sr-only" for="email">Email</Label>
      <Input
        id="email"
        placeholder="name@example.com"
        type="email"
        autocapitalize="none"
        autocomplete="email"
        autocorrect="off"
        autofocus
        disabled={isLoading}
        bind:value={email}
      />
    </div>
    <Button disabled={isLoading} type="submit">
      {#if isLoading}
        <Reload class="mr-2 h-4 w-4 animate-spin" />
      {/if}
      Send magic link
    </Button>
  </div>
</form>
