// Ejercicio 4: Inicialización del Proyecto Backend
// Tiempo de resolución estimado: 20 minutos

// Objetivo: Practicar el flujo de trabajo de NPM para inicializar un proyecto e instalar un paquete externo.

// Tareas:

// Creá una nueva carpeta vacía para el backend del proyecto "Mueblería Jota".
// Abre la terminal dentro de esa carpeta y ejecuta npm init -y para crear un archivo package.json por defecto.
// Elige un paquete simple de NPM para instalar. Uno excelente para este ejercicio es chalk, que permite dar color al texto de la consola. Instálalo como una dependencia de producción: npm install chalk.
// Verificá que tu package.json se haya actualizado con la nueva dependencia y que se haya creado la carpeta node_modules.
// Creá un archivo index.js.
// Dentro de index.js, importa chalk usando require.
// Usá chalk para imprimir mensajes de diferentes colores en la consola. Por ejemplo:
// const chalk = require('chalk');
// console.log(chalk.blue('¡Bienvenido a Mueblería Jota!'));
// console.log(chalk.green.bold('Producto en oferta'));
// console.log(chalk.red('Error: Stock no disponible'));
// Ejecutá el script con node index.js y observa la magia de los colores en tu terminal.


const chalk = require("chalk").default;

console.log(chalk.blue("Bienvenido a muebleria"));
console.log(chalk.green.bold("Producto en oferta"));
console.log(chalk.red("Producto agotado"));
