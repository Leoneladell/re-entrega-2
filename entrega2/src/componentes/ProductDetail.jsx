import React, {useState} from "react"

function ProductDetail({vela}){
    const [carrito, setCarrito]=useState([])

    const agregarAlCarrito=()=>{
        setCarrito([...carrito, vela])
        console.log("se agrego el producto correctamente")
    }

    return (
        <div>
        <h2>{vela}</h2>
        <p>Detalles del producto</p>
        <button onClick={agregarAlCarrito}>Agregar</button>
        </div>
    )
}

export default ProductDetail