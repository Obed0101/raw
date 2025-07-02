<script>
  /**
   * TerminalSpinner - Indicador de carga con estilo terminal
   * @param {string} size - Tamaño del spinner: 'small', 'medium', 'large'
   * @param {string} text - Texto opcional que acompaña al spinner
   * @param {boolean} inline - Si el spinner debe ser inline
   */
  let { 
    size = "medium", 
    text = "", 
    inline = false 
  } = $props();
</script>

<div 
  class="terminal-spinner terminal-spinner--{size}"
  class:terminal-spinner--inline={inline}
>
  <div class="terminal-spinner-animation">
    <span class="terminal-spinner-char">|</span>
    <span class="terminal-spinner-char">/</span>
    <span class="terminal-spinner-char">-</span>
    <span class="terminal-spinner-char">\</span>
  </div>
  {#if text}
    <span class="terminal-spinner-text">{text}</span>
  {/if}
</div>
