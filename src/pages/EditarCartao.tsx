import { useContext } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';

//CONTEXT
import { CartContext } from "../contexts/CartContext";

export function EditarCartao() {
    const { carrinhoItens } = useContext(CartContext);

    return (
        <>
            <Header numberOfItens={carrinhoItens.length} />
            <main>
                <div className="container">
                    <Form 
                        submitFunction={() => console.log('teste')}
                        title="Editar Cartão"
                        about="Cartão"
                        buttonText="Atualizar"
                        modalMessage="Atualizado com sucesso" 
                    >
                        <input type="text" placeholder="Numero do Cartão" />
                        <input type="text" placeholder="Nome do Cartão" />
                        <input type="text" placeholder="Expiração MM/AA" />
                        <input type="password" placeholder="Código de Segurança" />
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}