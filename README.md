# Práctica Acredita: Matemática y Ciencias

Sitio estático con 40 preguntas (20 por módulo), listo para publicar en GitHub Pages. Incluye tres ejercicios de escritura libre en Ciencias. No requiere instalar dependencias ni usar servidor.

## Publicar en GitHub Pages

1. Descomprime el ZIP y sube todo el contenido de esta carpeta a un repositorio de GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama principal (`main`) y la carpeta raíz (`/root`), y guarda.
5. Espera a que GitHub Pages publique el sitio. La página de ejercicios estará en `index.html`.

## Archivos principales

- `index.html`: selector principal de módulos.
- `matematica.html` y `ciencias.html`: presentan un ejercicio por pantalla, con opciones para responder o saltar.
- `escritura.html`: permite elegir entre los dos ejemplos de escritura.
- `escritura-ia.html` y `escritura-compras.html`: muestran por separado la consigna original, el texto modelo y las explicaciones desplegables.
- `escritura.js`: controla los diálogos explicativos de los modelos de escritura.
- `control.html`: resumen de correctas, incorrectas y pendientes.
- `questions.js`: preguntas, opciones, respuestas correctas y explicaciones.
- `module.js`, `home.js` y `control.js`: interacción, selección de módulos y seguimiento.
- `styles.css`: estilos responsivos.
- `assets/exercises/`: imágenes opcionales de los ejercicios 5, 12, 18, 22, 24, 25, 28, 31 y 32.

## Agregar las imágenes

Coloca las imágenes en `assets/exercises/` con estos nombres exactos para que aparezcan automáticamente:

- `ejercicio-05.png` — tendencia de usuarios del ejercicio 5.
- `ejercicio-12.png` — gráfica o tabla visual del ejercicio 12.
- `ejercicio-18.png` — esquema del ejercicio 18.
- `ejercicio-22.png` — gráfica de la recta y sus dos puntos.
- `ejercicio-24.png` — gráfica lineal con tres puntos.
- `ejercicio-25.png` — gráficas de costos de los dos servicios.
- `ejercicio-28.png` — gráfica de tiempo y distancia del ciclista.
- `ejercicio-31.png` — gráfica de crecimiento de la planta.
- `ejercicio-32.png` — esquema cualitativo de temperatura y dioxígeno.
- `consigna-escritura-ia.png` — consigna visual del ejemplo de inteligencia artificial.
- `consigna-escritura-compras.png` — consigna visual del ejemplo de compras internacionales.

Se aceptan otros formatos: cambia también el nombre del archivo en `questions.js` si usas `.jpg` o `.webp`. Si una imagen todavía no está en la carpeta, el ejercicio se muestra normalmente sin dejar un espacio roto.

## Seguimiento

El avance se guarda en `localStorage` del navegador y dispositivo que se usó para responder. No se envía a un servidor; por eso, otro dispositivo o navegador tendrá un progreso separado. La página de control permite consultar y borrar ese avance. Las preguntas saltadas aparecen como pendientes.

## Modificar preguntas

Edita `questions.js`. Las preguntas de opción múltiple tienen cuatro opciones y el campo `answer` usa índices desde cero: `0` para A, `1` para B, `2` para C y `3` para D. Las preguntas con `type: 'written'` permiten guardar una respuesta abierta sin calificarla automáticamente. La devolución explicativa de las preguntas con opciones está en `explanation`.
