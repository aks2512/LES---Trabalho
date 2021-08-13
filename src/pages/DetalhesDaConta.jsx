import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Cards } from "../components/Cards";
import { Card } from "../components/Card";

export function DetalhesDaConta() {
    return(
        <div>
            <Header/>
            <main>

                <div className="container">

                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6">

                            <Form
                                title="Detalhes da Conta"
                                buttonText="Atualizar"   
                            >
                                <div className="link1">
                                    <Link to="/editarSenha">Alterar Senha</Link>
                                </div>

                                <input type="text" placeholder="Primeiro Nome" />
                                <input type="text" placeholder="Ultimo Nome" />
                                <div className="radios">
                                    <div className="radio">
                                        <input id="sexo1" name="sexo" type="radio" value="masculino" checked/>
                                        <label htmlFor="sexo1">Masculino</label>
                                    </div>
                                    <div className="radio">
                                        <input id="sexo2" name="sexo" type="radio" value="feminino" checked/>
                                        <label htmlFor="sexo2">Feminino</label>
                                    </div>
                                    <div className="radio">
                                        <input id="sexo3" name="sexo" type="radio" value="outro" checked/>
                                        <label htmlFor="sexo3">Outro</label>
                                    </div>
                                </div>
                                <input type="text" placeholder="RG" />
                                <input type="text" placeholder="CPF" />
                                <input type="email" placeholder="Email" />
                                <input type="tel" placeholder="Telefone" />

                                <div class="link2">
                                    <Link to="/editarSenha">desativar conta</Link>
                                </div>

                            </Form>
                        </div>
                        <div className="col-12 col-lg-6">
                            <Cards
                                title="Endereços"
                                new="Novo Endereço"
                                newLink="/cadastroEndereco"
                            >
                                <Card
                                    editar="/editarEndereco"
                                >
                                    <h5>Endereço 1</h5>
                                    <p><strong>Logradouro:</strong> xxxxxxxxxxxxx</p>
                                    <p><strong>Numero:</strong> xxxx</p>
                                    <p><strong>CEP:</strong> xxxx-xxxx</p>
                                    <p><strong>Cidade:</strong> xxxxxxxx</p>
                                    <p><strong>Bairro:</strong> xxxxxxxx</p>
                                    <p><strong>Estado:</strong> xxxxxxxx</p>
                                </Card>
                                <Card
                                    editar="/editarEndereco"
                                >
                                    <h5>Endereço 1</h5>
                                    <p><strong>Logradouro:</strong> xxxxxxxxxxxxx</p>
                                    <p><strong>Numero:</strong> xxxx</p>
                                    <p><strong>CEP:</strong> xxxx-xxxx</p>
                                    <p><strong>Cidade:</strong> xxxxxxxx</p>
                                    <p><strong>Bairro:</strong> xxxxxxxx</p>
                                    <p><strong>Estado:</strong> xxxxxxxx</p>
                                </Card>
                            </Cards>
                            <Cards
                                title="Cartões"
                                new="Novo Cartão"
                                newLink="/cadastroCartao"
                            >
                                <Card
                                    editar="/editarCartao"
                                >
                                    <h5>Cartão 1</h5>
                                    <p><strong>Numero:</strong> xxxxxxxxxxxxx</p>
                                    <p><strong>Nome:</strong> xxxx</p>
                                    <p><strong>Expiração:</strong> xxxx-xxxx</p>
                                    <p><strong>Codigo:</strong> xxxxxxxx</p>
                                </Card>
                                <Card
                                    editar="/editarCartao"
                                >
                                    <h5>Cartão 1</h5>
                                    <p><strong>Numero:</strong> xxxxxxxxxxxxx</p>
                                    <p><strong>Nome:</strong> xxxx</p>
                                    <p><strong>Expiração:</strong> xxxx-xxxx</p>
                                    <p><strong>Codigo:</strong> xxxxxxxx</p>
                                </Card>
                            </Cards>
                        </div>

                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}