import "./ItemListContainer.css";
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';
import { ItemList } from "../ItemList.jsx/ItemList";



function ItemListContainer({greeting}) {

    const agregarProducto = (contador) => {
    console.log(`Agregado/s ${contador} producto/s`)
    }


    return(
        <div className="itemContainer">
            <h2>{greeting}</h2>
            <ItemCount stock={8} initial={0} onAdd={agregarProducto}></ItemCount>
            <ItemList/>
        </div>
        
    )
}

export default ItemListContainer;