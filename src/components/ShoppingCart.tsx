import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import shoppingCart from '../assets/images/shopping-cart.png';

import { CartContext } from '../contexts/CartContext';

import '../styles/shoppingCart.scss';

type shoppingCartProps = {
    numberOfItens?: number,
}

export function ShoppingCart(props:shoppingCartProps) {
    const { carrinhoItens } = useContext(CartContext);

    useEffect(() => {
        // props.numberOfItens = carrinhoItens.length;
        console.log(carrinhoItens.length);
        // console.log(props.numberOfItens);
    }, [carrinhoItens.length]);
    return (
        <Link to="/carrinhoDeCompras">
            <div className="shoppingCart">
                <div>{(props.numberOfItens) ? props.numberOfItens : 0}</div>
                <img src={shoppingCart} alt="" />
            </div>
        </Link>
    );
}