/* Banco de preguntas indicado por el usuario. answer usa índices: 0=A, 1=B, 2=C, 3=D. */
const QUESTIONS = [
  {
    id: 1,
    module: "matematica",
    title: "Proporcionalidad en una receta",
    prompt:
      "Para preparar una receta para 4 personas se necesitan 300 g de harina. ¿Cuánta harina se necesita para preparar la misma receta para 10 personas?",
    options: ["600 g", "700 g", "750 g", "900 g"],
    answer: 2,
    explanation:
      "Cada persona requiere 300 ÷ 4 = 75 g. Para 10 personas: 75 × 10 = 750 g.",
  },
  {
    id: 2,
    module: "matematica",
    title: "Descuentos sucesivos",
    prompt:
      "Una mochila cuesta $2500. En una primera oferta tiene un descuento del 10 %. Sobre el precio ya rebajado se aplica otro descuento del 20 %. ¿Cuál es el precio final?",
    options: ["$1750", "$1800", "$1875", "$2000"],
    answer: 1,
    explanation:
      "Primero queda 2500 × 0,90 = $2250. Luego se descuenta el 20 % de ese precio: 2250 × 0,80 = $1800.",
  },
  {
    id: 3,
    module: "matematica",
    title: "Velocidad promedio",
    prompt:
      "Un ómnibus recorre 180 km en 3 horas, manteniendo una velocidad promedio constante. ¿Cuántos kilómetros recorre en una hora?",
    options: ["45 km", "50 km", "60 km", "90 km"],
    answer: 2,
    explanation:
      "Dividimos la distancia total entre las 3 horas: 180 ÷ 3 = 60 km por hora.",
  },
  {
    id: 4,
    module: "matematica",
    title: "Expresión de un costo",
    prompt:
      "Un servicio de transporte cobra $80 de tarifa inicial y $35 por cada kilómetro recorrido. ¿Qué expresión representa el costo de un viaje de x kilómetros?",
    options: ["80x + 35", "35x + 80", "115x", "80(x + 35)"],
    answer: 1,
    explanation:
      "El costo variable es $35 por cada uno de los x kilómetros, es decir, 35x. A eso se suman los $80 iniciales: 35x + 80.",
  },
  {
    id: 5,
    module: "matematica",
    title: "Interpretar una tendencia",
    prompt:
      "La cantidad de usuarios de un servicio se estima con la ecuación y = 12x + 240. El año x = 0 corresponde a 2025. ¿En qué año la cantidad superará por primera vez los 360 usuarios?",
    options: ["2034", "2035", "2036", "2037"],
    answer: 2,
    explanation:
      "Si x = 10, y = 12(10) + 240 = 360, que corresponde a 2035. En x = 11, correspondiente a 2036, y = 372; ese es el primer año en que supera 360.",
    image: "assets/exercises/ejercicio-05.webp",
    imageAlt: "Gráfica opcional de la tendencia de usuarios del ejercicio 5.",
  },
  {
    id: 6,
    module: "matematica",
    title: "Mediana de datos",
    prompt:
      "Durante cinco días se registraron estas temperaturas máximas: 18 °C, 20 °C, 19 °C, 23 °C y 20 °C. ¿Cuál es la mediana?",
    options: ["19 °C", "20 °C", "21 °C", "23 °C"],
    answer: 1,
    explanation:
      "Ordenamos los datos: 18, 19, 20, 20, 23. El valor central es 20 °C.",
  },
  {
    id: 7,
    module: "matematica",
    title: "Probabilidad simple",
    prompt:
      "En una bolsa hay 4 fichas rojas, 3 azules y 1 verde. Si se saca una ficha al azar, ¿cuál es la probabilidad de que sea azul?",
    options: ["1/8", "3/8", "1/2", "5/8"],
    answer: 1,
    explanation:
      "Hay 8 fichas en total y 3 son azules. La probabilidad es 3/8.",
  },
  {
    id: 8,
    module: "matematica",
    title: "Selección de representantes",
    prompt:
      "Se eligen 2 representantes de un grupo de 6 personas. ¿Cuántas parejas diferentes se pueden formar si el orden de elección no importa?",
    options: ["12", "15", "30", "36"],
    answer: 1,
    explanation:
      "Como el orden no importa, se usan combinaciones: C(6,2) = (6 × 5) ÷ 2 = 15 parejas.",
  },
  {
    id: 9,
    module: "matematica",
    title: "Área de una habitación",
    prompt:
      "Una habitación rectangular mide 7,5 m de largo y 4 m de ancho. ¿Cuál es su área?",
    options: ["11,5 m²", "23 m²", "30 m²", "60 m²"],
    answer: 2,
    explanation: "El área de un rectángulo es largo × ancho: 7,5 × 4 = 30 m².",
  },
  {
    id: 10,
    module: "matematica",
    title: "Comparar precios por cantidad",
    prompt:
      "Una tienda vende arroz en dos presentaciones: 750 g por $90 y 1,2 kg por $132. ¿Cuál presentación tiene menor precio por kilogramo?",
    options: [
      "La de 750 g",
      "La de 1,2 kg",
      "Ambas tienen el mismo precio por kilogramo",
      "No se puede determinar",
    ],
    answer: 1,
    explanation:
      "La presentación de 750 g cuesta 90 ÷ 0,75 = $120 por kg. La de 1,2 kg cuesta 132 ÷ 1,2 = $110 por kg, por lo que es más económica por kilogramo.",
  },
  {
    id: 11,
    module: "ciencias",
    type: "written",
    title: "Diseño de una investigación",
    prompt:
      "Un equipo quiere estudiar si la cantidad de luz influye en el crecimiento de una planta. Describe un procedimiento que permita investigar esa pregunta. Indica qué cambiarías, qué mantendrías igual y qué medirías.",
  },
  {
    id: 12,
    module: "ciencias",
    title: "Interpretar resultados experimentales",
    prompt:
      "En un experimento se midió la producción de una planta a diferentes temperaturas: 10 °C → 2 unidades; 20 °C → 5 unidades; 30 °C → 8 unidades; 40 °C → 4 unidades. ¿A qué temperatura se registró la mayor producción entre las condiciones probadas?",
    options: ["10 °C", "20 °C", "30 °C", "40 °C"],
    answer: 2,
    explanation: "La producción más alta es 8 unidades, registrada a 30 °C.",
    image: "assets/exercises/ejercicio-12.webp",
    imageAlt: "Gráfica opcional de producción de la planta por temperatura.",
  },
  {
    id: 13,
    module: "ciencias",
    title: "Evaporación",
    prompt:
      "Una camiseta mojada se seca más rápido al sol que en un lugar frío y sombreado. ¿Cuál explicación es la más adecuada?",
    options: [
      "La luz convierte el agua en tela.",
      "El calor favorece que el agua líquida pase al estado gaseoso.",
      "El agua desaparece y deja de existir.",
      "La tela produce agua cuando recibe luz.",
    ],
    answer: 1,
    explanation:
      "Al aumentar la temperatura, se favorece la evaporación: el agua líquida pasa al estado gaseoso más rápidamente.",
  },
  {
    id: 14,
    module: "ciencias",
    title: "Relaciones en un ecosistema",
    prompt:
      "En un ecosistema, los zorros se alimentan de conejos y los conejos consumen plantas. Si disminuye mucho la cantidad de zorros, ¿qué cambio podría ocurrir inicialmente?",
    options: [
      "Podrían aumentar los conejos y disminuir las plantas.",
      "Podrían disminuir los conejos y aumentar las plantas.",
      "Los conejos dejarían de alimentarse.",
      "La cantidad de plantas no podría cambiar.",
    ],
    answer: 0,
    explanation:
      "Con menos zorros, podría disminuir la depredación de conejos. Si estos aumentan, consumirían más plantas, cuya cantidad podría disminuir.",
  },
  {
    id: 15,
    module: "ciencias",
    title: "Densidad y flotación",
    prompt:
      "Un objeto tiene una masa de 120 g y un volumen de 40 cm³. La densidad del agua es aproximadamente 1 g/cm³. ¿Qué es más probable que ocurra al colocarlo en agua?",
    options: [
      "Flotará porque su densidad es menor que la del agua.",
      "Se hundirá porque su densidad es mayor que la del agua.",
      "Se disolverá inmediatamente.",
      "No se puede calcular su densidad con esos datos.",
    ],
    answer: 1,
    explanation:
      "La densidad del objeto es 120 ÷ 40 = 3 g/cm³. Como es mayor que 1 g/cm³, la densidad del agua, es más probable que se hunda.",
  },
  {
    id: 16,
    module: "ciencias",
    title: "Cambios químicos",
    prompt:
      "¿Cuál de estas situaciones corresponde más claramente a un cambio químico?",
    options: [
      "El hielo se derrite.",
      "El agua se evapora.",
      "Un clavo de hierro se oxida y forma herrumbre.",
      "El azúcar se disuelve en agua.",
    ],
    answer: 2,
    explanation:
      "Al oxidarse el hierro se forma herrumbre, una sustancia nueva; por eso es un cambio químico.",
  },
  {
    id: 17,
    module: "ciencias",
    title: "Función de un nutriente",
    prompt:
      "El hierro forma parte de la hemoglobina de los glóbulos rojos. ¿Qué función se relaciona directamente con esa proteína?",
    options: [
      "Transportar oxígeno en la sangre.",
      "Digestionar las grasas en el estómago.",
      "Producir luz en las células.",
      "Filtrar la sangre en los pulmones.",
    ],
    answer: 0,
    explanation:
      "La hemoglobina de los glóbulos rojos se une al oxígeno y contribuye a transportarlo por la sangre.",
  },
  {
    id: 18,
    module: "ciencias",
    title: "Intercambio de gases",
    prompt:
      "En los pulmones, el oxígeno pasa desde los alvéolos hacia la sangre. ¿Qué ocurre principalmente con el dióxido de carbono durante el intercambio gaseoso?",
    options: [
      "Pasa de la sangre a los alvéolos para ser eliminado al exhalar.",
      "Pasa de los alvéolos a la sangre para formar alimentos.",
      "Se transforma en oxígeno dentro de los pulmones.",
      "Permanece siempre en la sangre y no se elimina.",
    ],
    answer: 0,
    explanation:
      "El dióxido de carbono difunde desde la sangre hacia los alvéolos y luego se elimina al exhalar.",
    image: "assets/exercises/ejercicio-18.webp",
    imageAlt: "Esquema opcional del intercambio de gases en los pulmones.",
  },
  {
    id: 19,
    module: "ciencias",
    type: "written",
    title: "Contaminación y organismos",
    prompt:
      "Un equipo desea estudiar si existe una relación entre la concentración de nitratos en el agua y la cantidad de algas en distintos lagos. Explica qué datos debería recoger y cómo podría compararlos.",
  },
  {
    id: 20,
    module: "ciencias",
    type: "written",
    title: "Resistencia a los antibióticos",
    prompt:
      "En una población de bacterias, algunas son resistentes a un antibiótico. Al usarlo, muchas bacterias no resistentes mueren, mientras que algunas resistentes sobreviven y se reproducen. Explica por qué con el tiempo podría aumentar la proporción de bacterias resistentes.",
  },
  {
    id: 21,
    module: "matematica",
    title: "Costo según la distancia",
    prompt:
      "Un taxi cobra $50 de tarifa inicial y $20 por kilómetro. El costo se calcula con y = 20x + 50, donde x es la distancia en kilómetros. ¿Cuánto cuesta un viaje de 6 km?",
    options: ["$120", "$150", "$170", "$300"],
    answer: 2,
    explanation: "Sustituimos x por 6: y = 20 × 6 + 50 = 120 + 50 = $170.",
  },
  {
    id: 22,
    module: "matematica",
    title: "Ecuación a partir de una gráfica",
    prompt:
      "Una recta pasa por los puntos (0, 4) y (3, 10). ¿Cuál ecuación podría representar la recta?",
    options: ["y = 2x + 4", "y = 3x + 4", "y = 2x + 10", "y = 4x + 2"],
    answer: 0,
    explanation:
      "La recta comienza en y = 4 cuando x = 0. Entre los puntos la pendiente es (10 − 4) ÷ (3 − 0) = 2, así que la ecuación es y = 2x + 4.",
    image: "assets/exercises/ejercicio-22.png",
    imageAlt: "Gráfica de una recta que pasa por los puntos (0, 4) y (3, 10).",
  },
  {
    id: 23,
    module: "matematica",
    title: "Evaluar una función",
    prompt:
      "La cantidad de agua de un tanque se estima con y = 3x + 15, donde x representa los minutos transcurridos. ¿Cuántos litros tendrá después de 8 minutos?",
    options: ["24 litros", "32 litros", "39 litros", "45 litros"],
    answer: 2,
    explanation: "Sustituimos x por 8: y = 3 × 8 + 15 = 24 + 15 = 39 litros.",
  },
  {
    id: 24,
    module: "matematica",
    title: "Identificar una relación lineal",
    prompt:
      "Una gráfica contiene los puntos (0, 2), (1, 5) y (2, 8). ¿Qué ecuación representa la relación entre x e y?",
    options: ["y = 2x + 3", "y = 3x + 2", "y = 5x + 2", "y = 3x + 5"],
    answer: 1,
    explanation:
      "Cuando x aumenta una unidad, y aumenta 3 unidades. Además, cuando x = 0, y = 2. Entonces la ecuación es y = 3x + 2.",
    image: "assets/exercises/ejercicio-24.png",
    imageAlt: "Gráfica lineal que pasa por los puntos (0, 2), (1, 5) y (2, 8).",
  },
  {
    id: 25,
    module: "matematica",
    title: "Punto de encuentro de dos gráficas",
    prompt:
      "Dos servicios tienen costos representados por estas ecuaciones: Servicio A: y = 10x + 40; Servicio B: y = 16x + 4. ¿Para cuántos kilómetros cuestan lo mismo?",
    options: ["4 km", "5 km", "6 km", "8 km"],
    answer: 2,
    explanation:
      "Igualamos los costos: 10x + 40 = 16x + 4. Al resolver, 36 = 6x, por lo que x = 6 km. En ese punto ambos cuestan $100.",
    image: "assets/exercises/ejercicio-25.png",
    imageAlt:
      "Gráfica de los costos de los servicios A y B según los kilómetros recorridos.",
  },
  {
    id: 26,
    module: "matematica",
    title: "Área expresada con x",
    prompt:
      "Un rectángulo tiene un ancho de x metros y un largo de (x + 3) metros. Si su área es 40 m², ¿cuánto mide el ancho?",
    options: ["4 m", "5 m", "8 m", "10 m"],
    answer: 1,
    explanation:
      "Probamos x = 5: el largo es 8 m y el área es 5 × 8 = 40 m². La otra raíz de la ecuación es negativa y no puede representar una longitud.",
  },
  {
    id: 27,
    module: "matematica",
    title: "Proporcionalidad inversa",
    prompt:
      "Cuatro personas tardan 6 horas en completar un trabajo. Si ocho personas trabajan al mismo ritmo, ¿cuánto tardarían?",
    options: ["2 horas", "3 horas", "6 horas", "12 horas"],
    answer: 1,
    explanation:
      "El trabajo requiere 4 × 6 = 24 persona-horas. Con 8 personas: 24 ÷ 8 = 3 horas.",
  },
  {
    id: 28,
    module: "matematica",
    title: "Interpretar una gráfica de distancia",
    prompt:
      "Una gráfica de distancia recorrida muestra estos datos: 0 h → 0 km; 1 h → 12 km; 2 h → 24 km; 3 h → 36 km. Si el ritmo se mantiene, ¿cuántos kilómetros habrá recorrido en 5 horas?",
    options: ["48 km", "50 km", "60 km", "72 km"],
    answer: 2,
    explanation:
      "La distancia aumenta 12 km por hora. En 5 horas recorrerá 12 × 5 = 60 km.",
    image: "assets/exercises/ejercicio-28.png",
    imageAlt:
      "Gráfica de distancia recorrida por un ciclista durante las primeras tres horas.",
  },
  {
    id: 29,
    module: "matematica",
    title: "Calcular un descuento",
    prompt:
      "Una campera cuesta $1800 y tiene un descuento del 25 %. ¿Cuál es el precio final?",
    options: ["$450", "$1350", "$1450", "$1775"],
    answer: 1,
    explanation:
      "El 25 % de $1800 es $450. Restamos el descuento: 1800 − 450 = $1350.",
  },
  {
    id: 30,
    module: "matematica",
    title: "Probabilidad de una ficha",
    prompt:
      "En una caja hay 5 bolillas amarillas y 3 verdes. Se extrae una al azar. ¿Cuál es la probabilidad de que sea verde?",
    options: ["3/8", "5/8", "1/3", "3/5"],
    answer: 0,
    explanation:
      "Hay 8 bolillas en total y 3 son verdes. La probabilidad es 3/8.",
  },
  {
    id: 31,
    module: "ciencias",
    title: "Leer una gráfica de crecimiento",
    prompt:
      "La altura de una planta se registró durante cuatro semanas: semana 1 → 4 cm; semana 2 → 7 cm; semana 3 → 10 cm; semana 4 → 13 cm. ¿Cuánto aumentó su altura entre la primera y la cuarta semana?",
    options: ["3 cm", "7 cm", "9 cm", "13 cm"],
    answer: 2,
    explanation: "Restamos la altura inicial a la final: 13 − 4 = 9 cm.",
    image: "assets/exercises/ejercicio-31.png",
    imageAlt: "Gráfica de la altura de una planta durante cuatro semanas.",
  },
  {
    id: 32,
    module: "ciencias",
    title: "Temperatura y dioxígeno disuelto",
    prompt:
      "Una gráfica muestra que, al aumentar la temperatura del agua, disminuye la cantidad de dioxígeno que puede permanecer disuelto. ¿Qué conclusión coincide con esa tendencia?",
    options: [
      "El agua caliente puede contener más dioxígeno.",
      "El agua fría puede contener más dioxígeno.",
      "La temperatura no se relaciona con el dioxígeno.",
      "El dioxígeno aumenta siempre con la temperatura.",
    ],
    answer: 1,
    explanation:
      "La gráfica muestra una relación inversa: al aumentar la temperatura, disminuye la cantidad de dioxígeno que puede disolverse.",
    image: "assets/exercises/ejercicio-32.png",
    imageAlt:
      "Esquema cualitativo de la disminución del dioxígeno disuelto al aumentar la temperatura.",
  },
  {
    id: 33,
    module: "ciencias",
    title: "Variable de una investigación",
    prompt:
      "Se quiere investigar si la cantidad de luz influye en el crecimiento de una planta. ¿Qué variable debería modificarse intencionalmente?",
    options: [
      "La cantidad de luz recibida.",
      "El tipo de planta y la cantidad de luz al mismo tiempo.",
      "La altura final de la planta.",
      "El tamaño de la maceta en cada prueba.",
    ],
    answer: 0,
    explanation:
      "La cantidad de luz es la variable independiente: es la que se cambia para observar si produce variaciones en el crecimiento.",
  },
  {
    id: 34,
    module: "ciencias",
    title: "Cambios en una cadena alimentaria",
    prompt:
      "En una laguna, los peces pequeños comen larvas y los peces grandes comen peces pequeños. Si disminuye mucho la cantidad de peces pequeños, ¿qué efecto podría ocurrir inicialmente?",
    options: [
      "Podrían aumentar las larvas y disminuir los peces grandes.",
      "Podrían disminuir las larvas y aumentar los peces grandes.",
      "Las larvas dejarían de alimentarse.",
      "No podría cambiar ninguna otra población.",
    ],
    answer: 0,
    explanation:
      "Con menos peces pequeños, habría menos depredadores de larvas y menos alimento disponible para los peces grandes.",
  },
  {
    id: 35,
    module: "ciencias",
    title: "Calcular densidad",
    prompt:
      "Un objeto tiene una masa de 90 g y ocupa un volumen de 30 cm³. ¿Cuál es su densidad?",
    options: ["0,3 g/cm³", "3 g/cm³", "30 g/cm³", "60 g/cm³"],
    answer: 1,
    explanation:
      "La densidad se calcula dividiendo masa entre volumen: 90 ÷ 30 = 3 g/cm³.",
  },
  {
    id: 36,
    module: "ciencias",
    title: "Reconocer un cambio físico",
    prompt: "¿Cuál de estas situaciones corresponde a un cambio físico?",
    options: [
      "La madera se quema.",
      "Una manzana se descompone.",
      "El hielo se derrite.",
      "Un clavo se oxida.",
    ],
    answer: 2,
    explanation:
      "Cuando el hielo se derrite cambia de estado, pero sigue siendo agua. No se forma una sustancia nueva.",
  },
  {
    id: 37,
    module: "ciencias",
    title: "Luz y producción de burbujas",
    prompt:
      "Una planta acuática produjo 4 burbujas por minuto con iluminación baja, 9 con iluminación media y 15 con iluminación alta. ¿Qué muestran esos resultados?",
    options: [
      "Con más iluminación se observaron más burbujas por minuto.",
      "La iluminación alta produjo menos burbujas.",
      "La cantidad de burbujas fue igual en todas las condiciones.",
      "No se registró la producción de burbujas.",
    ],
    answer: 0,
    explanation:
      "Los datos aumentan de 4 a 9 y luego a 15 burbujas por minuto a medida que aumenta la iluminación.",
  },
  {
    id: 38,
    module: "ciencias",
    title: "Pulso y actividad física",
    prompt:
      "Se midió el pulso de una persona antes y después de correr: antes, 72 pulsaciones por minuto; después, 118. ¿Cuál fue el cambio registrado?",
    options: [
      "Disminuyó 46 pulsaciones por minuto.",
      "Aumentó 46 pulsaciones por minuto.",
      "Aumentó 118 pulsaciones por minuto.",
      "Se mantuvo igual.",
    ],
    answer: 1,
    explanation:
      "Calculamos la diferencia: 118 − 72 = 46. El pulso aumentó 46 pulsaciones por minuto.",
  },
  {
    id: 39,
    module: "ciencias",
    title: "Dilución de una solución",
    prompt:
      "Se agrega agua a una solución con sal, sin añadir ni quitar sal. ¿Qué ocurre con la concentración de sal?",
    options: [
      "Aumenta porque hay más agua.",
      "Disminuye porque la misma cantidad de sal queda distribuida en más agua.",
      "Se duplica la cantidad de sal.",
      "La sal desaparece.",
    ],
    answer: 1,
    explanation:
      "La cantidad de sal permanece igual, pero aumenta el volumen de agua. Por eso la solución queda más diluida y su concentración disminuye.",
  },
  {
    id: 40,
    module: "ciencias",
    title: "Investigar fertilizantes y algas",
    prompt:
      "Un equipo quiere estudiar si existe una relación entre la cantidad de fertilizante usada en distintos jardines y el crecimiento de algas en estanques cercanos. ¿Qué estrategia ofrece mejores datos para analizar esa relación?",
    options: [
      "Medir el uso de fertilizante y la cantidad de algas en varios sitios y comparar los resultados.",
      "Observar un solo estanque sin registrar el uso de fertilizante.",
      "Agregar fertilizante a un sitio y no medir cambios en las algas.",
      "Contar las plantas de un jardín y medir la temperatura de otro.",
    ],
    answer: 0,
    explanation:
      "Para analizar si existe una relación, se deben registrar ambas variables en varios sitios comparables y contrastar los datos. Una relación observada no demuestra por sí sola que una variable cause la otra.",
  },
];
