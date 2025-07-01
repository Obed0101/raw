<script>
  let { text = "", align = "left" } = $props(); // left, center, right
</script>

<p class="terminal-paragraph" style="text-align: {align}">
  {text}
</p>
