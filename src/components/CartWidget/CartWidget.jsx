import "./CartWidget.css";
import carrito from "../../images/carrito2.png"

function CartWidget() {
    return (
        <div className="containerCarrito">
            <img src={carrito} alt="Carrito de Compras"/>
            <p>3</p>
        </div>
    )
}

export default CartWidget;