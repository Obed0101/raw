<script>
  /**
   * TerminalAccordion - Contenido colapsable con estilo terminal
   * @param {string} title - Título del acordeón
   * @param {boolean} isOpen - Estado abierto/cerrado
   * @param {boolean} disabled - Estado deshabilitado
   * @param {function} onToggle - Callback cuando se abre/cierra
   * @param {snippet} children - Contenido del acordeón
   */
  let { 
    title = "", 
    isOpen = $bindable(false), 
    disabled = false,
    onToggle = () => {},
    children
  } = $props();

  function handleToggle() {
    if (!disabled) {
      isOpen = !isOpen;
      onToggle(isOpen);
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  }
</script>

<div class="terminal-accordion" class:terminal-accordion--disabled={disabled}>
  <button
    class="terminal-accordion-header"
    class:terminal-accordion-header--open={isOpen}
    onclick={handleToggle}
    onkeydown={handleKeyDown}
    {disabled}
    aria-expanded={isOpen}
    aria-controls="accordion-content"
  >
    <span class="terminal-accordion-title">{title}</span>
    <span class="terminal-accordion-icon">{isOpen ? '▼' : '▶'}</span>
  </button>

  {#if isOpen}
    <div 
      class="terminal-accordion-content"
      id="accordion-content"
      role="region"
      aria-labelledby="accordion-header"
    >
      {@render children?.()}
    </div>
  {/if}
</div>

<style>
  .terminal-accordion {
    border: 1px solid #fff;
    margin: 0.5rem 0;
  }

  .terminal-accordion-header {
    width: 100%;
    background-color: #0b0b0d;
    color: #fff;
    border: none;
    padding: 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-family: "Courier New", monospace;
    font-size: 1rem;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
  }

  .terminal-accordion-header:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.05);
  }

  .terminal-accordion-header:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .terminal-accordion-header--open {
    border-bottom-color: #fff;
  }

  .terminal-accordion-title {
    text-align: left;
    flex: 1;
    font-weight: bold;
  }

  .terminal-accordion-icon {
    font-size: 0.8rem;
    transition: transform 0.3s ease;
  }

  .terminal-accordion-content {
    padding: 1rem;
    background-color: #0b0b0d;
    color: #a0a0a0;
    border-top: 1px solid #444;
    animation: terminal-accordion-expand 0.3s ease-out;
  }

  .terminal-accordion--disabled {
    opacity: 0.5;
  }

  @keyframes terminal-accordion-expand {
    from {
      opacity: 0;
      max-height: 0;
      padding-top: 0;
      padding-bottom: 0;
    }
    to {
      opacity: 1;
      max-height: 1000px;
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
</style>
