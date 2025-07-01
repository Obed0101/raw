<script>
  let { currentPage = 1, totalPages = 1, onPageChange = () => {} } = $props();
  
  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      currentPage = page;
      onPageChange(page);
    }
  }
</script>

<div class="terminal-pagination">
  <button 
    class="terminal-pagination-btn" 
    onclick={() => goToPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    ←
  </button>
  
  <span class="terminal-pagination-info">
    {currentPage} / {totalPages}
  </span>
  
  <button 
    class="terminal-pagination-btn" 
    onclick={() => goToPage(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    →
  </button>
</div>
