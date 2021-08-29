import { useState } from 'react';
import { Link } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { HeaderMenu } from './HeaderMenu';
import { SearhBar } from './SearchBar';

import '../styles/header.scss';

export function Header() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    return (
        <>
            <header className="header">
                <div className="container">
                    <Link className="header__logo col-md-6" to="/"><img src={require("../assets/images/icone_elivros.png")} alt="" /></Link>
                    <HeaderMenu openLoginForm={()=>setShowLoginForm(!showLoginForm)}></HeaderMenu>
                </div>
            </header>
            <SearhBar />

            {showLoginForm ? <LoginForm setShowLoginForm={setShowLoginForm} /> : null}

        </>
    );
}