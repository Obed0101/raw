<script>
let { title = "", showCursor = false, children } = $props();
</script>

<div class="terminal-header">
  {title} {#if showCursor}<span class="terminal-cursor"></span>{/if}
  <div class="terminal-meta">
    {@render children?.()}
  </div>
</div>
