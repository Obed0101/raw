<script>
  let { title = "", children } = $props();
</script>

<div class="terminal-card">
  {#if title}
    <div class="terminal-card-title">{title}</div>
  {/if}
  <div class="terminal-card-content">
    {@render children?.()}
  </div>
</div>
