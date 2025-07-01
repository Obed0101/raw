<script lang="ts">
  import { marked } from 'marked';

  export let markdown: string = '';
  export let className: string = '';
</script>

<div class={`prose dark:prose-invert max-w-none ${className}`}>
  {@html marked(markdown)}
</div>

<style lang="postcss">
  /* No custom styles needed with Tailwind Typography */
</style> 