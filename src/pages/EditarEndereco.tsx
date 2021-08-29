import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Endereco } from '../components/Endereco';
import { useState } from 'react';

type endProps = {
    index?: number;
    callback: Function;
    endereco?: {
      end_nome: string,
      end_tipo: string,
      end_tresidencia: string,
      end_tlogradouro: string,
      end_pais: string,
      end_cep:  string,
      end_numero: string,
      end_logradouro: string,
      end_complemento: string,
      end_bairro: string,
      end_cidade: string,
      end_estado: string
    }
  };

export function EditarEndereco() {
    const [endereco, setEndereco] = useState({});

    function enderecosHandler(endereco: Object) {////Atualiza a lista de enderecos do formulario atráves do componente Endereco
        setEndereco(endereco);
    }

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