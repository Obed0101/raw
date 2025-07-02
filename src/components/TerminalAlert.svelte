<script>
  /**
   * TerminalAlert - Componente de alerta con diferentes tipos y estilos terminal
   * @param {string} message - Mensaje de la alerta
   * @param {string} type - Tipo de alerta: 'info', 'success', 'warning', 'error'
   * @param {boolean} dismissible - Si la alerta puede ser cerrada
   * @param {function} onDismiss - Callback cuando se cierra la alerta
   * @param {boolean} visible - Estado de visibilidad de la alerta
   */
  let { 
    message = "", 
    type = "info", 
    dismissible = false, 
    onDismiss = () => {}, 
    visible = $bindable(true) 
  } = $props();

  function handleDismiss() {
    visible = false;
    onDismiss();
  }

  // Iconos para cada tipo de alerta
  const icons = {
    info: "ℹ",
    success: "✓",
    warning: "⚠",
    error: "✗"
  };
</script>

{#if visible}
  <div class="terminal-alert terminal-alert--{type}" role="alert">
    <div class="terminal-alert-content">
      <span class="terminal-alert-icon">{icons[type]}</span>
      <span class="terminal-alert-message">{message}</span>
    </div>
    {#if dismissible}
      <button 
        class="terminal-alert-dismiss" 
        onclick={handleDismiss}
        aria-label="Cerrar alerta"
      >
        ×
      </button>
    {/if}
  </div>
{/if}
