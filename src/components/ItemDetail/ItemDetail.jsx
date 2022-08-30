import "./ItemDetail.css";


export const ItemDetail = ({item}) => {

    // const {title, image, description, price} = item;
    return (
        <div className="itemDetail">
            <img src={item.image} alt={item.title} />
            <div className="itemDetaiDescription">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h4>${item.price}</h4>
            </div>
        </div>
    )   
}