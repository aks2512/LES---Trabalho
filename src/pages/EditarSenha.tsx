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
                        submitFunction={() => console.log('teste')}
                        title="Editar Senha"
                        about="Redefinição de Senha"
                        buttonText="Atualizar"
                        modalMessage="Atualizado com sucesso" 
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