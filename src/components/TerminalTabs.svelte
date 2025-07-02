<script>
  /**
   * TerminalTabs - Sistema de pestañas con estilo terminal
   * @param {Array} tabs - Array de objetos con {id, label, content}
   * @param {string} activeTab - ID de la pestaña activa
   * @param {function} onTabChange - Callback cuando cambia la pestaña activa
   */
  let { 
    tabs = [], 
    activeTab = $bindable(""), 
    onTabChange = () => {} 
  } = $props();

  // Establecer primera pestaña como activa si no hay ninguna seleccionada
  $effect(() => {
    if (!activeTab && tabs.length > 0) {
      activeTab = tabs[0].id;
    }
  });

  function handleTabClick(tabId) {
    activeTab = tabId;
    onTabChange(tabId);
  }

  // Encontrar el contenido de la pestaña activa
  $derived: activeTabContent = tabs.find(tab => tab.id === activeTab)?.content || "";
</script>

<div class="terminal-tabs">
  <!-- Tab Headers -->
  <div class="terminal-tabs-header">
    {#each tabs as tab}
      <button
        class="terminal-tab-button"
        class:terminal-tab-button--active={activeTab === tab.id}
        onclick={() => handleTabClick(tab.id)}
        role="tab"
        aria-selected={activeTab === tab.id}
        aria-controls="tab-panel-{tab.id}"
        id="tab-{tab.id}"
      >
        {tab.label}
      </button>
    {/each}
  </div>

  <!-- Tab Content -->
  <div class="terminal-tabs-content">
    {#each tabs as tab}
      {#if activeTab === tab.id}
        <div
          class="terminal-tab-panel"
          role="tabpanel"
          aria-labelledby="tab-{tab.id}"
          id="tab-panel-{tab.id}"
        >
          {@html tab.content}
        </div>
      {/if}
    {/each}
  </div>
</div>
