import { useState } from 'react';
import { Link } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { HeaderMenu } from './HeaderMenu';
import { SearhBar } from './SearchBar';

import logo from "../assets/images/icone_elivros.png";

import '../styles/header.scss';

type headerType = {
    numberOfItens?: number,
}

export function Header(props:headerType) {
    const [showLoginForm, setShowLoginForm] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container">
                    <Link className="header__logo col-md-6" to="/"><img src={logo} width="183" height="50" alt="" /></Link>
                    <HeaderMenu 
                        numberOfItens={props.numberOfItens}
                        openLoginForm={()=>setShowLoginForm(!showLoginForm)}
                    />
                </div>
            </header>
            <SearhBar />

            {showLoginForm ? <LoginForm setShowLoginForm={setShowLoginForm} /> : null}

        </>
    );
}