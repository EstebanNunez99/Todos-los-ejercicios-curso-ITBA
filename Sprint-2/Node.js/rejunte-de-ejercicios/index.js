const { moduloLeerInventario } = require("../ejercicio-1/moduloLeerInventario")
const  moduloProductoUtils  = require("../ejercicio-2/moduloProductosUtils")
const  moduloLogger  = require("../ejercicio-3/moduloLogger")
const chalk = require("chalk").default
const fs = require("fs")

let datosInventario
let datosInventarioEnObjeto ={}

// moduloLeerInventario((err, data )=>{
    
//     if (err){
//         console.log("Error al leer los datos: ", err)
//         return
//     } else {

//         datosInventario = data; 
//         console.log("Los datos guardados son: \n", datosInventario)
//         //acá se puede usar porque ya termino la promesa en (1) no porque no termino todavia
//         //y va a dar undefined, es porque se ejecuta (1) antes que la promesa
//     }

// })

// console.log("Este es del tipo: ", typeof(datosInventario)) //esto es (1) va a dar undefined poruqe datosInventario no tiene nada cargado todavia
// console.log(datosInventario) // esto es (1) tambien

function fromTextToJson() {
    datosInventarioEnObjeto = JSON.parse(datosInventario);
    console.log(chalk.green("Se convirtió correctamente a JSON"))
    // console.log(datosInventarioEnObjeto)
    // console.log(typeof(datosInventarioEnObjeto))
}

function productDescription(products) {
    for (const p of products) {
        const id = moduloProductoUtils.obtenerInfo(p).id
        const nombreProducto = moduloProductoUtils.obtenerInfo(p).nombre
        const stock = moduloProductoUtils.obtenerInfo(p).stock
        // console.log(typeof(nombreProducto))
        console.log(`Producto nro: ${id} | Nombre: ${nombreProducto} | Disponible: ${stock}` )
    }
}

function addProductToRegistry(products){ // esto se puede hacer a la vez en productDescription asi no volvemos a iterar, pero para que quede mas claro lo hago separado
    for (const p of products) { 
    const nombreProducto = moduloProductoUtils.obtenerInfo(p).nombre
    moduloLogger.log(nombreProducto)
    }
    moduloLogger.readLog()
}


async function main() {
    try {
        datosInventario = await moduloLeerInventario();
        // console.log("datos cargados: ", datosInventario)
        // console.log(typeof(datosInventario))
        // aca ya se puede usar los datosInventario
        //si quiero hacer otra cosa con eso, tengo que definir aca dentro del try
        // textToJson()
        
        fromTextToJson() //esto deberia de converir en json el string de datosInventario
        productDescription(datosInventarioEnObjeto)
        addProductToRegistry(datosInventarioEnObjeto)

        return(datosInventarioEnObjeto)

    } catch (err){
        console.log("Error: ", err)
    }

    //acá tambien puedo usar los datosInventario pero se tiene que llamar dentro del try{}
}

// main() // con esto cargo los datos y despues lo convierto a json ya
// console.log(datosInventarioEnObjeto) // esto deberia tener cargado datos ya -> no lo hace


module.exports = {
    main:main
}








