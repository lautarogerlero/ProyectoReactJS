import "./CartWidget.css";
import carrito from "../../assets/carrito2.png"
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    
    const {getTotalProductos, listaCarrito} = useContext(CartContext);

    return (

        <>
            {
                listaCarrito.length > 0 &&
                <div className="containerCarrito">
                    <img src={carrito} alt="Carrito de Compras"/>
                    <p>{getTotalProductos()}</p>
                </div> 
                

            }
        </>
        
    )
}
