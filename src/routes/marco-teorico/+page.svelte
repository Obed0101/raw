<script>
  import {
    TerminalContainer,
    TerminalHeader,
    TerminalTitle,
    TerminalParagraph,
    TerminalList,
    TerminalCard,
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
  <TerminalTitle title="Marco teórico metrológico" />

  <TerminalTitle title="¿Qué es la metrología y por qué es fundamental en sistemas automatizados como un vivero inteligente?" />
  <TerminalParagraph text="La metrología es la ciencia encargada del estudio de las mediciones y una disciplina aplicada en diversos campos, además se encarga en mediciones de su estandarización y su aplicación práctica para obtener datos confiables y comparables. Esta disciplina no solo establece cómo medir, sino que garantiza que las mediciones sean coherentes y trazables a patrones o constantes internacionales." />
  <TerminalParagraph text="En nuestro caso “un vivero inteligente”, donde el control de variables como la humedad del suelo, la temperatura, la iluminación, la humedad ambienta y la calidad del aire es esencial para el desarrollo óptimo de las plantas, la metrología desempeña un papel central. Los sistemas automatizados dependen de sensores para tomar decisiones en tiempo real. Si estas mediciones no son precisas ni confiables, todo el sistema pierde eficiencia y puede comprometer la salud de los cultivos. Por ello, la metrología permite que los sensores sean calibrados correctamente, que los datos recogidos tengan validez técnica y que las acciones automáticas del sistema (como el riego o la ventilación) respondan a condiciones reales y verificables." />

  <TerminalTitle title="Diferencias entre precisión, exactitud, error e incertidumbre de medición" />
  <TerminalParagraph text="**Precisión** se refiere a la capacidad de un instrumento para obtener el mismo resultado al repetir la medición varias veces bajo las mismas condiciones. No implica que el valor sea correcto, solo que los datos son consistentes entre sí." />
  <TerminalParagraph text="**Exactitud** es el grado de cercanía entre el valor medido y el valor real o verdadero. Un sistema puede ser preciso, pero no exacto, o viceversa." />
  <TerminalParagraph text="**Error** es la diferencia entre el valor medido y el valor verdadero. Puede ser sistemático (siempre en una dirección) o aleatorio (varía de forma impredecible)." />
  <TerminalParagraph text="**Incertidumbre de medición** es un parámetro que cuantifica la duda que existe sobre el resultado de una medición (en un rango). No es lo mismo que error; la incertidumbre reconoce que toda medición tiene una limitación inherente, incluso si se usa un instrumento bien calibrado." />
  <TerminalParagraph text="Comprender estas diferencias es esencial en la implementación de sensores dentro de nuestro vivero inteligente, ya que influye directamente en la confiabilidad del sistema y en la toma de decisiones automatizadas que debe poseer nuestro vivero." />

  <TerminalTitle title="Importancia de la calibración de sensores y la trazabilidad metrológica" />
  <TerminalParagraph text="La calibración consiste en comparar las lecturas de un sensor con un patrón de referencia conocido o con condiciones que alteran la medición y ajustarlo en caso necesario para reducir errores. En un vivero inteligente, sensores mal calibrados pueden generar lecturas incorrectas que deriven en fallos, como un exceso de riego o la activación innecesaria de sistemas de ventilación." />
  <TerminalParagraph text="La trazabilidad metrológica es la propiedad de una medición de estar relacionada a través de una cadena de comparaciones con patrones internacionales, normalmente mantenidos por institutos nacionales de metrología. Esta trazabilidad garantiza que las mediciones sean reconocidas y comparables a nivel global. En el contexto del vivero, asegurar trazabilidad significa que las condiciones ambientales medidas tienen validez técnica y científica." />

  <TerminalTitle title="B. Normas aplicadas al proyecto" />

  <TerminalTitle title="1. ISO/IEC 17025 – Competencia en laboratorios de calibración" />
  <TerminalList items={[
    "**Código:** ISO 17025",
    "**Parte del sistema:** calibración de sensores (humedad, temperatura)",
    "**Aplicación en el proyecto:** Se calibra cada sensor (DMAs, DS18B20, etc.) en laboratorio acreditado con trazabilidad SI, recibiendo certificado con incertidumbre medida. Esto asegura que los datos enviados por el MKR1010 al dashboard sean técnicamente válidos y confiables."
  ]} />

  <TerminalTitle title="2. ISO 9847 – Calibración en condiciones ambientales reales" />
  <TerminalList items={[
    "**Código:** ISO 9847",
    "**Parte del sistema:** calibración en campo, sensores ambientales",
    "**Aplicación en el proyecto:** Los sensores de humedad del suelo y ambiente se calibran in situ, simulando las condiciones del vivero (temperatura, humedad). Esto permite que las lecturas reflejen con precisión las condiciones reales, sin sesgos introducidos por calibraciones en laboratorios que no replican el entorno real."
  ]} />

  <TerminalTitle title="3. OIML D11 – Requisitos ambientales y seguridad para instrumentos electrónicos" />
  <TerminalList items={[
    "**Código:** OIML D11",
    "**Parte del sistema:** sistema electrónico completo (Arduino + sensores + comunicación)",
    "**Aplicación en el proyecto:** Se diseñan disposiciones frente a transitorios eléctricos, variación de temperatura (incluyendo problemas de dispositivos como calentamiento del Arduino mkr) y vibración para asegurar que el sistema no sufra errores metrológicos bajo condiciones reales del vivero. Por ejemplo, pruebas de resistencia a temperatura y vibración antes del montaje."
  ]} />

  <TerminalTitle title="4. NIST Handbook 44 – Tolerancias y precisión en instrumentos de medición" />
  <TerminalList items={[
    "**Código:** NIST Handbook 44",
    "**Parte del sistema:** precisión y tolerancias en sensores",
    "**Aplicación en el proyecto:** Aunque se utiliza en EE.UU. para dispositivos comerciales, se adoptan criterios de tolerancia por ejemplo ±0.5 °C para temperatura, ±3 % RH para humedad (estos valores dependen de nuestro sensor. Esto para establecer alarmas y rangos operativos en el dashboard."
  ]} />

  <TerminalTitle title="5. Norma adicional: ISO/IEC 25010 – Calidad del Software" />
  <TerminalList items={[
    "**Código:** ISO/IEC 25010",
    "**Parte del sistema:** software del dashboard y firmware del Arduino (interfaz, lógica, envío/recepción de datos)",
    "**Aplicación del proyecto:**",
    "  **Calidad:** El firmware en el MKR1010 y el dashboard implementan TLS/SSL para cifrar datos y proteger credenciales de usuario.",
    "  **Fiabilidad:** Se garantizan tiempos de actividad altos mediante manejo de errores en la conexión WiFi y reconexión automática si falla.",
    "  **Usabilidad:** La interfaz del dashboard es intuitiva: el usuario puede ver gráficas de temperatura/humedad e identificar alertas de forma visual sencilla."
  ]} />

  <TerminalTitle title="C. Fundamentos prácticos" />

  <TerminalTitle title="1. Sensores utilizados" />

  <TerminalTitle title="a) Sensor de humedad del suelo – ME110" />
  <TerminalList items={[
    "**Principio de funcionamiento:** Sensor resistivo que mide la conductividad eléctrica del suelo. Más agua → mayor conductividad → menor resistencia → mayor voltaje de salida",
    "**Rango:** Depende del voltaje de alimentación. Con 5 V: 0–3 V; con 3.3 V: 0–1.7 V",
    "**Resolución:** Determinada por el ADC del Arduino MKR1010 (10 bits ≈ 0.0049 V por paso).",
    "**Calibración:** Con muestras de suelo en condiciones conocidas (seca – húmeda – saturada), se crea una curva de voltaje vs porcentaje humedad usando regresión lineal."
  ]} />

  <TerminalTitle title="b) Sensor de humedad y temperatura del aire – AM1011A (similar al DHT11)" />
  <TerminalList items={[
    "**Principio:** Sensores capacitivos (humedad) y de temperatura (termistor interno). Produce señal digital por un solo cable.",
    "**Rango:** Humedad 0–100 % RH ±3 %",
    "**Resolución:** 1 % RH.",
    "**Calibración:** Se compara con un instrumento estándar en cámara climática; ajustar offset en firmware."
  ]} />

  <TerminalTitle title="c) Sensor de temperatura – DS18B20" />
  <TerminalList items={[
    "**Principio:** Termómetro digital de alta precisión, interfaz 1-wire.",
    "**Rango:** –55 °C a +125 °C, precisión ±0.5 °C (–10 a +85 °C)",
    "**Resolución:** Configurable a 9–12 bits (0.5 °C a 0.0625 °C)",
    "**Calibración:** Comparación con termómetro de referencia en puntos de hielo (0 °C) y baño controlado. Luego ajuste lineal."
  ]} />

  <TerminalTitle title="d) Módulo reloj – DS3231" />
  <TerminalList items={[
    "**Principio de funcionamiento:** El DS3231 es un reloj de tiempo real (RTC) que mantiene actualizados la fecha y la hora incluso si el microcontrolador se reinicia o pierde alimentación. Usa un cristal interno y compensación de temperatura para mantener alta precisión. Funciona mediante comunicación I2C con el microcontrolador (como el Arduino MKR1010 WiFi).",
    "**Rango:** Años: 2000 a 2099. Fecha completa: segundos, minutos, horas (formato 12/24 h), día, fecha, mes, año.",
    "**Resolución:** 1 segundo (para reloj)",
    "**Calibración:** El DS3231 es un RTC de alta precisión, con desviación menor a ±2 ppm (≈ 1 minuto por año). Sin embargo, se puede verificar su exactitud comparándolo con una fuente externa confiable (reloj atómico en línea o módulo GPS). En caso de detectar deriva, se puede ajustar desde el código del Arduino usando las funciones de la librería."
  ]} />

  <TerminalTitle title="2. Cálculo de incertidumbre – Ejemplo con DS18B20" />
  <TerminalParagraph text="Suponiendo calibración en 0 °C, 25 °C y 50 °C, cada punto comparado con termómetro de referencia (incertidumbre ±0.2 °C):" />
  <TerminalParagraph text="Se obtiene desviación promedio y residuales." />
  <TerminalParagraph text="**La incertidumbre tipo B:**" />
  <TerminalParagraph text="**Factor k=2 para cobertura al 95 %:**" />
  <TerminalParagraph text="Esto significa que cada lectura tiene ±1.08 °C con un 95 % de confianza." />

  <TerminalTitle title="Ejemplo de error de medición con sensor de humedad del suelo (ME110)" />
  <TerminalParagraph text="Tienes dos sensores ME110 instalados en distintas macetas o zonas del vivero. Ambos están conectados al mismo Arduino MKR1010 WiFi y envían datos al dashboard." />
  <TerminalParagraph text="**Lecturas observadas:**" />
  <TerminalList items={[
    "**Sensor ME110_1 zonaA:** 95%",
    "**ME110_2 zona B:** 40%"
  ]} />
  <TerminalParagraph text="La zona A y B tienen el mismo tipo de planta, han sido regadas al mismo tiempo, y están ubicadas en un espacio cercano. Deberían tener un valor cercao entre ellas en este caso no lo cual representa un error en la medición." />

  <TerminalTitle title="Referencias" />
  <TerminalList items={[
    "Iduino. (2019). Soil Moisture Sensor ME110: user manual. Openplatform CC.",
    "Maxim Integrated. (2018). DS18B20 programmable resolution 1-Wire digital thermometer datasheet. Analog Devices.",
    "Smith, R. (2016). Absolute Calibration of DS18B20 Thermometers. KandRSmith.org.",
    "Permana, A. N., Wibawa, I. M. S., & Putra, I. K. (2021). DS18B20 sensor uncertainty value. ResearchGate.",
    "Maxim Integrated. (2018). DS3231 Extremely Accurate I2C-Integrated RTC with TCXO and Crystal [Datasheet]. Analog Devices. https://www.analog.com/media/en/technical-documentation/data-sheets/ds3231.pdf"
  ]} />
</TerminalContainer>

