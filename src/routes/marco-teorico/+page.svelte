<script>
  import {
    TerminalContainer,
    TerminalHeader,
    TerminalGrid, // Aunque no se use extensivamente para el contenido principal, se mantiene la importación del ejemplo
    StatCard, // Importaciones del ejemplo, no usadas para el contenido HTML
    ChartCard, // ...
    DateTime,
    TerminalTitle,
    TerminalParagraph,
    TerminalCard,
    TerminalButton, // ...
    ProgressBar, // ...
    TerminalBadge, // ...
    TerminalTable, // ...
    TerminalList,
    TerminalImage, // ...
    TerminalModal, // ...
    TerminalInput, // ...
    Pagination // ...
  } from '../../components';

  // State variables del ejemplo base (se mantienen aunque no se usen para este contenido específico)
  let isModalOpen = $state(false);
  let currentPage = $state(1);
  let inputValue = $state("");

  // Sample data del ejemplo base (se mantienen aunque no se usen para este contenido específico)
  const tableHeaders = ["Planta", "Estado", "Progreso"];
  const tableRows = [
    ["Tomate", "Creciendo", "80%"],
    ["Lechuga", "Germinando", "30%"],
    ["Pimiento", "Maduro", "100%"]
  ];

  const listItems = ["Regar plantas", "Verificar pH", "Aplicar fertilizante"];

  // Functions del ejemplo base (se mantienen aunque no se usen para este contenido específico)
  function openModal() { isModalOpen = true; }
  function closeModal() { isModalOpen = false; }
  function handlePageChange(page) { currentPage = page; }

</script>

<TerminalContainer>
  <!-- Header de la página, según el ejemplo -->
  <TerminalHeader title="MARCO TEÓRICO METROLÓGICO" showCursor>
    <!-- Puedes mantener la fecha/hora si es parte del diseño de la página -->
    <DateTime format="dd/mm/yyyy - hh:MM:ss" />
  </TerminalHeader>
  
  <TerminalGrid>
    <StatCard label="Conceptos Teóricos" value="15" />
    <StatCard label="Referencias" value="28" />
    <StatCard label="Páginas" value="45" />
  </TerminalGrid>
  
<TerminalGrid>
  <TerminalCard title="Introducción">
    <TerminalParagraph text="El marco teórico constituye la base conceptual sobre la cual se fundamenta esta investigación..." />
    <TerminalBadge text="Capítulo 1" type="info" />
  </TerminalCard>
</TerminalGrid>
  
  <TerminalGrid>
    <TerminalCard title="Conceptos Clave">
      <TerminalParagraph text="Agricultura sostenible, biotecnología verde, gestión de cultivos." />
      <ProgressBar label="Progreso de revisión" value={75} />
    </TerminalCard>
    
    <ChartCard title="Distribución de Referencias" chartId="ref-chart" />
  </TerminalGrid>
  
  <TerminalGrid>
    <TerminalButton text="Ver Referencias" type="primary" />
    <TerminalButton text="Exportar PDF" type="secondary" />
    <TerminalButton text="Editar" type="danger" />
  </TerminalGrid>
</TerminalContainer>