//* EJERCICIO #1
/*
Escriba un programa que permita leer:

-Nombre del producto
-Cantidad comprada
-Precio

Calcule el total a pagar. Total=Precio*cantidad. Muestre el total junto con el precio del producto. Utilice algun Statement o Loop de los vistos en clase para hacer un inventario de cuantos productos de cada tipo han sido vendidos.
*/

//* CÓDIGO

// Definir una función para leer la información del producto
function leerInformacionProducto() {
    let nombre = prompt("Ingrese el nombre del producto:");
    let cantidad = parseInt(prompt("Ingrese la cantidad comprada:"));
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    // Calcular el total a pagar
    let total = precio * cantidad;

    // Mostrar el total junto con el precio del producto
    console.log(`Producto: ${nombre}`);
    console.log(`Precio por unidad: $${precio}`);
    console.log(`Cantidad comprada: ${cantidad}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);

    // Actualizar el inventario
    actualizarInventario(nombre, cantidad);
}

// Definir un objeto para almacenar el inventario de productos
let inventario = {};

// Definir una función para actualizar el inventario
function actualizarInventario(nombre, cantidad) {
    // Verificar si el producto ya está en el inventario
    if (inventario.hasOwnProperty(nombre)) {
        inventario[nombre] += cantidad; // Actualizar la cantidad existente
    } else {
        inventario[nombre] = cantidad; // Agregar el producto al inventario
    }

    // Mostrar el inventario actualizado
    console.log("Inventario actualizado:");
    for (let producto in inventario) {
        console.log(`${producto}: ${inventario[producto]}`);
    }
}

// Ejecutar la función para leer la información del producto
leerInformacionProducto();

//* EJECUTAR:
/*
Al abrir el documento HTML en un navegador, se solicitarán el nombre del producto, la cantidad adquirida de dicho producto y su precio unitario. POR EJEMPLO: si se colocan los siguientes valores respectivamente;

Blusa
3
40000

Al abrir la consola, se visualizaría la imagen adjunta en la carpeta Resultados - Ejercicio 1.
*/