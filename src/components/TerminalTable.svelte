<script>
  let { headers = [], rows = [], striped = true } = $props();
</script>

<div class="terminal-table-container">
  <table class="terminal-table" class:terminal-table--striped={striped}>
    <thead class="terminal-table-head">
      <tr>
        {#each headers as header}
          <th class="terminal-table-header">{header}</th>
        {/each}
      </tr>
    </thead>
    <tbody class="terminal-table-body">
      {#each rows as row}
        <tr class="terminal-table-row">
          {#each row as cell}
            <td class="terminal-table-cell">{cell}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
