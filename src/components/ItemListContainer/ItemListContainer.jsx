import "./ItemListContainer.css";
import { ItemCount } from '../ItemCount/ItemCount';
import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList.jsx/ItemList";
import { obtenerProductos } from "../../data/productos";


export const ItemListContainer = ({greeting}) => {

    const agregarProducto = (contador) => {
    console.log(`Agregado/s ${contador} producto/s`)
    }

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductosAsync = async() => {
            try {
                const listado = await obtenerProductos();
                setProductos(listado);
            } catch (error) {
                console.log("Error al obtener los productos");
            }
        }
        obtenerProductosAsync();
    }, [])




    return(
        <div className="itemContainer">
            <h2>{greeting}</h2>
            <ItemCount stock={8} initial={0} onAdd={agregarProducto}></ItemCount>
            <ItemList productos={productos}/>
        </div>
        
    )
}
