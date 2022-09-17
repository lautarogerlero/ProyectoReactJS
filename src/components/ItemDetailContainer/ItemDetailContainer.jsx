import "./ItemDetailContainer.css";
import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";


export const ItemDetailContainer = () => {

    const {id} = useParams();

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const queryRef = doc(db, "items", id);
        getDoc(queryRef).then(response=>{
            const newDoc = {
                ...response.data(),
                id: response.id
            }
            setProducto(newDoc)
        }).catch(error => console.log(error))
    }, [id])

    return (
        <div className="itemDetailContainer">
            <ItemDetail item={producto}/> 
        </div>
    )

}