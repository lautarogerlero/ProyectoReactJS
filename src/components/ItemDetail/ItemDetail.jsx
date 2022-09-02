import "./ItemDetail.css";
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from "react";


export const ItemDetail = ({item}) => {

    const [value, setValue] = useState(0);
    const agregarProducto = (contador) => {
        console.log(`Agregado/s ${contador} producto/s`)
        setValue(contador)
        }

    const {title, image, description, price} = item;
    return (
        <div className="itemDetail">
            <img src={image} alt={title} />
            <div className="itemDetaiDescription">
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>${price}</h4>
                <ItemCount stock={8} initial={0} onAdd={agregarProducto}></ItemCount>
            </div>
        </div>
    )   
}