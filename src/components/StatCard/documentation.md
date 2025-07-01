# StatCard

`StatCard` muestra una estadística con etiqueta y valor en formato de tarjeta terminal.

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `label` | string | `""` | Texto descriptivo de la estadística |
| `value` | string \| number | `0` | Valor numérico o textual de la estadística |

## Uso

### Estático
```svelte
<script>
  import { StatCard } from '../components';
</script>

<StatCard label="Plantas Activas" value="156" />
<StatCard label="Temperatura" value="24°C" />
<StatCard label="Humedad" value="67%" />
```

### Dinámico con Store
```svelte
<script>
  import { StatCard } from '../components';
  import { writable } from 'svelte/store';

  const stats = writable({
    plants: 0,
    temperature: 0,
    humidity: 0
  });

  // Actualiza cada segundo
  setInterval(() => {
    stats.update(current => ({
      plants: Math.floor(Math.random() * 200),
      temperature: Math.floor(Math.random() * 30) + 15,
      humidity: Math.floor(Math.random() * 100)
    }));
  }, 1000);
</script>

<StatCard label="Plantas Activas" value={$stats.plants} />
<StatCard label="Temperatura" value="{$stats.temperature}°C" />
<StatCard label="Humedad" value="{$stats.humidity}%" />
```

### Con Runes (Svelte 5)
```svelte
<script>
  import { StatCard } from '../components';

  let stats = $state({
    plants: 156,
    temperature: 24,
    humidity: 67
  });

  setInterval(() => {
    stats.plants = Math.floor(Math.random() * 200);
    stats.temperature = Math.floor(Math.random() * 30) + 15;
    stats.humidity = Math.floor(Math.random() * 100);
  }, 1000);
</script>

<StatCard label="Plantas Activas" value={stats.plants} />
<StatCard label="Temperatura" value="{stats.temperature}°C" />
<StatCard label="Humedad" value="{stats.humidity}%" />
```
