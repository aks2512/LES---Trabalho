import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';

export function EditarEndereco() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        title="Editar endereço" 
                        about="Endereço"
                        buttonText="Atualizar"    
                    >
                        <input type="text" placeholder="Logradouro" />
                        <input type="text" placeholder="Numero" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="Estado" />
                        <input type="text" placeholder="Bairro" />
                        <input type="text" placeholder="CEP" />
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}