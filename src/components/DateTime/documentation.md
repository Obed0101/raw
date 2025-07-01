# DateTime

`DateTime` muestra la fecha y hora actual con formato personalizable y actualización automática.

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `format` | string | `"dd/mm/yyyy hh:mm:ss"` | Formato de fecha y hora |
| `updateInterval` | number | `1000` | Intervalo de actualización en milisegundos |

## Formatos Disponibles

| Token | Descripción | Ejemplo |
|-------|-------------|---------|
| `dd` | Día con ceros | 01, 02, 31 |
| `d` | Día sin ceros | 1, 2, 31 |
| `mm` | Mes con ceros | 01, 02, 12 |
| `m` | Mes sin ceros | 1, 2, 12 |
| `yyyy` | Año completo | 2025 |
| `yy` | Año corto | 25 |
| `hh` | Hora con ceros | 01, 02, 23 |
| `h` | Hora sin ceros | 1, 2, 23 |
| `MM` | Minutos con ceros | 01, 02, 59 |
| `M` | Minutos sin ceros | 1, 2, 59 |
| `ss` | Segundos con ceros | 01, 02, 59 |
| `s` | Segundos sin ceros | 1, 2, 59 |

## Uso

### Estático
```svelte
<script>
  import { DateTime } from '../components';
</script>

<!-- Formato por defecto -->
<DateTime />

<!-- Formato personalizado -->
<DateTime format="dd/mm/yyyy - hh:MM:ss" />
<DateTime format="yyyy-mm-dd" />
<DateTime format="hh:MM" />
<DateTime format="d de m de yyyy" />
```

### Dinámico con Store
```svelte
<script>
  import { DateTime } from '../components';
  import { writable } from 'svelte/store';

  const config = writable({
    format: "dd/mm/yyyy hh:MM:ss",
    interval: 1000
  });

  // Cambiar formato cada 5 segundos
  setInterval(() => {
    config.update(current => ({
      ...current,
      format: current.format === "dd/mm/yyyy hh:MM:ss" 
        ? "yyyy-mm-dd - hh:MM" 
        : "dd/mm/yyyy hh:MM:ss"
    }));
  }, 5000);
</script>

<DateTime format={$config.format} updateInterval={$config.interval} />
```

### Con Runes (Svelte 5)
```svelte
<script>
  import { DateTime } from '../components';

  let config = $state({
    format: "dd/mm/yyyy hh:MM:ss",
    showSeconds: true
  });

  let currentFormat = $derived(
    config.showSeconds 
      ? "dd/mm/yyyy hh:MM:ss" 
      : "dd/mm/yyyy hh:MM"
  );

  // Alternar mostrar segundos cada 10 segundos
  setInterval(() => {
    config.showSeconds = !config.showSeconds;
  }, 10000);
</script>

<DateTime format={currentFormat} />
```

## Ejemplos de Formatos

```svelte
<!-- Diferentes formatos -->
<DateTime format="dd/mm/yyyy" />           <!-- 01/07/2025 -->
<DateTime format="yyyy-mm-dd" />           <!-- 2025-07-01 -->
<DateTime format="d de m de yyyy" />       <!-- 1 de 7 de 2025 -->
<DateTime format="hh:MM:ss" />             <!-- 18:30:45 -->
<DateTime format="h:M" />                  <!-- 18:30 -->
<DateTime format="dd/mm/yy - hh:MM" />     <!-- 01/07/25 - 18:30 -->
```
