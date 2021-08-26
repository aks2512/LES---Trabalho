import { useContext, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Endereco } from '../components/Endereco';
import { DadosPessoais } from '../components/DadosPessoais';
import { Context } from '../contexts/AuthContext';

import api from '../api';
import ReactDOM from 'react-dom';

export function CadastroCliente() {
    const history = useHistory();
    const { handleLogin } = useContext(Context);
    const [enderecos,setEnderecos] = useState([{}]);
    const [cliente, setCliente] = useState({});

    function enderecosHandler(endereco:Object,key:number){
        let temp_enderecos = enderecos;
        temp_enderecos[key] = endereco;
        setEnderecos(temp_enderecos);
        console.log("Enderecos:",enderecos)
    }

    function postCliente(){
        enderecos.map((item,index)=>{
            console.log(item)
        })
        
    }

    function addEnderecos(){
        var temp_end = enderecos;
        temp_end.push({});
        setEnderecos([...temp_end]);
    }

    function rmEnderecos(){
        var temp_end = enderecos;
        temp_end.pop();
        setEnderecos([...temp_end]);
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        submitFunction={()=>postCliente()}
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
                        {enderecos.map((itens, index) =>(                
                                <Endereco key={index} index={index} callback={(e:Object)=>{enderecosHandler(e,index)}}/>                    
                        ))}
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}