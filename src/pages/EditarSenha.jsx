import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';

export function EditarSenha() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        title="Editar Senha"
                        about="Redefinição de Senha"
                        buttonText="Atualizar"
                    >
                        <input type="password" placeholder="Nova Senha" />
                        <input type="password" placeholder="Confirme a Senha" />
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}