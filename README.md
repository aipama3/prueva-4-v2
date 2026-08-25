# WEB DE PSICOLOGÍA · DISEÑO DINÁMICO

Esta versión está inspirada directamente en la estética de la referencia:
- editorial
- beige / crema
- verde salvia
- terracota
- formas orgánicas
- fotografías con máscaras curvas
- tarjetas horizontales
- bloques asimétricos
- mucho movimiento al hacer scroll

## Archivos

index.html
style.css
script.js

## Cómo abrirla

Puedes abrir `index.html` directamente en el navegador.

Para subirla a GitHub:
1. Crea un repositorio.
2. Sube los tres archivos.
3. En Settings > Pages, selecciona la rama `main`.
4. Publica desde la raíz.

## Dónde cambiar las fotos

En `index.html` busca cada etiqueta `<img>`.

Ahora utiliza fotografías de ejemplo de Unsplash. Puedes reemplazar:

src="https://..."

por:

src="assets/mi-foto.jpg"

y subir la fotografía a la carpeta `assets`.

## Qué puedes cambiar

Busca en el HTML textos entre corchetes:

[TU NOMBRE]
[TU ESPECIALIDAD]
[AÑADE AQUÍ...]
[UNIVERSIDAD]
[CIUDAD · CONSULTA]
[XXXXX]

Puedes modificar todo el texto sin tocar el CSS.

## Servicios

La sección de servicios utiliza tarjetas horizontales con scroll.

Para añadir otra:
- copia un `<article class="service-card">...</article>`
- pega debajo de otra tarjeta
- cambia título, número, texto y diseño.

## Colores

En `style.css`, al principio:

--cream
--cream-2
--sage
--sage-dark
--terracotta
--brown
--brown-dark

Puedes cambiar esos valores para hacer la web más rosa, más beige,
más verde, más oscura, etc.

## Formulario

El formulario actualmente muestra un mensaje de demostración.
No almacena ni envía datos.

Para una web real de psicología debes conectarlo a un sistema de
formularios o backend y revisar:
- privacidad
- consentimiento
- protección de datos
- aviso legal
- cookies, si corresponden
- información profesional y colegiación.

## Importante

Los testimonios deben publicarse únicamente de manera compatible con
tus obligaciones profesionales y con el consentimiento correspondiente.

Las fotografías de pacientes/clientes no deben publicarse sin las
autorizaciones adecuadas.

## Responsive

La web tiene breakpoints para:
- ordenador
- tablet
- móvil

En móvil:
- aparece menú hamburguesa
- las tarjetas se convierten en carruseles horizontales
- las columnas pasan a una sola columna
- se reducen tamaños tipográficos
- las imágenes conservan las formas orgánicas


## Cambios de esta versión
- 01 ahora es una sección de bienvenida/explicación de qué es la terapia, con preguntas que puedes personalizar.
- 02 es Servicios. Las tarjetas ya no se deslizan horizontalmente: se muestran en una cuadrícula y se adaptan al ancho de pantalla.
- 03 es Sobre mí.
- Se han eliminado las secciones independientes de Mi enfoque y Formación.


Actualización v3: la página sigue el orden 01 Qué es la terapia → 02 Servicios → 03 Sobre mí. Los servicios están en una cuadrícula de 3 + 2 tarjetas en escritorio, sin desplazamiento horizontal.
