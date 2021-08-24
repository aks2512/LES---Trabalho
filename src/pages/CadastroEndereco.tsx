import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Endereco} from '../components/Endereco';
export function CadastroEndereco() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        submitFunction={() => console.log('teste')}
                        title="Cadastrar endereço" 
                        about="Endereço"
                        buttonText="Cadastrar"    
                        modalMessage="Cadastrado com sucesso"  
                    >
                        <Endereco/>
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}