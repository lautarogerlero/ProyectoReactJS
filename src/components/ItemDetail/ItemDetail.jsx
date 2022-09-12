import "./ItemDetail.css";
import { ItemCount } from '../ItemCount/ItemCount';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({item}) => {

    const {addProduct} = useContext(CartContext);

    const agregarProducto = (contador) => {
        const nuevoProducto = {...item, quantity: contador, totalPrice: contador * item.price}; // Para agregarle un atributo al item
        addProduct(nuevoProducto, contador)
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