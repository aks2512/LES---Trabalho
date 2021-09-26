import { useContext, useState } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Endereco } from '../components/Endereco';

//CONTEXT
import { CartContext } from "../contexts/CartContext";

export function CadastroEndereco() {
    const [endereco, setEndereco] = useState({});
    const { carrinhoItens } = useContext(CartContext);

    function enderecosHandler(endereco: Object) {////Atualiza a lista de enderecos do formulario atráves do componente Endereco
        setEndereco(endereco);
    }

    //temporario apenas para sumir com o erro
    console.log(endereco);

    return (
        <>
            <Header numberOfItens={carrinhoItens.length} />
            <main>
                <div className="container">
                    <Form 
                        submitFunction={() => console.log('teste')}
                        title="Editar endereço" 
                        about="Endereço"
                        buttonText="Atualizar"    
                        modalMessage="Atualizado com sucesso" 
                    >
                        <Endereco callback={(end:Object)=>enderecosHandler(end)}/>
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}