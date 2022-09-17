import "./ItemListContainer.css";
import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList.jsx/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../utils/firebase";

export const ItemListContainer = ({greeting}) => {

    const {tipoProducto} = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async() => {
            try {
                let queryRef = !tipoProducto ? collection(db, "items") : query(collection(db, "items"), where("category","==",tipoProducto));
                const response = await getDocs(queryRef);
                const datos = response.docs.map(doc => {
                    const newDoc = {
                        ...doc.data(),
                        id: doc.id
                    }
                    return newDoc;
                });
                setProductos(datos);                                        
            } 
            catch (error) {
                console.log("Error al obtener los productos");
            }
        }
        obtenerProductos();
    }, [tipoProducto])


    return(
        <div className="itemContainer">
            <h2>{greeting}</h2>
            <ItemList productos={productos}/>
        </div>
        
    )
}
