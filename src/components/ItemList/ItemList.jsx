import Item from "../Item/Item";

function ItemList ({data = []}) {
    return (
        data.map(producto => <Item key={producto.id} producto={producto}></Item>)
    );
}

export default ItemList;