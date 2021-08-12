import { Link } from 'react-router-dom';

import '../styles/header.scss';

import searchIcon from '../assets/images/search-icon.png';
import shoppingCart from '../assets/images/shopping-cart.png';

export function Header() {

    return (
        <>
            <header className="header">
                <div className="container">
                    <Link className="header__logo col-md-6" to="/"><h1>Logo</h1></Link>
                    <ul className="header__menu col-md-6">
                        <li><Link to="/detalhesDaConta">Entrar</Link></li>
                        <li><Link to="/cadastroCliente">Cadastre-se</Link></li>
                        <li>
                            <Link>
                                <div className="shoppingCart">
                                    <div>2</div>
                                    <img src={shoppingCart} alt="" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <div className="searchBar">
                <div className="container">
                    <div className="searchBar__search col-md-8">
                        <input type="text" className="searchBar__search__input" />
                        <button className="searchBar__search__button"><img src={searchIcon} alt="" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}