# TerminalButton

`TerminalButton` es un botón estilizado para el tema terminal con diferentes tipos y estados.

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `text` | string | `"Click"` | Texto del botón |
| `onClick` | function | `() => {}` | Función a ejecutar al hacer clic |
| `type` | string | `"primary"` | Tipo de botón: `primary`, `secondary`, `danger` |
| `disabled` | boolean | `false` | Estado deshabilitado del botón |

## Uso

### Estático
```svelte
<script>
  import { TerminalButton } from '../components';

  function handleClick() {
    alert('Botón clickeado!');
  }
</script>

<TerminalButton text="Guardar" onClick={handleClick} />
<TerminalButton text="Cancelar" type="secondary" />
<TerminalButton text="Eliminar" type="danger" />
<TerminalButton text="Deshabilitado" disabled />
```

### Dinámico con Store
```svelte
<script>
  import { TerminalButton } from '../components';
  import { writable } from 'svelte/store';

  const systemState = writable({
    isOnline: false,
    isProcessing: false,
    lastAction: null
  });

  function toggleSystem() {
    systemState.update(state => ({
      ...state,
      isOnline: !state.isOnline,
      lastAction: new Date().toLocaleTimeString()
    }));
  }

  function startProcess() {
    systemState.update(state => ({ ...state, isProcessing: true }));
    
    setTimeout(() => {
      systemState.update(state => ({ 
        ...state, 
        isProcessing: false,
        lastAction: new Date().toLocaleTimeString()
      }));
    }, 3000);
  }
</script>

<TerminalButton 
  text={$systemState.isOnline ? "Apagar Sistema" : "Encender Sistema"}
  type={$systemState.isOnline ? "danger" : "primary"}
  onClick={toggleSystem}
  disabled={$systemState.isProcessing}
/>

<TerminalButton 
  text={$systemState.isProcessing ? "Procesando..." : "Iniciar Proceso"}
  onClick={startProcess}
  disabled={$systemState.isProcessing || !$systemState.isOnline}
/>
```

### Con Runes (Svelte 5)
```svelte
<script>
  import { TerminalButton } from '../components';

  let appState = $state({
    user: null,
    loading: false,
    notifications: 0
  });

  async function login() {
    appState.loading = true;
    
    // Simular login
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    appState.user = { name: "Usuario Demo" };
    appState.loading = false;
    appState.notifications = Math.floor(Math.random() * 10);
  }

  function logout() {
    appState.user = null;
    appState.notifications = 0;
  }

  function clearNotifications() {
    appState.notifications = 0;
  }

  // Simular nuevas notificaciones cada 5 segundos
  setInterval(() => {
    if (appState.user) {
      appState.notifications += Math.floor(Math.random() * 3);
    }
  }, 5000);
</script>

{#if !appState.user}
  <TerminalButton 
    text={appState.loading ? "Iniciando sesión..." : "Iniciar Sesión"}
    onClick={login}
    disabled={appState.loading}
  />
{:else}
  <TerminalButton 
    text="Cerrar Sesión"
    type="secondary"
    onClick={logout}
  />
  
  {#if appState.notifications > 0}
    <TerminalButton 
      text="Notificaciones ({appState.notifications})"
      type="primary"
      onClick={clearNotifications}
    />
  {/if}
{/if}
```

## Tipos de Botones

### Primary (por defecto)
```svelte
<TerminalButton text="Acción Principal" type="primary" />
```

### Secondary
```svelte
<TerminalButton text="Acción Secundaria" type="secondary" />
```

### Danger
```svelte
<TerminalButton text="Acción Peligrosa" type="danger" />
```

## Ejemplos Avanzados

### Botones con Estados Complejos
```svelte
<script>
  import { TerminalButton } from '../components';

  let operations = $state({
    save: { loading: false, lastSaved: null },
    sync: { loading: false, lastSync: null },
    backup: { loading: false, lastBackup: null }
  });

  async function performOperation(opType) {
    operations[opType].loading = true;
    
    // Simular operación
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    operations[opType].loading = false;
    operations[opType][`last${opType.charAt(0).toUpperCase() + opType.slice(1)}`] = new Date();
  }
</script>

<TerminalButton 
  text={operations.save.loading ? "Guardando..." : "Guardar"}
  onClick={() => performOperation('save')}
  disabled={operations.save.loading}
/>

<TerminalButton 
  text={operations.sync.loading ? "Sincronizando..." : "Sincronizar"}
  type="secondary"
  onClick={() => performOperation('sync')}
  disabled={operations.sync.loading}
/>

<TerminalButton 
  text={operations.backup.loading ? "Respaldando..." : "Backup"}
  type="danger"
  onClick={() => performOperation('backup')}
  disabled={operations.backup.loading}
/>
```
