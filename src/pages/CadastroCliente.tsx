import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';

export function CadastroCliente() {

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        submitFunction={() => console.log('teste')}
                        title="Cadastre-se" 
                        about="Usuário"
                        buttonText="Criar conta"
                        modalMessage="Cadastrado com sucesso"    
                    >
                        <input type="text" placeholder="Primeiro Nome" />
                        <input type="text" placeholder="Ultimo Nome" />
                        <input type="text" placeholder="RG" />
                        <input type="text" placeholder="CPF" />
                        {/* <div className="radios">
                            <div className="radio">
                                <input id="sexo1" name="sexo" type="radio" value="masculino" defaultChecked/>
                                <label htmlFor="sexo1">Masculino</label>
                            </div>
                            <div className="radio">
                                <input id="sexo2" name="sexo" type="radio" value="feminino" />
                                <label htmlFor="sexo2">Feminino</label>
                            </div>
                            <div className="radio">
                                <input id="sexo3" name="sexo" type="radio" value="outro" />
                                <label htmlFor="sexo3">Outro</label>
                            </div>
                        </div> */}
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Telefone" />
                        <input type="password" placeholder="Senha" />
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}