const fs = require("fs").promises

function log(productName) {
    const dateAndTime = new Date
    const fullMessage = (`Se añadío el prodcuto ${productName} en la fecha: ${dateAndTime} \n`)

    fs.appendFile ("../ejercicio-3/registro.log", fullMessage, (err)=>{
        if(err){
            console.log(`Error al registrar producto: ${err}`)
            return
        }
        console.log(`Se añadió el prducto ${productName} al registro`)
    })
}

async function readLog(){
    try{
        const data = await fs.readFile("../ejercicio-3/registro.log", "utf8")
        return data

    } catch (err){
        if (err.code === "ENOENT") {
            return ("No se pudo cargar el archivo registro.log")
        }
        throw (err)
        
    }
        
            // console.log(data)
            // console.log(typeof(data)) //mostramos el archivo
}

module.exports = {
    log: log,
    readLog:readLog
}