// Ejercicio 2: Módulo de Utilidades para Productos
// Tiempo de resolución estimado: 25 minutos

const { estaDisponible } = require("./productoUtils");

// Objetivo: Practicar la creación y el uso de módulos personalizados para organizar el código.

// Tareas:

// Crea un archivo llamado productoUtils.js. Este será tu módulo.
// Dentro de productoUtils.js, crea una función llamada estaDisponible(producto). Esta función recibirá un objeto de producto (ej: { nombre: 'Silla', stock: 5 }) y devolverá true si el stock es mayor a 0, y false en caso contrario.
// En el mismo archivo, crea otra función llamada obtenerInfo(producto) que devuelva un string formateado con la información del producto, por ejemplo: Producto: Silla de Pino - Stock: 10 unidades..
// Usa module.exports para exportar ambas funciones.
// Crea un archivo principal app.js.
// En app.js, importa tu módulo productoUtils.js usando require.
// Crea dos objetos de producto de prueba, uno con stock y otro sin stock.
// Llama a las funciones de tu módulo con los productos de prueba y muestra los resultados en la consola.

const infoProducto = require("./productoUtils")

const producto1 = {
    "nombre": "Silla",
    "stock": 5
}
const producto2 = {
    "nombre": "Mesa",
    "stock": 0
}

console.log(infoProducto.obtenerInfo(producto1))
// console.log(infoProducto.estaDisponible(producto1)) // deberia de devolver true

console.log(infoProducto.obtenerInfo(producto2))
// console.log(infoProducto.estaDisponible(producto2)) // deberia de devolver false