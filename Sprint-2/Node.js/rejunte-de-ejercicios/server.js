const http = require("http")
const resgitered = require("../ejercicio-3/moduloLogger").readLog
const { main } = require("./index")

let products

async function initServer() {
    try {
        products = await main()

        if (!products) {
            console.log("Error no se pudo cargar el catalogo")
        }

        const server = http.createServer( async (req, res) => {
        if (req.url === "/") {
            res.writeHead(200, {
                "content-type": "text/html"
            })
            res.write("<h1>Bienvenido a mi servidor</h1> <p>Este es un rejunte de todos los ejercicios usando Node.js<p>")

            res.end()

        } else if (req.url === "/catalogo") {
            res.writeHead(200, {
                "content-type": "text/html"
            })

            let contentHTMLProducts = `<main> <ul>`

            for (const p of products) {
                
                contentHTMLProducts += `<li> ID:${p.id}| Nombre: ${p.nombreProducto} | ${p.stock} </li>`
            }
            contentHTMLProducts += "</ul> </main>"
            res.end(contentHTMLProducts)

        } else if (req.url === "/registros") {
            res.writeHead(200, {
                "content-type": "text/html"
            })

            const productResgitered = await resgitered()
            const contentHTMLLog = `<main> ${productResgitered} </main>`

            res.end(contentHTMLLog)
        } else {
            res.writeHead(404, {
                "content-type": "text/html"
            })

            res.end("<h1>Página no encontrada</h1>")
            return
        }
        })

        const PORT = 3000

        server.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        })

    } catch (error) {
        console.log("Error al iniciar el servidor: ", error)
    }
}

initServer()






