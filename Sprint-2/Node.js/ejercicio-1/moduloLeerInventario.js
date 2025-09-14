// const fs = require("fs");

// function moduloLeerInventario (callback){
//     fs.readFile("../ejercicio-1/inventarioEnObjetos.txt", "utf8", (err, data)=>{
//     if (err) {
//         console.error("Error al leer el archivo: ", err);
//         callback(err, null)
//         return
//     }
//     // console.log(data)
//     callback(null, data)
//     console.log(typeof(data))

// }) 
// }
// vamos a usar promesas

const fs = require("fs").promises

async function moduloLeerInventario() {
    try{
        const data = await fs.readFile("../ejercicio-1/inventarioEnObjetos.txt", "utf8")
        return data
    } catch (err) {
        throw err
    }
} 

module.exports = {
    moduloLeerInventario: moduloLeerInventario,
}
