import { useContext, useState } from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Endereco } from '../components/Endereco';

//CONTEXT
import { CartContext } from "../contexts/CartContext";

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
    const [endereco, setEndereco] = useState<endProps>();
    const { carrinhoItens } = useContext(CartContext);

    function enderecosHandler(endereco: endProps) {////Atualiza a lista de enderecos do formulario atráves do componente Endereco
        setEndereco(endereco);
    }

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
                        <Endereco callback={(end:endProps)=>enderecosHandler(end)}/>
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}