<script>
  let { text = "", type = "default", size = "medium" } = $props(); // default, success, warning, error, info | small, medium, large
</script>

<span class="terminal-badge terminal-badge--{type} terminal-badge--{size}">
  {text}
</span>
