import React from "react";
import './Item.css';

function Item({ producto }){
    return(
        <div className="card__container">
            <img className="card__image" src={producto.img} alt={producto.nombre} />
            <h3 className="card__title">{producto.nombre}</h3>
            <span className="card__price">${producto.precio}</span>
        </div>
    );
};

export default Item;
