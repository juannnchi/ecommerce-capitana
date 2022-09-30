import Title from "../Title/Title";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer() {

    const mensaje= 'Envios a todo el país!'

    const onAdd = (count) => {
        console.log(`El usuario agregó ${count} productos al carrito`);
    }

    return (
        <>
        <Title greeting={mensaje}/>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;