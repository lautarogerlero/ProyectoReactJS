import "./ItemDetail.css";
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemDetail = ({item}) => {

    const agregarProducto = (contador) => {
        console.log(`Agregado/s ${contador} producto/s`)
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