import camisetaTitular from "../assets/camisetaTitular.jpg";
import buzo1 from "../assets/buzo1.jpg";
import pantalon1 from "../assets/pantalon1.jpg";
import gorra1 from "../assets/gorra1.jpg";
import gorra2 from "../assets/gorra2.jpg";
import piluso1 from "../assets/piluso1.jpg";
import piluso2 from "../assets/piluso2.jpg";
import camisetaAlternativa from "../assets/camisetaAlternativa.jpg";
import buzo2 from "../assets/buzo2.jpg";
import buzo3 from "../assets/buzo3.jpg";
import pantalon2 from "../assets/pantalon2.jpg";
import camisetaRetro from "../assets/camisetaRetro1.jpg";




const listaProductos = [
    {
        id: 1, category: "camisetas", title: "Camiseta Titular 2022", price: 8000, image: camisetaTitular, description: "Camiseta azul y roja modelo 2022"
    },
    {
        id: 2, category: "buzos", title: "Buzo Nike Azul", price: 8900, image: buzo1, description: "Buzo azul con detalles rojos modelo 2022"
    },
    {
        id: 3, category: "pantalones", title: "Pantalón Negro Deportivo", price: 7300, image: pantalon1, description: "Pantalón deportivo negro con detalles rojos modelo 2022"
    },
    {
        id: 4, category: "accesorios", title: "Gorra Azul", price: 2400, image: gorra1, description: "Gorra azul con detalles rojos modelo 2022"
    },
    {
        id: 5, category: "accesorios", title: "Gorra Negra", price: 3000, image: gorra2, description: "Gorra negra con detalles dorados modelo 2022"
    },
    {
        id: 6, category: "accesorios", title: "Piluso Negro", price: 2200, image: piluso1, description: "Piluso negro con escudo blanco modelo 2022"
    },
    {
        id: 7, category: "accesorios", title: "Piluso Azul", price: 2200, image: piluso2, description: "Piluso azul con escudo modelo 2022"
    },
    {
        id: 8, category: "camisetas", title: "Camiseta Alternativa 2022", price: 8000, image: camisetaAlternativa, description: "Camiseta blanca con detalles azules y rojos modelo 2022"
    },
    {
        id: 9, category: "buzos", title: "Buzo Blanco", price: 8900, image: buzo2, description: "Buzo blanco con detalles rojos modelo 2022"
    },
    {
        id: 10, category: "buzos", title: "Buzo Negro y Blanco", price: 9100, image: buzo3, description: "Buzo negro y blanco con escudo modelo 2022"
    },
    {
        id: 11, category: "pantalones", title: "Pantalón Azul Deportivo", price: 7300, image: pantalon2, description: "Pantalón deportivo azul con detalles rojos modelo 2022"
    },
    {
        id: 12, category: "camisetas", title: "Camiseta Retro Azul y Roja", price: 6800, image: camisetaRetro, description: "Camiseta retro titular temporada 1974"
    },

]

export const obtenerProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(listaProductos)
        }, 2000);
    })
}

export const obtenerProducto = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const idNumber = Number(id)
            let producto = listaProductos.filter(producto => producto.id === idNumber)
            resolve(producto[0])
        }, 2000);
    })
}


