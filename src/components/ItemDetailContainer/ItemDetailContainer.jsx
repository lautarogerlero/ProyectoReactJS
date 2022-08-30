import "./ItemDetailContainer.css";
import React, { useEffect, useState } from "react";
import { obtenerProducto } from "../../data/productos";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const obtenerProductosAsync = async() => {
            try {
                const productoTraido = await obtenerProducto(1);
                setProducto(productoTraido);
            } catch (error) {
                console.log("Error al obtener los productos");
            }
        }
        obtenerProductosAsync();
    }, [])

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={producto}/> 
        </div>
    )

}