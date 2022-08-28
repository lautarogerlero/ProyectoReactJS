import "./ItemDetail.css";


export const ItemDetail = ({item}) => {

    const {title, image, description, price} = item;
    return (
        <div className="itemDetail">
            <img src={image} alt={title} />
            <div className="itemDetaiDescription">
                <h3>{title}</h3>
                <p>{description}</p>
                <h4>${price}</h4>
            </div>
        </div>
    )   
}