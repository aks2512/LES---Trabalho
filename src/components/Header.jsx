import '../styles/header.scss';

import searchIcon from '../assets/images/search-icon.png';

import shoppingCart from '../assets/images/shopping-cart.png';

export function Header() {
    return (
        <>
            <header className="header">
                <div className="container">
                    <h1 className="header__logo col-md-6">Logo</h1>
                    <ul className="header__menu col-md-6">
                        <li><a href="">Entrar</a></li>
                        <li><a href="">Cadastre-se</a></li>
                        <li>
                            <a href="">
                                <div className="shoppingCart">
                                    <div>2</div>
                                    <img src={shoppingCart} alt="" />
                                </div>
                            </a>
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
    )
}