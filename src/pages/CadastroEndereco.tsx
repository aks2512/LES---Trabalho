import { useState } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Endereco } from '../components/Endereco';

export function CadastroEndereco() {
    const [endereco, setEndereco] = useState({});

    function enderecosHandler(endereco: Object) {////Atualiza a lista de enderecos do formulario atráves do componente Endereco
        setEndereco(endereco);
    }

    //temporario apenas para sumir com o erro
    console.log(endereco);

    return (
        <>
            <Header />
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