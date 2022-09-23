import "./Formulario.css";
import { React, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import Swal from "sweetalert2";

export const Formulario = () => {
    const {listaCarrito, getPrecioTotal} = useContext(CartContext);

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
        addDoc(queryRef, order)
        .then(respuesta => {      
            Swal.fire({
                title: `Thank you ${order.buyer.name}`,
                text: `This is your order's id ${respuesta.id}`,
                icon: "success",
                confirmButtonText: 'Ok'
            }).then(() => window.location.href = "/")
        })
    }

    return (
        <form onSubmit={enviarPedido}>
            <input type="text" placeholder="Nombre" required/>
            <input type="text" placeholder="Telefono" required/>
            <input type="email" placeholder="Email" required/>
            <button type="submit">Listo</button>
        </form>
    )
}