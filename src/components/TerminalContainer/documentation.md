# TerminalContainer

`TerminalContainer` es un contenedor de alto nivel para agrupar componentes del dashboard.

## Uso

### Estático
```svelte
<TerminalContainer>
  <!-- Contenido aquí -->
</TerminalContainer>
```

### Dinámico
```svelte
<script lang="ts">
  import { TerminalContainer } from '../components';
  import { tick } from 'svelte';

  let data = $state([]);

  async function fetchData() {
    while (true) {
      data = await fetch('/api/data').then(res => res.json());
      await tick();
    }
  }
  fetchData();
</script>

<TerminalContainer>
  {#each data as item}
    <div>{item.name}: {item.value}</div>
  {/each}
</TerminalContainer>
```

## Props

Este componente actualmente no acepta props.
