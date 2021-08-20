import { useState } from 'react';
import { Link } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { HeaderMenu } from './HeaderMenu';
import { SearhBar } from './SearchBar';

import '../styles/header.scss';

export function Header() {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const openLoginForm = () => {
        setShowLoginForm(true);
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <Link className="header__logo col-md-6" to="/"><h1>Logo</h1></Link>
                    <HeaderMenu openLoginForm={openLoginForm}></HeaderMenu>
                </div>
            </header>
            <SearhBar />

            {showLoginForm ? <LoginForm setShowLoginForm={setShowLoginForm} /> : null}

        </>
    );
}