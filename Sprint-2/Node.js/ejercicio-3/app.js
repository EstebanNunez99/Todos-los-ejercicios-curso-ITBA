// Ejercicio 3: Registro de Eventos del Sistema
// Tiempo de resolución estimado: 30 minutos

// Objetivo: Combinar el uso de módulos (fs y personalizados) para una tarea de escritura de archivos.

// Tareas:

// Creá un módulo llamado logger.js.
// Dentro de logger.js, crea una función log(mensaje).
// Esta función debe tomar un mensaje (string), añadirle la fecha y hora actual al principio, y un salto de línea (\n) al final.
// Luego, debe usar fs.appendFile() para añadir esa línea al final de un archivo llamado sistema.log. appendFile es ideal porque no sobreescribe el contenido anterior.
// Exportá la función log.
// En tu archivo principal app.js, importa tu módulo logger.
// Llamá a la función log varias veces con diferentes mensajes, como: log('Se inició el proceso de inventario.'), log('Se detectó un producto sin stock.'), etc.
// Ejecutá el script node app.js varias veces. Verifica que el archivo sistema.log se cree y que cada ejecución añada nuevas líneas al final del archivo sin borrar las anteriores.

const logi = require("./logger")
// const logi2 = require(".moduloLogger/")

console.log(logi.log("Mensaje de exitosasdafdfaf esta es la cuarta vez que ejecuto el codigo"))
console.log(logi.log("esta es la cuarta vez que ejecuto el codigoe exitosasdafdfaf"))
console.log(logi.log("esta es la cuarta vez que ejecuto el codigo"))
console.log(logi.log("Mensaje desta es la cuarta vez que ejecuto el codigoe exitosasdafdfaf"))
console.log(logi.log("pMensaje de eesta es la cuarta vez que ejecuto el codigoxitosasdafdfaf5"))
console.log(logi.log("prodMensaje de esta es la cuarta vez que ejecuto el codigoexitosasdafdfaf 6"))





