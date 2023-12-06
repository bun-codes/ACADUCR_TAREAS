//* EJERCICIO #2
/*
Una tienda de pantalones tiene en promoción sus productos. Por eso, se requiere realizar una disminución en el precio de los artículos que vende, según la siguiente tabla de precios:

• De 10000 a 20000 colones = 5%
• De 20001 a 30000 colones = 10%
• De 30001 en adelante = 15%

Cree un script que solicite el precio del pantalón y muestre el nuevo precio con el descuento.

Utilice algún Statement o Loop de los vistos en clase p ara hacer un inventario de cuantos descuentos de cada rango han sido aplicados.
*/

//* CÓDIGO
// Función para calcular el descuento y mostrar el nuevo precio
// Definir la función para aplicar descuento
function aplicarDescuento(tipoProducto, precio) {
    let descuento;

    // Determinar el descuento según la tabla de precios
    if (precio >= 10000 && precio <= 20000) {
        descuento = 0.05; // 5%
    } else if (precio > 20000 && precio <= 30000) {
        descuento = 0.1; // 10%
    } else if (precio > 30000) {
        descuento = 0.15; // 15%
    } else {
        descuento = 0; // Sin descuento
    }

    // Calcular el nuevo precio con descuento
    let nuevoPrecio = precio - precio * descuento;

    // Mostrar el nuevo precio con descuento
    console.log(`Tipo de producto: ${tipoProducto}`);
    console.log(`Precio original: ₡${precio}`);
    console.log(`Descuento aplicado: ${descuento * 100}%`);
    console.log(`Nuevo precio con descuento: ₡${nuevoPrecio.toFixed(2)}`);

    // Actualizar el inventario de descuentos
    actualizarInventarioDescuentos(descuento);
}

// Objeto para almacenar el inventario de descuentos
let inventarioDescuentos = {
    rango1: 0, // De 10000 a 20000 colones
    rango2: 0, // De 20001 a 30000 colones
    rango3: 0  // De 30001 en adelante
};

// Función para actualizar el inventario de descuentos
function actualizarInventarioDescuentos(descuento) {
    if (descuento === 0.05) {
        inventarioDescuentos.rango1++;
    } else if (descuento === 0.1) {
        inventarioDescuentos.rango2++;
    } else if (descuento === 0.15) {
        inventarioDescuentos.rango3++;
    }

    // Mostrar el inventario actualizado
    console.log("Inventario de descuentos aplicados:");
    console.log(`Rango 1 (5%): ${inventarioDescuentos.rango1}`);
    console.log(`Rango 2 (10%): ${inventarioDescuentos.rango2}`);
    console.log(`Rango 3 (15%): ${inventarioDescuentos.rango3}`);
}

// Solicitar el tipo de producto al usuario
let tipoProducto = prompt("Ingrese el tipo de producto (jeans, pantalones o faldas):");

// Verificar si el tipo de producto ingresado es válido
if (tipoProducto === "jeans" || tipoProducto === "pantalones" || tipoProducto === "faldas") {
    // Solicitar el precio del producto al usuario
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto en colones:"));

    // Verificar si el usuario ingresó un número válido
    if (!isNaN(precioProducto) && precioProducto >= 0) {
        // Aplicar descuento y mostrar resultados
        aplicarDescuento(tipoProducto, precioProducto);
    } else {
        console.log("Por favor, ingrese un precio válido.");
    }
} else {
    console.log("Tipo de producto no válido. Por favor, ingrese jeans, pantalones o faldas.");
}

//* EJECUTAR:
/*
Al abrir el documento HTML en un navegador, se solicitarán el producto a elegir de entre los disponibles de la tienda, y su precio unitario original (sin descuento aplicado). POR EJEMPLO: si se colocan los siguientes valores respectivamente;

Faldas
32000

Al abrir la consola, se visualizaría la imagen adjunta en la carpeta Resultados - Ejercicio 2.
*/