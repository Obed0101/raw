<script>
  let { text = "Click", onClick = () => {}, type = "primary", disabled = false } = $props(); // primary, secondary, danger
</script>

<button 
  class="terminal-button terminal-button--{type}" 
  onclick={onClick}
  {disabled}
>
  {text}
</button>
