import React from "react";
import './Item.css';
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'

function Item({ producto }){
    return(
        <div className="card__container">
            <img className="card__image" src={producto.img} alt={producto.nombre} />
            <h3 className="card__title">{producto.nombre}</h3>
            <span className="card__price">${producto.precio}</span>
            <Button variant="contained">
            <Link to={`/detalle/${producto.id}`}>Ver Detalles</Link>
            </Button>
            
        </div>
    );
};

export default Item;
