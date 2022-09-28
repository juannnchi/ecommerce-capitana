import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function CartWidget() {
    return (
        <ShoppingCartOutlinedIcon style={style.carrito} color="primary" fontSize="large"/>
    );
};

export default CartWidget;

const style = {
    carrito:{
        cursor: 'Pointer',
    }
}