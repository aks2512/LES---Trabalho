import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';

export function CadastroCartao() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        title="Cadastrar Cartão"
                        about="Cartão"
                        buttonText="Cadastrar"
                        modalMessage="Cadastrado com sucesso" 
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