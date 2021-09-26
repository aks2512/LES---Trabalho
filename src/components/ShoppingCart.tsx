import { Link } from 'react-router-dom';

import shoppingCart from '../assets/images/shopping-cart.png';

import '../styles/shoppingCart.scss';

type shoppingCartProps = {
    numberOfItens?: number,
}

export function ShoppingCart(props:shoppingCartProps) {
    return (
        <Link to="/carrinhoDeCompras">
            <div className="shoppingCart">
                <div>{(props.numberOfItens) ? props.numberOfItens : 0}</div>
                <img src={shoppingCart} alt="" />
            </div>
        </Link>
    );
}