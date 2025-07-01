
<script>
  import {
    TerminalContainer,
    TerminalHeader,
    TerminalGrid,
    TerminalCard,
    TerminalTitle,
    TerminalParagraph,
    TerminalList,
    TerminalBadge,
    DateTime
  } from '../../components';
</script>

<TerminalContainer>
  <TerminalHeader title="Marco Teórico" showCursor>
    <DateTime format="dd/mm/yyyy - hh:MM:ss" />
  </TerminalHeader>

  <TerminalGrid>
    <TerminalCard>
      <TerminalTitle text="Marco teórico metrológico" />
      <TerminalTitle text="¿Qué es la metrología y por qué es fundamental en sistemas automatizados como un vivero inteligente?" />
      <TerminalParagraph text="La metrología es la ciencia encargada del estudio de las mediciones..." />
      <TerminalParagraph text="En nuestro caso \"un vivero inteligente\", donde el control..." />

      <TerminalTitle text="Diferencias entre precisión, exactitud, error e incertidumbre de medición" />
      <TerminalParagraph text="Precisión se refiere a la capacidad de un instrumento para obtener el mismo resultado..." />
      <TerminalParagraph text="Exactitud es el grado de cercanía entre el valor medido y el valor real..." />
      <TerminalParagraph text="Error es la diferencia entre el valor medido y el valor verdadero..." />
      <TerminalParagraph text="Incertidumbre de medición es un parámetro que cuantifica la duda..." />
      <TerminalParagraph text="Comprender estas diferencias es esencial en la implementación de sensores..." />

      <TerminalTitle text="Importancia de la calibración de sensores y la trazabilidad metrológica" />
      <TerminalParagraph text="La calibración consiste en comparar las lecturas de un sensor con un patrón..." />
      <TerminalParagraph text="La trazabilidad metrológica es la propiedad de una medición de estar relacionada..." />

      <TerminalTitle text="B. Normas aplicadas al proyecto" />

      <TerminalTitle text="1. ISO/IEC 17025 – Competencia en laboratorios de calibración" />
      <TerminalList items={["Código: ISO 17025", "Parte del sistema: calibración de sensores (humedad, temperatura)", "Aplicación: Se calibra cada sensor..."]} />

      <TerminalTitle text="2. ISO 9847 – Calibración en condiciones ambientales reales" />
      <TerminalList items={["Código: ISO 9847", "Parte del sistema: calibración en campo", "Aplicación: Los sensores se calibran in situ..."]} />

      <TerminalTitle text="3. OIML D11 – Requisitos ambientales y seguridad para instrumentos electrónicos" />
      <TerminalList items={["Código: OIML D11", "Parte del sistema: sistema electrónico completo", "Aplicación: Se diseñan disposiciones frente a transitorios eléctricos..."]} />

      <TerminalTitle text="4. NIST Handbook 44 – Tolerancias y precisión en instrumentos de medición" />
      <TerminalList items={["Código: NIST Handbook 44", "Parte del sistema: precisión y tolerancias en sensores", "Aplicación: Se adoptan criterios de tolerancia como ±0.5 °C..."]} />

      <TerminalTitle text="5. ISO/IEC 25010 – Calidad del Software" />
      <TerminalList items={["Código: ISO/IEC 25010", "Parte del sistema: software del dashboard y firmware del Arduino", "Aplicación: TLS/SSL para cifrado, reconexión automática, interfaz intuitiva"]} />

      <TerminalTitle text="C. Fundamentos prácticos" />
      <TerminalTitle text="1. Sensores utilizados" />

      <TerminalTitle text="a) Sensor de humedad del suelo – ME110" />
      <TerminalList items={["Principio: sensor resistivo", "Rango: con 5 V: 0–3 V; con 3.3 V: 0–1.7 V", "Resolución: determinada por el ADC del MKR1010", "Calibración: curva voltaje vs humedad"]} />

      <TerminalTitle text="b) Sensor de humedad y temperatura del aire – AM1011A" />
      <TerminalList items={["Principio: sensores capacitivos y termistor", "Rango: 0–100 % RH ±3 %", "Resolución: 1 % RH", "Calibración: comparado con estándar en cámara climática"]} />

      <TerminalTitle text="c) Sensor de temperatura – DS18B20" />
      <TerminalList items={["Principio: termómetro digital", "Rango: –55 °C a +125 °C", "Resolución: configurable a 9–12 bits", "Calibración: con referencia en hielo y baño controlado"]} />

      <TerminalTitle text="d) Módulo reloj – DS3231" />
      <TerminalList items={["Principio: RTC con cristal y compensación de temperatura", "Rango: años 2000 a 2099", "Resolución: 1 segundo", "Calibración: comparado con reloj atómico o GPS"]} />

      <TerminalTitle text="2. Cálculo de incertidumbre – Ejemplo con DS18B20" />
      <TerminalParagraph text="Suponiendo calibración en 0, 25 y 50 °C..." />
      <TerminalParagraph text="La incertidumbre tipo B: ..." />
      <TerminalParagraph text="Factor k=2 para cobertura al 95 %: ..." />
      <TerminalParagraph text="Esto significa que cada lectura tiene ±1.08 °C con un 95 % de confianza." />

      <TerminalTitle text="Ejemplo de error de medición con sensor de humedad del suelo (ME110)" />
      <TerminalParagraph text="Dos sensores ME110 en distintas macetas muestran lecturas muy diferentes..." />

      <TerminalTitle text="Referencias" />
      <TerminalList items={["Iduino (2019)", "Maxim Integrated (2018) DS18B20", "Smith, R. (2016)", "Permana, A. N. et al. (2021)", "Maxim Integrated (2018) DS3231"]} />
    </TerminalCard>
  </TerminalGrid>
</TerminalContainer>
