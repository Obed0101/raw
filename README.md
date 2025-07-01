# 🌱 Vivero Dashboard - Sistema de Componentes Terminal

Un dashboard interactivo para gestionar y visualizar información en un sistema de cultivo inteligente. Construido con **Svelte 5** y un sistema de componentes reutilizables con estética terminal.

## ✨ Características

- 🎯 **Plug & Play**: Componentes listos para usar sin CSS
- ⚡ **Svelte 5 Runes**: Sintaxis moderna con `$state` y `$derived`
- 🎨 **Tema Terminal**: Estética cyberpunk consistente
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos
- 🔄 **Tiempo Real**: Actualización automática de datos
- 📊 **Visualización**: Gráficos, estadísticas y métricas

## 🚀 Instalación Rápida

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/vivero.git
cd vivero

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
open http://localhost:5173
```

## 🏗️ Estructura del Proyecto

```
vivero/
├── src/
│   ├── components/           # Biblioteca de componentes
│   │   ├── TerminalContainer.svelte
│   │   ├── TerminalHeader.svelte
│   │   ├── StatCard.svelte
│   │   ├── DateTime.svelte
│   │   ├── ProgressBar.svelte
│   │   └── ... (más componentes)
│   ├── routes/               # Páginas de la aplicación
│   │   ├── marco-teorico/
│   │   └── example-dashboard/
│   └── app.css              # Estilos globales
└── README.md
```

## 🧩 Componentes Disponibles

### 📦 Layout
- `TerminalContainer` - Contenedor principal
- `TerminalHeader` - Cabecera con título y cursor
- `TerminalGrid` - Sistema de grillas
- `TerminalCard` - Tarjetas de contenido

### 📊 Visualización de Datos
- `StatCard` - Tarjetas de estadísticas
- `ChartCard` - Contenedor para gráficos
- `ProgressBar` - Barras de progreso animadas
- `TerminalTable` - Tablas estilizadas

### 🎯 Interacción
- `TerminalButton` - Botones temáticos
- `TerminalInput` - Campos de entrada
- `TerminalModal` - Modales/popups
- `Pagination` - Navegación de páginas

### 🖼️ Contenido
- `TerminalTitle` - Títulos jerárquicos
- `TerminalParagraph` - Párrafos de texto
- `TerminalList` - Listas ordenadas/desordenadas
- `TerminalBadge` - Etiquetas de estado
- `TerminalImage` - Imágenes estilizadas

### ⏰ Utilidades
- `DateTime` - Fecha/hora configurable

## 🎮 Uso Rápido

### Ejemplo Básico
```svelte
<script>
  import {
    TerminalContainer,
    TerminalHeader,
    StatCard,
    DateTime
  } from './components';
</script>

<TerminalContainer>
  <TerminalHeader title="Mi Dashboard" showCursor>
    <DateTime format="dd/mm/yyyy hh:MM:ss" />
  </TerminalHeader>
  
  <StatCard label="Plantas Activas" value="156" />
  <StatCard label="Temperatura" value="24°C" />
</TerminalContainer>
```

### Con Datos Dinámicos
```svelte
<script>
  import { StatCard } from './components';

  let stats = $state({ plants: 0, temp: 0 });

  // Actualizar cada segundo
  setInterval(() => {
    stats.plants = Math.floor(Math.random() * 200);
    stats.temp = Math.floor(Math.random() * 30) + 15;
  }, 1000);
</script>

<StatCard label="Plantas" value={stats.plants} />
<StatCard label="Temp" value="{stats.temp}°C" />
```

## 📖 Documentación Detallada

Cada componente tiene su propia documentación con ejemplos estáticos y dinámicos:

- [StatCard](src/components/StatCard/documentation.md)
- [DateTime](src/components/DateTime/documentation.md)
- [ProgressBar](src/components/ProgressBar/documentation.md)
- [TerminalButton](src/components/TerminalButton/documentation.md)
- Y más...

## 🎨 Personalización

Todos los estilos están en `src/app.css`. Los componentes usan clases CSS consistentes:

```css
.terminal-*        /* Componentes base */
.terminal-*--type  /* Variantes de tipo */
.terminal-*--size  /* Variantes de tamaño */
```

## 🚦 Estados de Desarrollo

✅ **Listo**: TerminalContainer, TerminalHeader, StatCard, DateTime  
✅ **Funcionando**: ProgressBar, TerminalButton, TerminalCard  
✅ **Estable**: TerminalGrid, TerminalTable, TerminalModal  
🔄 **En desarrollo**: Más componentes según necesidad  

## 🤝 Contribución

1. Fork del proyecto
2. Crear rama: `git checkout -b feature/nueva-funcion`
3. Commit: `git commit -m 'Agrega nueva función'`
4. Push: `git push origin feature/nueva-funcion`
5. Pull Request

## 📄 Licencia

MIT License - Úsalo libremente en tus proyectos

---

**¿Necesitas ayuda?** Revisa los archivos de documentación en `src/components/*/documentation.md` para ejemplos detallados.
