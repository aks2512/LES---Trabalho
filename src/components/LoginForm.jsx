import { useRef } from "react";

import '../styles/loginForm.scss';

export function LoginForm(props) {

    const popupRef = useRef();
    const closePopup = (e) => {
        if (e.target === popupRef.current) {
            props.setShowPopup(false);
        }
    };
    const loginSucess = () => {
        props.setLogin(true);
        props.setShowPopup(false);
    }

    return (
        <div className="login__form" ref={popupRef} onClick={closePopup}>
            <div className="boxMessage">
               <h1>Entre com a sua conta</h1>
               <div>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
               </div>
                <button className="button" onClick={loginSucess} >Entrar</button>
            </div>
        </div>
    );
}