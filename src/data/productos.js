import camisetaTitular from "../assets/camisetaTitular.jpg";
import buzo1 from "../assets/buzo1.jpg";
import pantalon1 from "../assets/pantalon1.jpg";


const listaProductos = [
    {
        id: 1,
        category: "Camisetas",
        title: "Camiseta Titular 2022",
        price: 8000,
        image: camisetaTitular,
        description: "Camiseta azul y roja modelo 2022"
    },
    {
        id: 2,
        category: "Buzos",
        title: "Buzo Nike 2022",
        price: 9500,
        image: buzo1,
        description: "Buzo azul con detalles rojos modelo 2022"
    },
    {
        id: 3,
        category: "Pantalones",
        title: "Pantalón deportivo 2022",
        price: 8900,
        image: pantalon1,
        description: "Pantalón deportivo azul con detalles rojos modelo 2022"
    }
]

export const obtenerProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(listaProductos)
        }, 2000);
    })
}
