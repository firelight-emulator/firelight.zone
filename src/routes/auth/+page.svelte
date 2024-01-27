<script lang="ts">
  import Layout from "$lib/components/layout.svelte";
	import DiscordSignInButton from "./discord.svelte";
</script>

<Layout centered>
  <main class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
    <div class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">Sign in</h1>
    </div>
    <DiscordSignInButton />

    <!-- TODO: add these pages -->
    <p class="px-8 text-center text-sm text-muted-foreground">
      By continuing, you agree to our{" "}
      <a href="/terms" class="underline underline-offset-4 hover:text-primary">
        Terms of Service
      </a>{" "}
      and{" "}
      <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
        Privacy Policy
      </a>
      .
    </p>
  </main>
</Layout>
