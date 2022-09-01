import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList.jsx/ItemList";
import { obtenerProductos } from "../../data/productos";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({greeting}) => {

    const {tipoProducto} = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductosAsync = async() => {
            try {
                const listado = await obtenerProductos();
                if (!tipoProducto){
                    setProductos(listado)
                }
                else {
                    const nuevaLista = listado.filter(producto => producto.category === tipoProducto)
                    setProductos(nuevaLista);
                }
                
            } catch (error) {
                console.log("Error al obtener los productos");
            }
        }
        obtenerProductosAsync();
    }, [tipoProducto])




    return(
        <div className="itemContainer">
            <h2>{greeting}</h2>
            <ItemList productos={productos}/>
        </div>
        
    )
}
