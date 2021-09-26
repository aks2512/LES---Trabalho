import { FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Context } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";

import '../styles/loginFormCarrinho.scss';

export function AutenticacaoCarrinho() {
    const {handleLogin, authenticated} = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const { carrinhoItens } = useContext(CartContext);

    async function formSubmit(e:FormEvent) {
        e.preventDefault();
        await handleLogin(email, password);

        if(authenticated) {
            history.push('/selecaoDeEndereco');
        } else {
            history.push('/cadastroCliente');
        }
    }

    return (
        <>
            <Header numberOfItens={carrinhoItens.length} />
            <div className="login__form__carrinho" >
                <div className="boxMessage">
                    <h1>Entre com a sua conta</h1>
                    <form onSubmit={e => formSubmit(e)}>
                            <input
                                type="email"
                                placeholder="Email"
                                onChange={event => setEmail(event.target.value)}
                                value={email}
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                onChange={event => setPassword(event.target.value)}
                                value={password}
                            />
                            <button type="submit" className="button" >Entrar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}