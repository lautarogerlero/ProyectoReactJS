import './App.css';
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Este es el contenedor de productos"/>}/>
            {/* <Route path="/productos" element={<ItemListContainer greeting="Este es el contenedor de productos"/>}/> */}
            <Route path="/productos/:tipoProducto" element={<ItemListContainer greeting="Este es el contenedor de productos"/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="*" element={<ItemListContainer greeting="Este es el contenedor de productos"/>}/>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
