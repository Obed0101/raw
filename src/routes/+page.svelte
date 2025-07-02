<script>

  //here we go the data mock of widgets and grpahs
  // now the start continue with the grpahs and widgets

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
  } from '../components';

</script>

<TerminalContainer>
<TerminalHeader title="RAW" showCursor />
<TerminalGrid>
  <StatCard label="Estadistica New" value="100" />
  <StatCard label="Estadistica New" value="100" />
</TerminalGrid>

<TerminalGrid>
  <ChartCard title="Gráfico de prueba" chartId="chart" />
</TerminalGrid>

</TerminalContainer>
