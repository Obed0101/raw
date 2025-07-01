<script>
  let { label = "", value = 0 } = $props();
</script>

<div class="terminal-card">
  <div class="terminal-stat">
    <div class="terminal-stat-label">{label}</div>
    <div class="terminal-stat-value">{value}</div>
  </div>
</div>
