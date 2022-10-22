import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Badge} from '@mui/material'

function CartWidget() {
    return (
        <Badge badgeContent={5} color="primary">
        <ShoppingCartOutlinedIcon style={style.carrito} color="primary" fontSize="large"/>
        </Badge>
    );
};

export default CartWidget;

const style = {
    carrito:{
        cursor: 'Pointer',
    }
}