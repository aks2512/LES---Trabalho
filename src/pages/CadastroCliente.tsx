import { useContext, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Endereco } from '../components/Endereco';
import { DadosPessoais } from '../components/DadosPessoais';
import { Context } from '../contexts/AuthContext';

import api from '../api';

export function CadastroCliente() {
    const history = useHistory();
    const { handleLogin } = useContext(Context);
    const [enderecos,setEnderecos] = useState([{}]);

    async function postCliente(){
        
    }

    async function addEnderecos(){
        enderecos.push({"nome":"entrega1"});
        console.log(enderecos);
    }

    async function rmEnderecos(){
        enderecos.pop();
        console.log(enderecos);
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        submitFunction={()=>console.log("a")}
                        title="Cadastre-se" 
                        about="Usuário"
                        buttonText="Criar conta"
                        modalMessage="Cadastrado com sucesso"    
                    >
                        <DadosPessoais/>
                        <div className="form__body_btngroup">
                            <button type="button" className="form__body__button" onClick={(e)=>addEnderecos()}>+</button>
                            <button type="button" className="form__body__button" onClick={(e)=>rmEnderecos()}>-</button>
                        </div>
                        <Endereco/>
                        <Endereco/>

                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}