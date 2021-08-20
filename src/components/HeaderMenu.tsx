import { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../styles/headerMenu.scss';

import { Context } from '../contexts/AuthContext';

import { ShoppingCart } from './ShoppingCart';

type headerMenuProps = {
    openLoginForm: Function;
}

export function HeaderMenu(props:headerMenuProps) {

    const { user, authenticated, handleLogin, handleLogout} = useContext(Context);

    return (
        <ul className="header__menu col-md-6">
            {!authenticated && (
                <>
                    <li><button type="button" onClick={() => props.openLoginForm(true)} >Entrar</button></li>
                    <li><Link to="/cadastroCliente">Cadastre-se</Link></li>
                </>
            )}
            {authenticated && (
                <>
                    <li><Link to="/detalhesDaConta">Olá {user}</Link></li>
                    <li><Link to="/#">Ver pedidos</Link></li>
                    <li><button type="button" onClick={() => handleLogout()}>Log out</button></li>
                </>
            )}
            <li>
                <ShoppingCart/>
            </li>
        </ul>
    );
}