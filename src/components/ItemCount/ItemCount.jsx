import { useState } from "react";

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial);

    const handlerClickRestar = () => {
        if(count > 1){
            setCount(count - 1)
        };
    };

    const handlerClickSumar = () => {
        if(count < stock){
            setCount(count + 1);
        };
    };

    const addToCart = () => {      
        onAdd(count);
    };

    return (
        <div>
            <button onClick={handlerClickRestar}>-</button>
            <span>{count}</span>
            <button onClick={handlerClickSumar}>+</button>
            <button disabled={stock === 0} onClick={addToCart}>
                <span>{stock === 0 ? 'No tenemos stock' : 'Agregar al carrito'}</span>
            </button>
        </div>
    );
};

export default ItemCount;