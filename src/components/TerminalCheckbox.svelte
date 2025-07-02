<script>
  /**
   * TerminalCheckbox - Checkbox con estilo terminal
   * @param {boolean} checked - Estado del checkbox
   * @param {string} label - Label del checkbox
   * @param {boolean} disabled - Estado deshabilitado
   * @param {string} value - Valor del checkbox
   * @param {function} onChange - Callback cuando cambia el estado
   */
  let { 
    checked = $bindable(false), 
    label = "", 
    disabled = false,
    value = "",
    onChange = () => {}
  } = $props();

  let checkboxId = `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  function handleChange(event) {
    checked = event.target.checked;
    onChange(checked, value);
  }
</script>

<div class="terminal-checkbox-group">
  <label class="terminal-checkbox-label" for={checkboxId}>
    <input
      id={checkboxId}
      type="checkbox"
      class="terminal-checkbox-input"
      bind:checked
      {disabled}
      {value}
      onchange={handleChange}
    />
    <span class="terminal-checkbox-custom">
      {#if checked}
        <span class="terminal-checkbox-check">✓</span>
      {/if}
    </span>
    {#if label}
      <span class="terminal-checkbox-text">{label}</span>
    {/if}
  </label>
</div>
