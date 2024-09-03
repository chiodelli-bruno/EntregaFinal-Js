# El Ático - Simulador de Tienda Online

## Descripción del Proyecto

**El Ático** es un simulador de tienda online que permite a los usuarios agregar productos a un carrito de compras y simular el proceso de compra. El proyecto está enfocado en demostrar la lógica de negocio de un e-commerce simple, donde se maneja la selección de productos, el cálculo del total de la compra y la confirmación del pedido.

## Características

- **Carga Dinámica de Productos:** Los productos disponibles se cargan desde un archivo JSON utilizando JavaScript y se muestran dinámicamente en la interfaz.
- **Carrito de Compras:** Los usuarios pueden agregar productos al carrito y ver una lista actualizada de los productos seleccionados.
- **Simulación de Pago:** Al finalizar la compra, se simula el proceso de pago con un mensaje de confirmación automatizado.
- **Interfaz Dinámica:** Toda la interfaz se genera dinámicamente con JavaScript, utilizando Template Strings y el DOM para crear los elementos HTML.
- **Manejo de Errores:** La aplicación incluye un manejo básico de errores mediante `try-catch` y muestra mensajes amigables para el usuario utilizando la librería **SweetAlert2**.
- **Sin Formularios Manuales:** No es necesario que el usuario complete formularios para registrarse, loguearse o realizar el pago. Todos los datos están pre-cargados para simplificar la experiencia.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

- **index.html:** Contiene la estructura básica de la página.
- **styles.css:** Archivo CSS para el diseño y estilo de la página.
- **script.js:** Lógica principal de la aplicación, incluyendo la carga de productos, manejo del carrito y simulación de pago.
- **productos.json:** Archivo JSON que contiene la lista de productos disponibles en la tienda.
- **carrito.json:** Archivo JSON simulado para el almacenamiento del carrito de compras (aunque en la práctica se utiliza `localStorage`).
- **README.md:** Guía de uso y descripción del proyecto.

## Guía de Uso

1. **Abrir el Proyecto:** Abre el proyecto en un servidor local (por ejemplo, con Live Server en VS Code).
2. **Navegar por la Tienda:** La página principal muestra los productos disponibles en la tienda. Cada producto tiene un botón para agregarlo al carrito.
3. **Agregar Productos al Carrito:** Haz clic en "Agregar al carrito" para añadir productos al carrito de compras. La lista de productos seleccionados se actualiza automáticamente.
4. **Ver el Carrito:** Puedes ver el carrito de compras en cualquier momento para revisar los productos seleccionados y el total acumulado.
5. **Simular Pago:** Haz clic en "Procesar Pago" para simular el pago. Se mostrará un mensaje de confirmación indicando que la compra ha sido exitosa.
6. **Manejo de Errores:** Si ocurre algún error durante el uso de la aplicación, se mostrará un mensaje amigable al usuario sin afectar la experiencia general.

## Tecnologías Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **SweetAlert2:** Librería para mostrar alertas y mensajes de confirmación.

## Requisitos

- **Servidor Local:** Para ejecutar correctamente el proyecto, se recomienda utilizar un servidor local como Live Server o http-server.

## Notas Importantes

- El simulador está diseñado para funcionar de manera simple y directa, sin formularios adicionales ni procesos complejos de registro o autenticación.
- La lógica del simulador se centra en la carga dinámica de productos, la gestión del carrito y la simulación de un proceso de compra.

## Conclusión

Este proyecto es una demostración simple pero completa de una tienda online. Está diseñado para enfocarse en la lógica de negocio y la interacción del usuario, sin complicaciones innecesarias como registros o formularios de pago complejos.
