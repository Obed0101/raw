<script>
  let { items = [], numbered = false } = $props();
</script>

<div class="terminal-list">
  {#if numbered}
    <ol class="terminal-list-ordered">
      {#each items as item}
        <li class="terminal-list-item">{item}</li>
      {/each}
    </ol>
  {:else}
    <ul class="terminal-list-unordered">
      {#each items as item}
        <li class="terminal-list-item">{item}</li>
      {/each}
    </ul>
  {/if}
</div>
