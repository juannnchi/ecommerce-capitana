import { useState } from "react";

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial);

    const subtrack = () => {
        if(count > 1){
            setCount(count - 1)
        };
    };

    const add = () => {
        if(count < stock){
            setCount(count + 1);
        };
    };

    const addToCart = () => {      
        onAdd(count);
    };

    return (
        <div>
            <button onClick={subtrack}>-</button>
            <span>{count}</span>
            <button onClick={add}>+</button>
            <button disabled={stock === 0} onClick={()=> onAdd(count)}>
                <span>{stock === 0 ? 'No tenemos stock' : 'Agregar al carrito'}</span>
            </button>
        </div>
    );
};

export default ItemCount;