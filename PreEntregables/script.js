document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    document.getElementById('cotizar-btn').addEventListener('click', cotizar);
    document.getElementById('recotizar-btn').addEventListener('click', recotizar);
    mostrarHistorialCotizaciones();
});

function cargarProductos() {
    fetch('productos.json')
        .then(response => response.json())
        .then(productos => {
            mostrarProductos(productos);
            localStorage.setItem('productos', JSON.stringify(productos)); // Guarda productos en localStorage
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error al cargar los productos. Inténtalo de nuevo más tarde.',
            });
            console.error("Error al cargar productos:", error);
        });
}

function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById('productos-container');
    contenedorProductos.innerHTML = '';

    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button class="seleccionar-producto-btn" data-id="${producto.id}">Seleccionar</button>
            </div>
        `;
        contenedorProductos.innerHTML += productoHTML;
    });

    const botonesSeleccionar = document.querySelectorAll('.seleccionar-producto-btn');
    botonesSeleccionar.forEach(boton => {
        boton.addEventListener('click', seleccionarProducto);
    });
}

function seleccionarProducto(event) {
    const idProducto = parseInt(event.target.getAttribute('data-id'));
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    const productoSeleccionado = productos.find(producto => producto.id === idProducto);

    if (productoSeleccionado) {
        let cotizacion = JSON.parse(localStorage.getItem('cotizacion')) || [];

        cotizacion.push(productoSeleccionado);
        localStorage.setItem('cotizacion', JSON.stringify(cotizacion));

        actualizarCotizacion();
        Swal.fire({
            icon: 'success',
            title: 'Producto seleccionado',
            text: `${productoSeleccionado.nombre} ha sido agregado a la cotización.`,
        });
    } else {
        console.error("Producto no encontrado:", idProducto);
    }
}

function actualizarCotizacion() {
    const cotizacion = JSON.parse(localStorage.getItem('cotizacion')) || [];
    const cotizacionLista = document.getElementById('cotizacion-lista');
    const totalCotizacion = document.getElementById('total-cotizacion');

    cotizacionLista.innerHTML = '';
    let total = 0;

    cotizacion.forEach(producto => {
        const productoEnCotizacion = document.createElement('li');
        productoEnCotizacion.textContent = `${producto.nombre} - $${producto.precio}`;
        cotizacionLista.appendChild(productoEnCotizacion);

        total += producto.precio;
    });

    totalCotizacion.textContent = `Total: $${total}`;
}

function cotizar() {
    const cotizacion = JSON.parse(localStorage.getItem('cotizacion')) || [];

    if (cotizacion.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Cotización vacía',
            text: 'No has seleccionado productos para cotizar.',
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: '¡Cotización realizada!',
        text: 'Tu cotización ha sido procesada con éxito.',
    });

    guardarHistorialCotizacion(cotizacion);
    localStorage.removeItem('cotizacion');
    actualizarCotizacion();
    mostrarHistorialCotizaciones();
}

function recotizar() {
    localStorage.removeItem('cotizacion');
    actualizarCotizacion();
}

function guardarHistorialCotizacion(cotizacion) {
    let historial = JSON.parse(localStorage.getItem('historialCotizaciones')) || [];
    historial.push({
        fecha: new Date().toLocaleString(),
        cotizacion: cotizacion
    });
    localStorage.setItem('historialCotizaciones', JSON.stringify(historial));
}

function mostrarHistorialCotizaciones() {
    const historial = JSON.parse(localStorage.getItem('historialCotizaciones')) || [];
    const historialLista = document.getElementById('historial-cotizaciones');

    historialLista.innerHTML = '';

    historial.forEach(entry => {
        const historialItem = document.createElement('li');
        historialItem.textContent = `${entry.fecha} - ${entry.cotizacion.length} productos cotizados`;
        historialLista.appendChild(historialItem);
    });
}

