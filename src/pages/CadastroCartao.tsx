//React
import { useHistory } from "react-router-dom";
import { FormEvent, useState } from 'react';

//Componentes
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Cartao } from '../components/Cartao'

//API
import api from '../api';

export function CadastroCartao() {
    const history = useHistory();
    const [cartao, setCartao] = useState({});

    function cartaoHandler(cartao: any) {//Atualiza o cliente do formulario atráves do componente DadosPessoais
        setCartao(cartao);
    }

    async function postCartao(e: FormEvent) {//Prepara e pede para API cadastrar o cliente no banco de dados
        e.preventDefault();
    
        let res = await api.post("/cartoes/insert", cartao);

        console.log(res)
        
        if(res.status === 200 && !res.data.msgErr){
            alert("Cadastrado com Sucesso!")
            history.push('/detalhesDaConta');
        }
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        submitFunction={() => postCartao}
                        title="Cadastrar Cartão"
                        about="Cartão"
                        buttonText="Cadastrar"
                        modalMessage="Cadastrado com sucesso" 
                    >
                        <Cartao key="cartao" callback={(e: Object) => {cartaoHandler(e);}}/>
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}