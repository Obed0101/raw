<script>
  let { text = "", level = 1 } = $props(); // h1, h2, h3, etc.
</script>

<div class="terminal-title">
  {#if level === 1}<h1>{text}</h1>
  {:else if level === 2}<h2>{text}</h2>
  {:else if level === 3}<h3>{text}</h3>
  {:else if level === 4}<h4>{text}</h4>
  {:else if level === 5}<h5>{text}</h5>
  {:else}<h6>{text}</h6>
  {/if}
</div>
