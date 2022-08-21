import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <ItemListContainer greeting="Este es el contenedor de productos"></ItemListContainer>
        
      </header>

    </div>
  );
}

export default App;
