<script>
  /**
   * TerminalTextarea - Área de texto multilínea con estilo terminal
   * @param {string} value - Valor del textarea
   * @param {string} placeholder - Texto placeholder
   * @param {string} label - Label del textarea
   * @param {boolean} disabled - Estado deshabilitado
   * @param {number} rows - Número de filas
   * @param {number} cols - Número de columnas
   * @param {boolean} resizable - Si el textarea es redimensionable
   * @param {number} maxLength - Longitud máxima del texto
   */
  let { 
    value = $bindable(""), 
    placeholder = "", 
    label = "", 
    disabled = false,
    rows = 4,
    cols = 50,
    resizable = true,
    maxLength = null
  } = $props();

  let textareaId = `textarea-${Math.random().toString(36).substr(2, 9)}`;
  let charCount = $derived(value.length);
</script>

<div class="terminal-textarea-group">
  {#if label}
    <label class="terminal-textarea-label" for={textareaId}>{label}</label>
  {/if}
  
  <textarea
    id={textareaId}
    class="terminal-textarea"
    class:terminal-textarea--no-resize={!resizable}
    bind:value
    {placeholder}
    {disabled}
    {rows}
    {cols}
    maxlength={maxLength}
  ></textarea>

  {#if maxLength}
    <div class="terminal-textarea-counter">
      {charCount}/{maxLength}
    </div>
  {/if}
</div>
