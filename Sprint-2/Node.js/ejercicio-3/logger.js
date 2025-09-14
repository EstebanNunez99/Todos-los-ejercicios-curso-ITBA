const error = require("console")
const fs = require("fs")

function log(mensaje){
    
    const fechaYHora = new Date
    const mensajeCompleto = `${fechaYHora}, mensaje: ${mensaje} \n `
    
    fs.appendFile("sistema.log", mensajeCompleto  , (err)=>{
        if (err){
            console.error("Error al modificar el archivo", err);
            return;
        }
        console.log("Agregado con exito")
        
    })
}

module.exports = {
    log: log
}