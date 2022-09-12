import { React, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css";
import { Link } from "react-router-dom";


export const CartContainer = () => {
    const {listaCarrito, removeProduct, clear} = useContext(CartContext);
    return (
        <>
        {
            listaCarrito.length > 0 ?
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
                            <p>Cantidad: {item.quantity}</p>
                            <h4>Precio total ${item.totalPrice}</h4>
                        </div>
                        <button onClick={()=>removeProduct(item.id)} className="botonRemover">x</button>
                    </div>
                ))
            }

            </div>
            :
            <div className="carritoVacio">   
                <h2>Carrito Vacío</h2>
                <Link to="/">
                    <button className="botonCarritoVacio">Volver al inicio</button>
                </Link>
            </div>
        }
        </>
    )
    
}