<script>
  let { value = $bindable(""), placeholder = "", type = "text", label = "", disabled = false } = $props();
  
  let inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
</script>

<div class="terminal-input-group">
  {#if label}
    <label class="terminal-input-label" for={inputId}>{label}</label>
  {/if}
  <input 
    id={inputId}
    class="terminal-input"
    bind:value
    {placeholder}
    {type}
    {disabled}
  />
</div>
