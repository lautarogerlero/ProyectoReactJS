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
            const nuevaLista = [...listaCarrito];
            const cantidadActual = listaCarrito[index].quantity;
            nuevaLista[index].quantity = cantidadActual + contador;    
            nuevaLista[index].totalPrice = (cantidadActual + contador) * listaCarrito[index].price; 
            setListaCarrito(nuevaLista);     
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

    const getPrecioTotal = () => {
        const precioTotal = listaCarrito.reduce((acc, item) => acc + item.totalPrice, 0);
        return precioTotal;
    }

    return (
        <CartContext.Provider value={{listaCarrito, addProduct, removeProduct, clear, getTotalProductos, getPrecioTotal}}>
            {children}
        </CartContext.Provider>
    )
}