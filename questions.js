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
];
