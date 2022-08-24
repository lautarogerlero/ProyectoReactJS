import React from "react";
import "./Item.css"

export const Item = (producto) => {

    return (
        <div className="item">
            <img src={producto.producto.image} alt={producto.producto.title} className="itemImg"/>
            <p>{producto.producto.title}</p>
            <button>Ver info</button>
        </div>
    )
}