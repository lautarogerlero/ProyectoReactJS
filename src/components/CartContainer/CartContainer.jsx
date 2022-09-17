import { React, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css";
import { Link } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";

export const CartContainer = () => {
    const {listaCarrito, removeProduct, clear, getPrecioTotal} = useContext(CartContext);
    const [idOrder, setIdOrder] = useState("");

    const enviarPedido = (e) => {
        e.preventDefault();
        const order = {
            buyer: {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            items: listaCarrito,
            date: new Date(),
            total: getPrecioTotal(),
        }
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(respuesta => setIdOrder(respuesta.id));
        console.log(idOrder);
        Swal.fire({
            title: `Thank you ${order.buyer.name}`,
            text: `This is your order's id ${idOrder}`,
            icon: "success",
            confirmButtonText: 'Ok'
        })
    }
    
    return (
        <>
        {
            listaCarrito.length > 0 ?
            <div className="carrito">
                <div className="tituloCarrito">
                    <h1>Carrito</h1>
                    <button onClick={()=>clear()} className="vaciarCarrito">Vaciar Carrito</button>
                
                </div>
            
            {
                listaCarrito.map(item => (
                    <div key={item.id} className="productoCarrito">
                        <img src={item.image} alt={item.title} className="imagenCarrito"/>
                        <div>
                            <h4>{item.title}</h4>
                            <p>Cantidad: {item.quantity}</p>
                            <h4>Precio total ${item.totalPrice}</h4>
                        </div>
                        <button onClick={()=>removeProduct(item.id)} className="botonRemover">x</button>
                    </div>
                ))
            }
                <p>Precio total: ${getPrecioTotal()}</p>
                
                <form onSubmit={enviarPedido}>
                    <input type="text" placeholder="Nombre" required/>
                    <input type="text" placeholder="Telefono" required/>
                    <input type="email" placeholder="Email" required/>
                    <button type="submit">Listo</button>
                </form>
            </div>
            :
            <div className="carritoVacio">   
                <h2>Carrito Vacío</h2>
                <Link to="/">
                    <button className="botonCarritoVacio">Volver al inicio</button>
                </Link>
            </div>
        }
        </>
    )
    
}