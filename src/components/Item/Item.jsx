import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({producto}) => {

    const {title, image, id, price} = producto
    return (
        <div className="item" key={title}>
            <img src={image} alt={title} className="itemImg"/>
            <h4>{title}</h4>
            <h4>${price}</h4>
            <Link to={`/item/${id}`}>
                <button className="verInfo">Ver Más</button>
            </Link>
        </div>
    )
}