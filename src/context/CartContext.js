import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {
    const [listaCarrito , setListaCarrito] = useState([]);

    const isInCart = (idProducto) => {
        const pertenece = listaCarrito.find(item => item.id === idProducto); 
        
        return pertenece
    }

    const addProduct = (product, contador) => {
        const pertenece = isInCart(product.id);
        if (pertenece) {
            const index = listaCarrito.findIndex((item => item.id === product.id));
            const cantidadActual = listaCarrito[index].quantity;
            listaCarrito[index].quantity = cantidadActual + contador;    
            listaCarrito[index].totalPrice = (cantidadActual + contador) * listaCarrito[index].price;      
        }
        else {
            
            const nuevaLista = [...listaCarrito, product];
            setListaCarrito(nuevaLista);
        }
    }

    const removeProduct = (idProduct) => {
        const copiaLista = [...listaCarrito];
        const nuevaLista = copiaLista.filter(item => item.id !== idProduct);
        setListaCarrito(nuevaLista);
    }

    const clear = () => {
        const listaVacia = [];
        setListaCarrito(listaVacia);
    }

    const getTotalProductos = () => {
        const total = listaCarrito.reduce((acc, item) => acc + item.quantity, 0);
        return total;
    }

    return (
        <CartContext.Provider value={{listaCarrito, addProduct, removeProduct, clear, getTotalProductos}}>
            {children}
        </CartContext.Provider>
    )
}