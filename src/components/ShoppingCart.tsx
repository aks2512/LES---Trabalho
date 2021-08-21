import { Link } from 'react-router-dom';

import shoppingCart from '../assets/images/shopping-cart.png';

import '../styles/shoppingCart.scss';

export function ShoppingCart() {
    return (
        <Link to="/#">
            <div className="shoppingCart">
                <div>2</div>
                <img src={shoppingCart} alt="" />
            </div>
        </Link>
    );
}