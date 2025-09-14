// Ejercicio 1: Lector de Inventario
// Tiempo de resolución estimado: 20 minutos

// Objetivo: Practicar el uso del módulo nativo fs para leer un archivo de forma asíncrona.

// Tareas:

// En una nueva carpeta de proyecto, crea un archivo llamado inventario.txt.
// Dentro de inventario.txt, escribe una lista simple de muebles, cada uno en una nueva línea. Por ejemplo: Silla de Comedor - 15 unidades
// Mesa de Roble - 5 unidades
// Sofá de 3 Cuerpos - 0 unidades
 
// Crea un archivo JavaScript llamado leerInventario.js.
// Dentro de leerInventario.js, usa el módulo fs para leer el archivo inventario.txt de forma asíncrona (fs.readFile).
// Implementa la función de callback:
// Si ocurre un error (ej: el archivo no existe), debe mostrar un mensaje de error en la consola.
// Si la lectura es exitosa, debe imprimir en la consola el contenido completo del archivo.
// 4.Ejecuta tu script desde la terminal con node leerInventario.js.

const {error} = require("console")
const fs = require("fs")

fs.readFile("inventario.txt", "utf8", (err, data)=>{
    if (err) {
        console.error("Error al leer el archivo: ", err);
        return
    }
    console.log(data)
    console.log(typeof(data)) //mostramos el archivo
}) 


