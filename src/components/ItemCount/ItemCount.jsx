import { useState } from "react"
import React from "react";
import { Link } from "react-router-dom";
import "./ItemCount.css"

export const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > initial){
            setContador(contador - 1)
        }
    }

    return (
        <div className="contador">
            <div className="botonesContador">
                <button className="botonContador" onClick={decrementar} disabled={contador === 0 ? true : false}>-</button>
                <p>{contador}</p>
                <button className="botonContador" onClick={incrementar} disabled={contador === stock ? true : false}>+</button>
            </div>
            <button className="botonAgregar" onClick={() => (onAdd(contador))} disabled={contador === 0 ? true : false}>Agregar al Carrito</button>
            {
                contador > 0 &&
                <Link to="/carrito">
                    <button className="terminarCompra">Ir al Carrito</button>
                </Link>
            }
            
        </div>
    )

}