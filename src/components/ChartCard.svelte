<script>
  let { title = "", chartId = "chart" } = $props();
</script>

<div class="terminal-card">
  <div class="terminal-graph">
    <div class="terminal-graph-title">{title}</div>
    <div id={chartId}></div>
  </div>
</div>
