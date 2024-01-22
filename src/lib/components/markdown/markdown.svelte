<!-- Safe markdown-rendering component that doesn't allow custom HTML. -->

<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import HtmlAsTextRenderer from "./html-as-text-renderer.svelte";

  export let source: string;
</script>

<div class="prose prose-stone dark:prose-invert">
  <SvelteMarkdown
    source={source}
    options={{ breaks: true, smartypants: true }}
    renderers={{
      html: HtmlAsTextRenderer,
      // TODO(security): consider disallowing images
    }}
  />
</div>
