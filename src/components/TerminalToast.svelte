<script>
  /**
   * TerminalToast - Sistema de notificaciones temporales con estilo terminal
   * @param {string} message - Mensaje del toast
   * @param {string} type - Tipo: 'info', 'success', 'warning', 'error'
   * @param {number} duration - Duración en milisegundos (0 = no auto-close)
   * @param {string} position - Posición: 'top-right', 'top-left', 'bottom-right', 'bottom-left'
   * @param {boolean} visible - Estado de visibilidad
   * @param {function} onClose - Callback cuando se cierra
   */
  let { 
    message = "", 
    type = "info", 
    duration = 3000,
    position = "top-right",
    visible = $bindable(true),
    onClose = () => {}
  } = $props();

  let timeoutId;

  // Auto-close si duration > 0
  $effect(() => {
    if (visible && duration > 0) {
      timeoutId = setTimeout(() => {
        visible = false;
        onClose();
      }, duration);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  });

  function handleClose() {
    visible = false;
    onClose();
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  // Iconos para cada tipo
  const icons = {
    info: "ℹ",
    success: "✓",
    warning: "⚠",
    error: "✗"
  };
</script>

{#if visible}
  <div 
    class="terminal-toast terminal-toast--{type} terminal-toast--{position}"
    role="alert"
    aria-live="polite"
  >
    <div class="terminal-toast-content">
      <span class="terminal-toast-icon">{icons[type]}</span>
      <span class="terminal-toast-message">{message}</span>
    </div>
    <button 
      class="terminal-toast-close" 
      onclick={handleClose}
      aria-label="Cerrar notificación"
    >
      ×
    </button>
  </div>
{/if}

<style>
  .terminal-toast {
    position: fixed;
    z-index: 1000;
    background-color: #0b0b0d;
    border: 1px solid;
    padding: 0.75rem;
    min-width: 300px;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Courier New", monospace;
    animation: terminal-toast-slide-in 0.3s ease-out;
  }

  .terminal-toast--top-right {
    top: 1rem;
    right: 1rem;
  }

  .terminal-toast--top-left {
    top: 1rem;
    left: 1rem;
  }

  .terminal-toast--bottom-right {
    bottom: 1rem;
    right: 1rem;
  }

  .terminal-toast--bottom-left {
    bottom: 1rem;
    left: 1rem;
  }

  .terminal-toast-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .terminal-toast-icon {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .terminal-toast-message {
    font-size: 0.9rem;
  }

  .terminal-toast-close {
    background: none;
    border: none;
    color: inherit;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
  }

  .terminal-toast-close:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .terminal-toast--info {
    color: #60a5fa;
    border-color: #60a5fa;
  }

  .terminal-toast--success {
    color: #4ade80;
    border-color: #4ade80;
  }

  .terminal-toast--warning {
    color: #fbbf24;
    border-color: #fbbf24;
  }

  .terminal-toast--error {
    color: #f87171;
    border-color: #f87171;
  }

  @keyframes terminal-toast-slide-in {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .terminal-toast--top-left,
  .terminal-toast--bottom-left {
    animation: terminal-toast-slide-in-left 0.3s ease-out;
  }

  @keyframes terminal-toast-slide-in-left {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
