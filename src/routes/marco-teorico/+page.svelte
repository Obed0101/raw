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
      <TerminalParagraph text="En nuestro caso \"un vivero inteligente\", donde el control de variables como la humedad del suelo, la temperatura, la iluminación, la humedad ambienta y la calidad del aire es esencial para el desarrollo óptimo de las plantas, la metrología desempeña un papel central. Los sistemas automatizados dependen de sensores para tomar decisiones en tiempo real. Si estas mediciones no son precisas ni confiables, todo el sistema pierde eficiencia y puede comprometer la salud de los cultivos. Por ello, la metrología permite que los sensores sean calibrados correctamente, que los datos recogidos tengan validez técnica y que las acciones automáticas del sistema (como el riego o la ventilación) respondan a condiciones reales y verificables." />
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
    <TerminalCard>
      <TerminalTitle text="Normas aplicadas al proyecto" />
      <TerminalList items={[
        'ISO/IEC 17025: Calibración de sensores en laboratorio acreditado con trazabilidad SI.',
        'ISO 9847: Calibración en campo bajo condiciones reales.',
        'OIML D11: Seguridad y condiciones ambientales para instrumentos electrónicos.',
        'NIST Handbook 44: Tolerancias y precisión en sensores.',
        'ISO/IEC 25010: Calidad, fiabilidad y usabilidad del software del sistema.'
      ]} />
    </TerminalCard>
  </TerminalGrid>

  <TerminalGrid>
