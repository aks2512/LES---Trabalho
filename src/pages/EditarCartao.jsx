import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';

export function EditarCartao() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        title="Editar Cartão"
                        about="Cartão"
                        buttonText="Atualizar"
                        popupMessage="Atualizado com sucesso" 
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