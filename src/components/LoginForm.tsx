//Dependências
import { useState, FormEvent, useContext } from "react";
import { Context } from '../contexts/AuthContext'

//CSS/SCSS
import '../styles/loginForm.scss';
import { Modal } from "./Modal";

type loginFormProps = {
    setShowLoginForm:Function,
}

export function LoginForm(props:loginFormProps) {
    const {handleLogin} = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState('');

    async function formSubmit(e:FormEvent) {
        e.preventDefault();
        console.log('teste')
        let response = await handleLogin(email, password);
        if(response === true) {
            setMessage('Login efetuado com sucesso');
        } else {
            setMessage('Email ou Senha invalidos');
        }
        setShowModal(true);
    }

    function loginFormClose() {
        props.setShowLoginForm(false);
    }

    function closeModal() {
        setShowModal(false);
        props.setShowLoginForm(false);
    }

    return (
        <div className="login__form" >
            <div className="boxMessage">
            <div onClick={() => loginFormClose()} className="close"></div>
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
            {showModal ? 
                <Modal 
                    message={message}
                    setShowModal={closeModal}
                /> 
            : null}
        </div>
    );
}