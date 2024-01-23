<script lang="ts">
  import Layout from "$lib/components/layout.svelte";
	import { Button } from "$lib/components/ui/button";
  
	import EmailPasswordlessForm from "./email-passwordless-form.svelte";

  let sentToEmail: string | null = null;

  function onSent(evt: CustomEvent<string>) {
    sentToEmail = evt.detail;
  }
</script>

<Layout centered>
  <main class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
    {#if sentToEmail}
      <div class="flex flex-col space-y-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">Check your email</h1>
        <p class="text-sm text-muted-foreground">
          We sent a sign in link to <span class="font-semibold">{sentToEmail}</span>.
        </p>

        {#if sentToEmail.endsWith("@gmail.com")}
          <Button href="https://mail.google.com" target="_blank" rel="noopener">
            Open Gmail
          </Button>
        {/if}
      </div>
    {:else}
      <div class="flex flex-col space-y-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">Sign in</h1>
        <p class="text-sm text-muted-foreground">
          Enter your email below
        </p>
      </div>
      <EmailPasswordlessForm on:sent={onSent} />

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
    {/if}
  </main>
</Layout>
