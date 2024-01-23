<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
	import { Reload } from "radix-icons-svelte";
	import Layout from "$lib/components/layout.svelte";

  onMount(async () => {
    const url = $page.url;
    const auth = getAuth();

    const redirectUrl = url.searchParams.get("redirect") ?? "/";
    const errorUrl = new URL("/auth", url);
    errorUrl.searchParams.set("redirect", redirectUrl);

    if (!isSignInWithEmailLink(auth, url.href)) {
      goto(errorUrl);
    }

    let email = window.localStorage.getItem("emailForAuth");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again.
      email = window.prompt('Please provide your email for confirmation');
    }

    try {
      await signInWithEmailLink(auth, email!, window.location.href);
    } catch (error) {
      console.error(error);
      goto(errorUrl);
    }

    window.localStorage.removeItem("emailForAuth");

    goto(redirectUrl);
  });
</script>

<Layout centered>
  <Reload class="h-4 w-4 animate-spin" />
</Layout>
