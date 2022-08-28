import { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import { obtenerProductos } from "../../data/productos";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {

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

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={productos[0]}/>
        </div>
    )

}