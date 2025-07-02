<script>
  let { isOpen = false, title = "", onClose = () => {}, children } = $props();
  
  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
</script>

{#if isOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="terminal-modal-backdrop" onclick={handleBackdropClick} role="dialog" aria-modal="true" tabindex="-1">
    <div class="terminal-modal">
      <div class="terminal-modal-header">
        <h3>{title}</h3>
        <button class="terminal-modal-close" onclick={onClose}>×</button>
      </div>
      <div class="terminal-modal-content">
        {@render children?.()}
      </div>
    </div>
  </div>
{/if}
