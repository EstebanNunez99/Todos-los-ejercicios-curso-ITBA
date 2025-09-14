// Ejercicio 5: Mi Primer Servidor de "Mueblería Jota"
// Tiempo de resolución estimado: 35 minutos

// Objetivo: Utilizar el módulo http para crear un servidor web básico y nodemon con un script de NPM para mejorar el flujo de desarrollo.

// Tareas:

// Usando el proyecto del ejercicio anterior, instala nodemon como una dependencia de desarrollo: npm install nodemon -D.
// En tu package.json, modifica la sección de "scripts" para añadir un script "dev" que ejecute nodemon server.js.
// Creá un archivo server.js.
// Dentro de server.js, usa el módulo http para crear un servidor que escuche en el puerto 5000.
// Configurá el servidor para que responda a diferentes rutas (req.url):
// Si la ruta es /, debe responder con un <h1>Bienvenido al servidor de Mueblería Jota</h1>.
// Si la ruta es /productos, debe responder con un <h2>Nuestro catálogo de productos</h2>.
// Si la ruta es /contacto, debe responder con un <p>Contáctanos al 555-1234</p>.
// Para cualquier otra ruta, debe responder con un código de estado 404 y el mensaje "Página no encontrada".
// Ejecutá tu servidor usando el nuevo script: npm run dev.
// Abrí tu navegador y prueba las tres rutas (http://localhost:5000, http://localhost:5000/productos, etc.) para verificar que tu servidor responde correctamente.
// Mientras el servidor corre, haz un cambio en el archivo server.js y guárdalo. ¡Observa cómo nodemon reinicia el servidor por ti!

const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){

        res.writeHead(200, {"content-type": "text/html"});
        res.end("<h1>Bienvenido al servidor de Mueblería Jota</h1>");

    } else if (req.url === "/productos") {

        res.writeHead(200, {"content-type": "text/html"});
        res.end("<h2>Bienvenido a nuestro catálogo</h2>");

    } else if (req.url === "/contacto") {

        res.writeHead(200, {"content-type": "text/html"});
        res.end("<p>Contactanos al 0800-555-1234</p>")

    } else {
        // en el caso de que haya un error
        res.writeHead(404, {"content-type": "text/plain"})
        res.end("Página no encontrada")
        return
    }
})

const PORT = 5000

server.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT} `)
})
