<script>
  /**
   * TerminalSelect - Dropdown de selección con estilo terminal
   * @param {string} value - Valor seleccionado
   * @param {Array} options - Array de opciones {value, label}
   * @param {string} placeholder - Texto placeholder
   * @param {string} label - Label del select
   * @param {boolean} disabled - Estado deshabilitado
   * @param {function} onChange - Callback cuando cambia la selección
   */
  let { 
    value = $bindable(""), 
    options = [], 
    placeholder = "Seleccionar...", 
    label = "", 
    disabled = false,
    onChange = () => {}
  } = $props();

  let isOpen = $state(false);
  let selectElement;
  let selectId = `select-${Math.random().toString(36).substr(2, 9)}`;

  function toggleDropdown() {
    if (!disabled) {
      isOpen = !isOpen;
    }
  }

  function selectOption(optionValue, optionLabel) {
    value = optionValue;
    isOpen = false;
    onChange(optionValue);
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      isOpen = false;
    }
  }

  function handleClickOutside(event) {
    if (selectElement && !selectElement.contains(event.target)) {
      isOpen = false;
    }
  }

  // Encontrar el label de la opción seleccionada
  $derived: selectedLabel = options.find(opt => opt.value === value)?.label || placeholder;

  // Event listeners para cerrar el dropdown
  $effect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeydown);
    } else {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<div class="terminal-select-group">
  {#if label}
    <label class="terminal-select-label" for={selectId}>{label}</label>
  {/if}
  
  <div 
    class="terminal-select" 
    class:terminal-select--disabled={disabled}
    class:terminal-select--open={isOpen}
    bind:this={selectElement}
  >
    <button
      id={selectId}
      class="terminal-select-trigger"
      onclick={toggleDropdown}
      {disabled}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      <span class="terminal-select-value">{selectedLabel}</span>
      <span class="terminal-select-arrow">{isOpen ? '▲' : '▼'}</span>
    </button>

    {#if isOpen}
      <div class="terminal-select-dropdown" role="listbox">
        {#each options as option}
          <button
            class="terminal-select-option"
            class:terminal-select-option--selected={value === option.value}
            onclick={() => selectOption(option.value, option.label)}
            role="option"
            aria-selected={value === option.value}
          >
            {option.label}
          </button>
        {/each}
      </div>
    {/if}
  </div>
</div>
