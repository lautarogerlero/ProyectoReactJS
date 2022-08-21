import "./ItemListContainer.css";
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';



function ItemListContainer({greeting}) {

    const agregarProducto = (contador) => {
    console.log(`Agregado/s ${contador} producto/s`)
    }


    return(
        <div className="itemContainer">
            <h2>{greeting}</h2>
            <ItemCount stock={8} initial={0} onAdd={agregarProducto}></ItemCount>
        </div>
        
    )
}

export default ItemListContainer;