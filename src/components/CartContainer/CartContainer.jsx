import { React, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css"


export const CartContainer = () => {
    const {listaCarrito, removeProduct, clear} = useContext(CartContext);
    return (
        <div className="carrito">
            <div className="tituloCarrito">
                <h1>Carrito</h1>
                <button onClick={()=>clear()} className="vaciarCarrito">Vaciar Carrito</button>
            </div>
            
            {
                listaCarrito.map(item => (
                    <div key={item.id} className="productoCarrito">
                        <img src={item.image} alt={item.title} className="imagenCarrito"/>
                        <div>
                            <h4>{item.title}</h4>
                            <h4>${item.price}</h4>
                            <p>Cantidad: {item.quantity}</p>
                        </div>
                        <button onClick={()=>removeProduct(item.id)} className="botonRemover">x</button>
                    </div>
                ))
            }

        </div>
    )
    
}