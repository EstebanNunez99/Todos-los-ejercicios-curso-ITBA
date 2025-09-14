
function estaDisponible(producto){
    return (producto.stock) // devuelve verdadero o falso
}

function obtenerInfo(producto){
    return {    //retorna un objeto
        "id": producto.id,
        "nombre": producto.nombreProducto, 
        "stock": producto.stock
    }
    
}

module.exports = {
    estaDisponible: estaDisponible,
    obtenerInfo: obtenerInfo
}