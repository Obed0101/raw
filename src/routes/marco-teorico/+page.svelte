<script>
  import {
    TerminalContainer,
    TerminalHeader,
    TerminalGrid,
    StatCard,
    ChartCard,
    DateTime,
    TerminalParagraph,
    TerminalCard,
    TerminalButton,
    TerminalBadge,
    ProgressBar
  } from '../../components';
</script>

<TerminalContainer>
  <TerminalHeader title="Marco Teórico" showCursor>
    <DateTime format="d/m/yyyy hh:MM:ss" />
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
