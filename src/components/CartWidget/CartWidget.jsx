import "./CartWidget.css";
import carrito from "../../images/carrito2.png"

function CartWidget({numeroCarrito}) {
    return (
        <div className="containerCarrito">
            <img src={carrito} alt="Carrito de Compras"/>
            <p>{numeroCarrito}</p>
        </div>
    )
}

export default CartWidget;