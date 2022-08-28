import "./CartWidget.css";
import carrito from "../../assets/carrito2.png"
import React from "react";

export const CartWidget = ({numeroCarrito}) => {
    return (
        <div className="containerCarrito">
            <img src={carrito} alt="Carrito de Compras"/>
            <p>{numeroCarrito}</p>
        </div>
    )
}
