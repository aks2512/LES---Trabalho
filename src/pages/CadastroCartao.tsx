import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Cartao } from '../components/Cartao'
import { useState } from 'react';

export function CadastroCartao() {
    const [cartao, setCartao] = useState({});

    function cartaoHandler(cliente: any) {//Atualiza o cliente do formulario atráves do componente DadosPessoais
        setCartao(cliente);
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        submitFunction={() => console.log('teste')}
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