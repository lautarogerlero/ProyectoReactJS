import React from "react";
import "./Item.css"

export const Item = ({producto}) => {

    const {title, image} = producto
    return (
        <div className="item" key={title}>
            <img src={image} alt={title} className="itemImg"/>
            <p>{title}</p>
            <button>Ver info</button>
        </div>
    )
}