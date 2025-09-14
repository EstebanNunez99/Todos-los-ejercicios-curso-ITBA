function estaDisponible(producto){// recibe un objeto
    return (producto.stock > 0)
}


function obtenerInfo(producto){
    const nombreProduto = producto.nombre;
    const stockProdcuto = producto.stock;
    // return {"nombre":nombreProduto, 
    //          "stock":stockProdcuto} // retorna un objeto
    return (`Producto: ${nombreProduto} - Stock: ${stockProdcuto}`)
    
}

module.exports = {
    estaDisponible: estaDisponible,
    obtenerInfo: obtenerInfo,
}