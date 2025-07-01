<script>
  import {
    TerminalContainer,
    TerminalHeader,
    TerminalGrid,
    StatCard,
    ChartCard,
    DateTime,
    TerminalTitle,
    TerminalParagraph,
    TerminalCard,
    TerminalButton,
    ProgressBar,
    TerminalBadge,
    TerminalTable,
    TerminalList,
    TerminalImage,
    TerminalModal,
    TerminalInput,
    Pagination
  } from '../../components';
  
  // State variables
  let isModalOpen = $state(false);
  let currentPage = $state(1);
  let inputValue = $state("");
  
  // Sample data
  const tableHeaders = ["Planta", "Estado", "Progreso"];
  const tableRows = [
    ["Tomate", "Creciendo", "80%"],
    ["Lechuga", "Germinando", "30%"],
    ["Pimiento", "Maduro", "100%"]
  ];
  
  const listItems = ["Regar plantas", "Verificar pH", "Aplicar fertilizante"];
  
  function openModal() { isModalOpen = true; }
  function closeModal() { isModalOpen = false; }
  function handlePageChange(page) { currentPage = page; }
</script>

<TerminalContainer>
  <TerminalHeader title="SISTEMA DE CULTIVO INTELIGENTE" showCursor>
    <DateTime format="dd/mm/yyyy - hh:MM:ss" />
  </TerminalHeader>
  
  <!-- Stats principales -->
  <TerminalGrid>
    <StatCard label="Plantas Activas" value="156" />
    <StatCard label="Temperatura" value="24°C" />
    <StatCard label="Humedad" value="67%" />
    <StatCard label="Productividad" value="92%" />
  </TerminalGrid>
  
  <!-- Progreso de cultivos -->
 <TerminalGrid>
  <TerminalCard title="Estado de Cultivos">
    <ProgressBar label="Tomates" value="85" />
    <ProgressBar label="Lechugas" value="62" />
    <ProgressBar label="Pimientos" value="91" />
  </TerminalCard>
 </TerminalGrid>
  
  <!-- Badges de estado -->
  <TerminalGrid>
    <TerminalCard title="Alertas del Sistema">
      <TerminalBadge text="NORMAL" type="success" size="large" />
      <TerminalBadge text="pH BAJO" type="warning" size="medium" />
      <TerminalBadge text="TEMP ALTA" type="error" size="small" />
    </TerminalCard>
    
    <ChartCard title="Análisis de Crecimiento" chartId="growth-chart" />
  </TerminalGrid>
  
  <!-- Tabla de datos -->
  <TerminalGrid>
    <TerminalCard title="Monitoreo de Plantas">
      <TerminalTable headers={tableHeaders} rows={tableRows} striped />
    </TerminalCard>
  </TerminalGrid>
  
  <!-- Lista de tareas -->
  <TerminalGrid>
    <TerminalCard title="Tareas Pendientes">
      <TerminalList items={listItems} numbered />
    </TerminalCard>
    
    <TerminalCard title="Control Manual">
      <TerminalInput 
        label="Comando" 
        placeholder="Ingrese comando..." 
        bind:value={inputValue} 
      />
      <TerminalButton text="Ejecutar" type="primary" />
    </TerminalCard>
  </TerminalGrid>
  
  <!-- Botones de acción -->
  <TerminalGrid>
    <TerminalButton text="Ver Reportes" type="primary" onClick={openModal} />
    <TerminalButton text="Configurar" type="secondary" />
    <TerminalButton text="Emergencia" type="danger" />
  </TerminalGrid>
  
  <!-- Paginación -->
  <Pagination 
    currentPage={currentPage} 
    totalPages={5} 
    onPageChange={handlePageChange} 
  />
  
  <!-- Modal de ejemplo -->
  <TerminalModal 
    isOpen={isModalOpen} 
    title="Reporte del Sistema" 
    onClose={closeModal}
  >
    <TerminalParagraph text="Este es un ejemplo de modal con información detallada del sistema." />
    <TerminalBadge text="DATOS ACTUALIZADOS" type="info" />
  </TerminalModal>
</TerminalContainer>
