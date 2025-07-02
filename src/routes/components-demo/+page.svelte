<script>
  import TerminalContainer from '../../components/TerminalContainer.svelte';
  import TerminalGrid from '../../components/TerminalGrid.svelte';
  import TerminalCard from '../../components/TerminalCard.svelte';
  import TerminalButton from '../../components/TerminalButton.svelte';
  import TerminalInput from '../../components/TerminalInput.svelte';
  import TerminalTitle from '../../components/TerminalTitle.svelte';
  import TerminalHeader from '../../components/TerminalHeader.svelte';
  import TerminalTable from '../../components/TerminalTable.svelte';
  import TerminalList from '../../components/TerminalList.svelte';
  import TerminalBadge from '../../components/TerminalBadge.svelte';
  import TerminalModal from '../../components/TerminalModal.svelte';
  
  // Nuevos componentes
  import TerminalAlert from '../../components/TerminalAlert.svelte';
  import TerminalTabs from '../../components/TerminalTabs.svelte';
  import TerminalSelect from '../../components/TerminalSelect.svelte';
  import TerminalTextarea from '../../components/TerminalTextarea.svelte';
  import TerminalCheckbox from '../../components/TerminalCheckbox.svelte';
  import TerminalSpinner from '../../components/TerminalSpinner.svelte';
  import TerminalCode from '../../components/TerminalCode.svelte';
  import TerminalToast from '../../components/TerminalToast.svelte';
  import TerminalAccordion from '../../components/TerminalAccordion.svelte';

  // Estados reactivos
  let inputValue = $state("");
  let textareaValue = $state("Escribe aquí tu código...");
  let selectValue = $state("");
  let checkboxValue = $state(false);
  let showModal = $state(false);
  let showToast = $state(false);
  let alertVisible = $state(true);
  let accordionOpen = $state(false);
  let activeTab = $state("tab1");

  // Datos para componentes
  const tableHeaders = ["ID", "Componente", "Estado", "Versión"];
  const tableRows = [
    ["1", "TerminalButton", "Activo", "v1.0"],
    ["2", "TerminalInput", "Activo", "v1.0"],
    ["3", "TerminalCard", "Activo", "v1.0"],
    ["4", "TerminalAlert", "Nuevo", "v1.1"]
  ];

  const listItems = ["Componente 1", "Componente 2", "Componente 3"];

  const selectOptions = [
    { value: "option1", label: "Opción 1" },
    { value: "option2", label: "Opción 2" },
    { value: "option3", label: "Opción 3" }
  ];

  const tabs = [
    { id: "tab1", label: "Básicos", content: "<p>Componentes básicos del sistema Terminal UI</p>" },
    { id: "tab2", label: "Formularios", content: "<p>Componentes de formulario con estilo terminal</p>" },
    { id: "tab3", label: "Navegación", content: "<p>Componentes de navegación y estructura</p>" }
  ];

  const codeExample = `// Ejemplo de uso de TerminalButton
import TerminalButton from '$lib/components/TerminalButton.svelte';

function handleClick() {
  console.log('¡Botón presionado!');
}

<TerminalButton 
  text="Ejecutar" 
  type="primary" 
  onClick={handleClick} 
/>`;

  function showToastMessage() {
    showToast = true;
  }
</script>

<svelte:head>
  <title>Terminal UI Components Demo</title>
</svelte:head>

<TerminalContainer>
  <TerminalHeader title="TERMINAL UI COMPONENTS DEMO" showCursor={true}>
    {#snippet children()}
      <span>Sistema completo de componentes v1.1</span>
    {/snippet}
  </TerminalHeader>

  <!-- Alertas -->
  <section>
    <TerminalTitle text="Alertas y Notificaciones" level={2} />
    
    <TerminalAlert 
      message="Esta es una alerta informativa del sistema"
      type="info"
      dismissible={true}
      bind:visible={alertVisible}
    />
    
    <TerminalAlert 
      message="Operación completada exitosamente"
      type="success"
      dismissible={false}
    />
    
    <TerminalAlert 
      message="Advertencia: Revisa la configuración"
      type="warning"
    />
    
    <TerminalAlert 
      message="Error: No se pudo conectar al servidor"
      type="error"
    />

    <TerminalButton 
      text="Mostrar Toast" 
      type="primary" 
      onClick={showToastMessage} 
    />
  </section>

  <!-- Tabs -->
  <section>
    <TerminalTitle text="Sistema de Pestañas" level={2} />
    
    <TerminalTabs 
      {tabs}
      bind:activeTab
      onTabChange={(tabId) => console.log('Tab cambiado:', tabId)}
    />
  </section>

  <!-- Formularios -->
  <section>
    <TerminalTitle text="Componentes de Formulario" level={2} />
    
    <TerminalGrid>
      <TerminalCard title="Inputs">
        {#snippet children()}
          <TerminalInput 
            bind:value={inputValue}
            label="Nombre de usuario"
            placeholder="Ingresa tu nombre..."
          />
          
          <TerminalSelect
            bind:value={selectValue}
            options={selectOptions}
            label="Selecciona una opción"
            placeholder="Elige..."
          />
          
          <TerminalTextarea
            bind:value={textareaValue}
            label="Código"
            rows={4}
            maxLength={200}
          />
          
          <TerminalCheckbox
            bind:checked={checkboxValue}
            label="Acepto los términos y condiciones"
          />
        {/snippet}
      </TerminalCard>

      <TerminalCard title="Estados">
        {#snippet children()}
          <p>Input: {inputValue || "(vacío)"}</p>
          <p>Select: {selectValue || "(no seleccionado)"}</p>
          <p>Checkbox: {checkboxValue ? "Marcado" : "No marcado"}</p>
          <p>Textarea: {textareaValue.length} caracteres</p>
        {/snippet}
      </TerminalCard>
    </TerminalGrid>
  </section>

  <!-- Botones y Badges -->
  <section>
    <TerminalTitle text="Botones y Badges" level={2} />
    
    <div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
      <TerminalButton text="Primario" type="primary" />
      <TerminalButton text="Secundario" type="secondary" />
      <TerminalButton text="Peligro" type="danger" />
      <TerminalButton text="Deshabilitado" disabled={true} />
      <TerminalButton text="Abrir Modal" onClick={() => showModal = true} />
    </div>

    <div style="display: flex; gap: 0.5rem; margin: 1rem 0; flex-wrap: wrap;">
      <TerminalBadge text="Nuevo" type="success" size="small" />
      <TerminalBadge text="Actualizado" type="info" size="medium" />
      <TerminalBadge text="Advertencia" type="warning" size="medium" />
      <TerminalBadge text="Error" type="error" size="large" />
    </div>
  </section>

  <!-- Datos -->
  <section>
    <TerminalTitle text="Visualización de Datos" level={2} />
    
    <TerminalGrid>
      <TerminalCard title="Tabla">
        {#snippet children()}
          <TerminalTable 
            headers={tableHeaders}
            rows={tableRows}
            striped={true}
          />
        {/snippet}
      </TerminalCard>

      <TerminalCard title="Lista">
        {#snippet children()}
          <TerminalList items={listItems} numbered={true} />
          
          <TerminalSpinner text="Cargando datos..." size="medium" />
        {/snippet}
      </TerminalCard>
    </TerminalGrid>
  </section>

  <!-- Código -->
  <section>
    <TerminalTitle text="Bloques de Código" level={2} />
    
    <TerminalCode 
      code={codeExample}
      language="javascript"
      title="Ejemplo de uso"
      copyable={true}
    />
    
    <p>También puedes usar código inline como <TerminalCode code="console.log('Hola')" inline={true} /></p>
  </section>

  <!-- Acordeón -->
  <section>
    <TerminalTitle text="Contenido Colapsable" level={2} />
    
    <TerminalAccordion 
      title="Información del Sistema Terminal UI"
      bind:isOpen={accordionOpen}
    >
      {#snippet children()}
        <p>El sistema Terminal UI es una colección completa de componentes con diseño retro/terminal que incluye:</p>
        <TerminalList items={[
          "Más de 20 componentes funcionales",
          "Diseño consistente con tema terminal",
          "Accesibilidad incorporada",
          "Responsivo por defecto",
          "Documentación completa"
        ]} numbered={false} />
      {/snippet}
    </TerminalAccordion>
  </section>
</TerminalContainer>

<!-- Modal -->
<TerminalModal 
  isOpen={showModal}
  title="Modal de Demostración"
  onClose={() => showModal = false}
>
  {#snippet children()}
    <p>Este es un modal con estilo terminal. Puedes cerrarlo haciendo clic fuera de él o en el botón X.</p>
    <TerminalButton 
      text="Cerrar" 
      type="secondary"
      onClick={() => showModal = false} 
    />
  {/snippet}
</TerminalModal>

<!-- Toast -->
<TerminalToast
  message="¡Notificación de prueba mostrada correctamente!"
  type="success"
  duration={3000}
  position="top-right"
  bind:visible={showToast}
/>
