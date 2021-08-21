import { useState } from "react";

import '../styles/loginForm.scss';

import useAuth from '../hooks/useAuth';

type loginFormProps = {
    setShowLoginForm:Function,
}

export function LoginForm(props:loginFormProps) {
    const {handleLogin} = useAuth();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // function closeLoginForm() {
    //     props.setShowLoginForm(false);
    // }

    return (
        <div className="login__form" >
            <div className="boxMessage">
               <h1>Entre com a sua conta</h1>
               <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={event => setSenha(event.target.value)}
                        value={senha}
                    />
                    <button type="submit" className="button" >Entrar</button>
               </form>
            </div>
        </div>
    );
}