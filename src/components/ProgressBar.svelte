<script>
  let { value = 0, max = 100, label = "", showPercentage = true } = $props(); // 0-100
  
  let percentage = $derived(Math.round((value / max) * 100));
</script>

<div class="terminal-progress">
  {#if label}
    <div class="terminal-progress-label">{label}</div>
  {/if}
  <div class="terminal-progress-bar">
    <div class="terminal-progress-fill" style="width: {percentage}%"></div>
  </div>
  {#if showPercentage}
    <div class="terminal-progress-text">{percentage}%</div>
  {/if}
</div>
