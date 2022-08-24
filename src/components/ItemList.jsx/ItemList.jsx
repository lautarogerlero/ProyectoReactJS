import React, { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import remeraBlanca from "../../assets/remeraBlanca.jpg"
import "./ItemList.css"

const listaProductos = [
    {
        id: 1,
        description: "Remeras",
        title: "Remera Negra",
        price: 3500,
        image: remeraBlanca
    },
    {
        id: 2,
        description: "Buzos",
        title: "Buzo Blanco",
        price: 8100,
        image: remeraBlanca
    },
    {
        id: 3,
        description: "Buzos",
        title: "Buzo Negro",
        price: 8100,
        image: remeraBlanca
    },
]

export const ItemList = () => {

    const [productos, setProductos] = useState([]);

    const obtenerProductos = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(listaProductos)
            }, 2000);
        })
    }

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
        <div className="itemList">
            {
                productos.map((producto) => {
                    return (
                        <Item producto={producto}/>
                    )
                })
            }
        </div>
    )
}