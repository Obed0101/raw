# 🖥️ Terminal UI Components Documentation

Sistema de componentes con diseño temático terminal/retro para Svelte 5, con tipografía monoespaciada, colores oscuros y bordes característicos.

## 🎨 Design System

### Colores Principales
- **Background**: `#0b0b0d` (Negro profundo)
- **Text Primary**: `#ffffff` (Blanco)
- **Text Secondary**: `#a0a0a0` (Gris claro)
- **Text Muted**: `#888888` (Gris)
- **Border**: `#ffffff` (Blanco)
- **Success**: `#4ade80` (Verde)
- **Warning**: `#fbbf24` (Amarillo)
- **Error**: `#f87171` (Rojo)
- **Info**: `#60a5fa` (Azul)

### Tipografía
- **Font Family**: `"Courier New", monospace`
- **Line Height**: `1.6`

### Spacing System
Variables CSS personalizadas desde `--spacing-xs` (0.5rem) hasta `--spacing-10xl` (12rem)

---

## 📦 Componentes Existentes

### 🏠 Layout Components

#### TerminalContainer
**Archivo**: `src/components/TerminalContainer.svelte`

Contenedor principal con bordes característicos de terminal.

```svelte
<TerminalContainer>
  <p>Contenido dentro del contenedor</p>
</TerminalContainer>
```

**Características**:
- Bordes con esquinas reforzadas
- Padding interno
- Overflow horizontal automático

#### TerminalGrid
**Archivo**: `src/components/TerminalGrid.svelte`

Grid responsivo para organizar contenido.

```svelte
<TerminalGrid>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</TerminalGrid>
```

**Características**:
- Grid automático con mínimo 250px por columna
- Gap de 1rem entre elementos
- Responsive (1 columna en mobile)

### 🎯 Content Components

#### TerminalCard
**Archivo**: `src/components/TerminalCard.svelte`

Tarjeta de contenido con título opcional.

```svelte
<TerminalCard title="Mi Tarjeta">
  {#snippet children()}
    <p>Contenido de la tarjeta</p>
  {/snippet}
</TerminalCard>
```

**Props**:
- `title` (string, opcional): Título de la tarjeta
- `children` (snippet): Contenido de la tarjeta

#### TerminalTitle
**Archivo**: `src/components/TerminalTitle.svelte`

Títulos con jerarquía de encabezados.

```svelte
<TerminalTitle text="Mi Título" level={1} />
<TerminalTitle text="Subtítulo" level={2} />
```

**Props**:
- `text` (string): Texto del título
- `level` (number, 1-6): Nivel del encabezado (h1-h6)

#### TerminalHeader
**Archivo**: `src/components/TerminalHeader.svelte`

Encabezado con cursor parpadeante opcional.

```svelte
<TerminalHeader title="Sistema Activo" showCursor={true}>
  {#snippet children()}
    <span>12:34:56</span>
  {/snippet}
</TerminalHeader>
```

**Props**:
- `title` (string): Título principal
- `showCursor` (boolean): Mostrar cursor parpadeante
- `children` (snippet): Contenido adicional (metadatos)

#### TerminalParagraph
**Archivo**: `src/components/TerminalParagraph.svelte`

Párrafos con estilo terminal.

```svelte
<TerminalParagraph text="Este es un párrafo con estilo terminal." />
```

**Props**:
- `text` (string): Contenido del párrafo

### 🔘 Interactive Components

#### TerminalButton
**Archivo**: `src/components/TerminalButton.svelte`

Botones con diferentes variantes.

```svelte
<TerminalButton 
  text="Ejecutar" 
  type="primary" 
  onClick={() => console.log('clicked')} 
/>
<TerminalButton text="Cancelar" type="secondary" />
<TerminalButton text="Eliminar" type="danger" disabled={true} />
```

**Props**:
- `text` (string): Texto del botón
- `type` (string): Tipo - 'primary', 'secondary', 'danger'
- `onClick` (function): Función callback al hacer click
- `disabled` (boolean): Estado deshabilitado

#### TerminalInput
**Archivo**: `src/components/TerminalInput.svelte`

Input de texto con label.

```svelte
<script>
  let inputValue = $state("");
</script>

<TerminalInput 
  bind:value={inputValue}
  label="Nombre de usuario"
  placeholder="Ingresa tu nombre..."
  type="text"
/>
```

**Props**:
- `value` (bindable string): Valor del input
- `label` (string, opcional): Label del input
- `placeholder` (string): Placeholder
- `type` (string): Tipo de input
- `disabled` (boolean): Estado deshabilitado

#### TerminalModal
**Archivo**: `src/components/TerminalModal.svelte`

Modal con overlay.

```svelte
<script>
  let showModal = $state(false);
</script>

<TerminalModal 
  isOpen={showModal} 
  title="Confirmación"
  onClose={() => showModal = false}
>
  {#snippet children()}
    <p>¿Estás seguro de realizar esta acción?</p>
    <TerminalButton text="Confirmar" onClick={() => showModal = false} />
  {/snippet}
</TerminalModal>
```

**Props**:
- `isOpen` (boolean): Estado de visibilidad
- `title` (string): Título del modal
- `onClose` (function): Función para cerrar el modal
- `children` (snippet): Contenido del modal

### 📊 Data Display Components

#### TerminalTable
**Archivo**: `src/components/TerminalTable.svelte`

Tabla de datos con filas alternadas opcionales.

```svelte
<TerminalTable 
  headers={["ID", "Nombre", "Estado"]}
  rows={[
    ["1", "Usuario1", "Activo"],
    ["2", "Usuario2", "Inactivo"]
  ]}
  striped={true}
/>
```

**Props**:
- `headers` (array): Array con los encabezados
- `rows` (array): Array de arrays con los datos
- `striped` (boolean): Filas alternadas

#### TerminalList
**Archivo**: `src/components/TerminalList.svelte`

Listas ordenadas y no ordenadas.

```svelte
<TerminalList 
  items={["Item 1", "Item 2", "Item 3"]}
  numbered={false}
/>
```

**Props**:
- `items` (array): Array de elementos
- `numbered` (boolean): Lista numerada (ol) o con bullets (ul)

#### TerminalBadge
**Archivo**: `src/components/TerminalBadge.svelte`

Badges informativos con diferentes tipos y tamaños.

```svelte
<TerminalBadge text="Nuevo" type="success" size="medium" />
<TerminalBadge text="Error" type="error" size="small" />
<TerminalBadge text="Info" type="info" size="large" />
```

**Props**:
- `text` (string): Texto del badge
- `type` (string): Tipo - 'default', 'success', 'warning', 'error', 'info'
- `size` (string): Tamaño - 'small', 'medium', 'large'

### 📈 Progress Components

#### ProgressBar
**Archivo**: `src/components/ProgressBar.svelte`

Barra de progreso con porcentaje.

```svelte
<ProgressBar 
  label="Cargando datos..."
  progress={75}
  showPercentage={true}
/>
```

**Props** (asumidos basados en CSS):
- `label` (string): Label descriptivo
- `progress` (number): Porcentaje de progreso (0-100)
- `showPercentage` (boolean): Mostrar porcentaje

### 🧭 Navigation Components

#### Pagination
**Archivo**: `src/components/Pagination.svelte`

Componente de paginación.

```svelte
<Pagination 
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log('Page:', page)}
/>
```

**Props** (asumidos basados en CSS):
- `currentPage` (number): Página actual
- `totalPages` (number): Total de páginas
- `onPageChange` (function): Callback al cambiar página

### 🖼️ Media Components

#### TerminalImage
**Archivo**: `src/components/TerminalImage.svelte`

Imágenes con filtro grayscale y border terminal.

```svelte
<TerminalImage 
  src="/path/to/image.jpg"
  alt="Descripción de la imagen"
/>
```

**Props** (asumidos):
- `src` (string): URL de la imagen
- `alt` (string): Texto alternativo

### 📊 Chart Components

#### StatCard
**Archivo**: `src/components/StatCard.svelte`

Tarjeta de estadística.

#### ChartCard
**Archivo**: `src/components/ChartCard.svelte`

Tarjeta con gráfico.

### 🕒 Utility Components

#### DateTime
**Archivo**: `src/components/DateTime.svelte`

Componente para mostrar fecha y hora.

---

## 🎯 Componentes Nuevos Propuestos

Los siguientes componentes mantienen el mismo patrón de diseño y serán agregados al sistema:

1. **TerminalAlert** - Alertas con diferentes tipos
2. **TerminalTabs** - Sistema de pestañas
3. **TerminalTooltip** - Tooltips informativos
4. **TerminalAccordion** - Contenido colapsable
5. **TerminalSelect** - Dropdown de selección
6. **TerminalTextarea** - Área de texto multilínea
7. **TerminalCheckbox** - Checkboxes con estilo terminal
8. **TerminalRadio** - Radio buttons
9. **TerminalSidebar** - Barra lateral de navegación
10. **TerminalBreadcrumb** - Migas de pan
11. **TerminalSpinner** - Indicador de carga
12. **TerminalCode** - Bloques de código
13. **TerminalSkeleton** - Placeholders de carga
14. **TerminalToast** - Notificaciones temporales

## 🚀 Uso General

Todos los componentes siguen estos principios:

### Importación
```javascript
import TerminalCard from '$lib/components/TerminalCard.svelte';
import TerminalButton from '$lib/components/TerminalButton.svelte';
```

### Props Pattern
- Props con valores por defecto usando destructuring
- Props bindables para valores de entrada
- Snippets para contenido personalizable
- Callbacks para eventos

### Styling
- Todas las clases CSS siguen el patrón `terminal-*`
- Variables CSS para consistencia
- Responsive design incluido
- Hover effects con inversión de colores

### Accesibilidad
- Labels apropiados para inputs
- Roles ARIA donde corresponde
- Navegación por teclado soportada
- Contraste adecuado mantenido

---

## 🔧 Personalización

### Variables CSS Disponibles
```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  /* ... más variables de spacing */
}
```

### Modificadores de Clase
- `--primary`, `--secondary`, `--danger` para variantes
- `--small`, `--medium`, `--large` para tamaños
- `--striped`, `--bordered` para variaciones visuales

Este sistema de componentes proporciona una experiencia de usuario consistente con el theme terminal/retro en toda la aplicación.
