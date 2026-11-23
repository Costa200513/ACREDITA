# Práctica Acredita: Matemática y Ciencias

Sitio estático sencillo, listo para publicar en GitHub Pages. No requiere instalar dependencias ni usar servidor.

## Publicar en GitHub Pages

1. Descomprime el ZIP y sube todo el contenido de esta carpeta a un repositorio de GitHub.
2. En el repositorio, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama principal (`main`) y la carpeta raíz (`/root`), y guarda.
5. Espera a que GitHub Pages publique el sitio. La página de ejercicios estará en `index.html`.

## Archivos principales

- `index.html`: selector principal de módulos.
- `matematica.html` y `ciencias.html`: presentan un ejercicio por pantalla, con opciones para responder o saltar.
- `control.html`: resumen de correctas, incorrectas y pendientes.
- `questions.js`: preguntas, opciones, respuestas correctas y explicaciones.
- `module.js`, `home.js` y `control.js`: interacción, selección de módulos y seguimiento.
- `styles.css`: estilos responsivos.
- `assets/exercises/`: imágenes opcionales de los ejercicios 5, 12 y 18.

## Agregar las imágenes

Coloca las imágenes en `assets/exercises/` con estos nombres exactos para que aparezcan automáticamente:

- `ejercicio-05.png` — tendencia de usuarios del ejercicio 5.
- `ejercicio-12.png` — gráfica o tabla visual del ejercicio 12.
- `ejercicio-18.png` — esquema del ejercicio 18.

Se aceptan otros formatos: cambia también el nombre del archivo en `questions.js` si usas `.jpg` o `.webp`. Si una imagen todavía no está en la carpeta, el ejercicio se muestra normalmente sin dejar un espacio roto.

## Seguimiento

El avance se guarda en `localStorage` del navegador y dispositivo que se usó para responder. No se envía a un servidor; por eso, otro dispositivo o navegador tendrá un progreso separado. La página de control permite consultar y borrar ese avance. Las preguntas saltadas aparecen como pendientes.

## Modificar preguntas

Edita `questions.js`. Las preguntas de opción múltiple tienen cuatro opciones y el campo `answer` usa índices desde cero: `0` para A, `1` para B, `2` para C y `3` para D. Las preguntas con `type: 'written'` permiten guardar una respuesta abierta sin calificarla automáticamente. La devolución explicativa de las preguntas con opciones está en `explanation`.
