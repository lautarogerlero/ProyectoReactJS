import "./ItemListContainer.css";

function ItemListContainer({greeting}) {
    return(
        <div className="itemContainer">
            <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer;