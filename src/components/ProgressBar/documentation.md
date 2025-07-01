# ProgressBar

`ProgressBar` muestra una barra de progreso con etiqueta opcional y porcentaje.

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `value` | number | `0` | Valor actual del progreso |
| `max` | number | `100` | Valor máximo del progreso |
| `label` | string | `""` | Etiqueta descriptiva |
| `showPercentage` | boolean | `true` | Mostrar porcentaje calculado |

## Uso

### Estático
```svelte
<script>
  import { ProgressBar } from '../components';
</script>

<ProgressBar label="Carga del Sistema" value={75} />
<ProgressBar label="Temperatura" value={24} max={50} />
<ProgressBar value={90} showPercentage={false} />
```

### Dinámico con Store
```svelte
<script>
  import { ProgressBar } from '../components';
  import { writable } from 'svelte/store';

  const progress = writable({
    cpu: 0,
    memory: 0,
    disk: 0
  });

  // Simular datos que cambian cada segundo
  setInterval(() => {
    progress.update(current => ({
      cpu: Math.floor(Math.random() * 100),
      memory: Math.floor(Math.random() * 16000),
      disk: Math.floor(Math.random() * 500000)
    }));
  }, 1000);
</script>

<ProgressBar label="CPU Usage" value={$progress.cpu} />
<ProgressBar label="Memory" value={$progress.memory} max={16000} />
<ProgressBar label="Disk Space" value={$progress.disk} max={500000} />
```

### Con Runes (Svelte 5)
```svelte
<script>
  import { ProgressBar } from '../components';

  let systemStats = $state({
    temperature: 22,
    humidity: 65,
    light: 80,
    nutrients: 45
  });

  // Actualizar cada segundo con datos simulados
  setInterval(() => {
    systemStats.temperature = Math.floor(Math.random() * 15) + 20; // 20-35°C
    systemStats.humidity = Math.floor(Math.random() * 40) + 40;     // 40-80%
    systemStats.light = Math.floor(Math.random() * 50) + 50;        // 50-100%
    systemStats.nutrients = Math.floor(Math.random() * 100);        // 0-100%
  }, 1000);
</script>

<ProgressBar label="Temperatura" value={systemStats.temperature} max={40} />
<ProgressBar label="Humedad" value={systemStats.humidity} />
<ProgressBar label="Luz" value={systemStats.light} />
<ProgressBar label="Nutrientes" value={systemStats.nutrients} />
```

### Progreso Animado
```svelte
<script>
  import { ProgressBar } from '../components';

  let downloadProgress = $state(0);
  let isDownloading = $state(false);

  function startDownload() {
    isDownloading = true;
    downloadProgress = 0;
    
    const interval = setInterval(() => {
      downloadProgress += Math.random() * 10;
      
      if (downloadProgress >= 100) {
        downloadProgress = 100;
        isDownloading = false;
        clearInterval(interval);
      }
    }, 200);
  }
</script>

<button onclick={startDownload} disabled={isDownloading}>
  {isDownloading ? 'Descargando...' : 'Iniciar Descarga'}
</button>

<ProgressBar 
  label="Descarga" 
  value={downloadProgress} 
  showPercentage={true} 
/>
```

## Ejemplos Avanzados

### Múltiples Barras con Diferentes Escalas
```svelte
<script>
  import { ProgressBar } from '../components';

  let data = $state({
    plants: { current: 156, total: 200 },
    water: { current: 750, total: 1000 }, // litros
    energy: { current: 85, total: 100 }   // porcentaje
  });

  setInterval(() => {
    data.plants.current = Math.floor(Math.random() * data.plants.total);
    data.water.current = Math.floor(Math.random() * data.water.total);
    data.energy.current = Math.floor(Math.random() * data.energy.total);
  }, 2000);
</script>

<ProgressBar 
  label="Plantas Activas" 
  value={data.plants.current} 
  max={data.plants.total} 
/>

<ProgressBar 
  label="Agua Disponible (L)" 
  value={data.water.current} 
  max={data.water.total} 
/>

<ProgressBar 
  label="Energía Solar" 
  value={data.energy.current} 
  max={data.energy.total} 
/>
```
