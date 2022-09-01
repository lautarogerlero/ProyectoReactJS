import React, { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";



export const ItemList = ({productos}) => {

    return (
        <div className="itemList">
            {
                productos.map((producto) => {
                    return (
                        <Item key={producto.id} producto={producto}/>
                    )
                })
            }
        </div>
    )
}