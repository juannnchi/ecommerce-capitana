import React from "react";
import './Item.css';
import {Link} from 'react-router-dom'

function Item({ producto }){
    return(
        <div className="card__container">
            <img className="card__image" src={producto.img} alt={producto.nombre} />
            <h3 className="card__title">{producto.nombre}</h3>
            <span className="card__price">${producto.precio}</span>
            <button>
            <Link to={`/detalle/${producto.id}`}>Ver Más</Link>
            </button>
        </div>
    );
};

export default Item;
