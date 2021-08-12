import { useState } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';

export function CadastroCliente() {
    const { radios, setRadios } = useState(['true', 'false', 'false']);

    function changeRadio() {
        let radio1 = document.querySelector('#sexo1');
        let radio2 = document.querySelector('#sexo2');
        let radio3 = document.querySelector('#sexo3');

        document.addEventListener('click', () => {
            if(radio1 === this) setRadios(['true', 'false', 'false']);
            if(radio2 === this) setRadios(['false', 'true', 'false']);
            if(radio3 === this) setRadios(['false', 'false', 'true']);
        });

    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        title="Cadastre-se" 
                        about="Usuário"
                        buttonText="Criar conta"    
                    >
                        <input type="text" placeholder="Primeiro Nome" />
                        <input type="text" placeholder="Ultimo Nome" />
                        <input type="text" placeholder="RG" />
                        <input type="text" placeholder="CPF" />
                        <div className="radios">
                            <div className="radio">
                                <input id="sexo1" name="sexo" type="radio" value="masculino"  onClick={changeRadio}/>
                                <label htmlFor="sexo1">Masculino</label>
                            </div>
                            <div className="radio">
                                <input id="sexo2" name="sexo" type="radio" value="feminino"  onClick={changeRadio}/>
                                <label htmlFor="sexo2">Feminino</label>
                            </div>
                            <div className="radio">
                                <input id="sexo3" name="sexo" type="radio" value="outro"  onClick={changeRadio}/>
                                <label htmlFor="sexo3">Outro</label>
                            </div>
                        </div>
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Telefone" />
                        <input type="password" placeholder="Senha" />
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}