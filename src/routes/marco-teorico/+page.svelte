<script>
  import {
    TerminalContainer,
    TerminalHeader,
    TerminalGrid,
    TerminalTitle,
    TerminalParagraph,
    TerminalCard,
    TerminalList
  } from '../../components';
</script>

<TerminalContainer>
  <TerminalHeader title="Marco Teórico Metrológico" showCursor />

  <TerminalGrid>
    <TerminalCard>
      <TerminalTitle text="¿Qué es la metrología y por qué es fundamental en sistemas automatizados como un vivero inteligente?" />
      <TerminalParagraph text="La metrología es la ciencia encargada del estudio de las mediciones y una disciplina aplicada en diversos campos, además se encarga en mediciones de su estandarización y su aplicación práctica para obtener datos confiables y comparables. Esta disciplina no solo establece cómo medir, sino que garantiza que las mediciones sean coherentes y trazables a patrones o constantes internacionales." />
    </TerminalCard>
  </TerminalGrid>

  <TerminalGrid>
    <TerminalCard>
      <TerminalTitle text="Diferencias entre precisión, exactitud, error e incertidumbre de medición" />
      <TerminalList items={[
        'Precisión: capacidad de obtener el mismo resultado al repetir la medición. No implica valor correcto, sólo consistencia.',
        'Exactitud: cercanía entre el valor medido y el valor real.',
        'Error: diferencia entre valor medido y verdadero, puede ser sistemático o aleatorio.',
        'Incertidumbre: rango de duda sobre el resultado de una medición, diferente al error.'
      ]} />
      <TerminalParagraph text="Comprender estas diferencias es esencial en la implementación de sensores dentro de nuestro vivero inteligente, ya que influye directamente en la confiabilidad del sistema y en la toma de decisiones automatizadas que debe poseer nuestro vivero." />
    </TerminalCard>
  </TerminalGrid>

  <TerminalGrid>
    <TerminalCard>
      <TerminalTitle text="Importancia de la calibración de sensores y la trazabilidad metrológica" />
      <TerminalParagraph text="La calibración consiste en comparar las lecturas de un sensor con un patrón de referencia conocido y ajustarlo en caso necesario para reducir errores." />
      <TerminalParagraph text="La trazabilidad metrológica es la propiedad de una medición de estar relacionada mediante una cadena de comparaciones con patrones internacionales. Esto garantiza que las mediciones sean reconocidas y comparables a nivel global." />
    </TerminalCard>
  </TerminalGrid>

  

  <TerminalGrid>
