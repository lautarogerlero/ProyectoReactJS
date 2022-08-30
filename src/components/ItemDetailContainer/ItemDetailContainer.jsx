import "./ItemDetailContainer.css";
import React, { useEffect, useState } from "react";
import { listaProductos } from "../../data/productos";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([]);

    const obtenerProductos = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(listaProductos)
            }, 2000);
        })
    }

    useEffect(() => {
        console.log("Executing useEffect")
        const obtenerProductosAsync = async() => {
            try {
                const listado = await obtenerProductos();
                setProductos(listado);
                console.log(listado)
            } catch (error) {
                console.log("Error al obtener los productos");
            }
        }
        obtenerProductosAsync();
        console.log(productos)
    }, [])

    return (
        <div className="itemDetailContainer">
            {/* <ItemDetail item={productos[0]}/>    */}
        </div>
    )

}