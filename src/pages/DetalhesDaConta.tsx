//Dependências
import { useState, FormEvent, useContext } from "react";
import { Link, Redirect, Route, useHistory } from "react-router-dom";

//Componentes
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Cards } from "../components/Cards";
import { Card } from "../components/Card";
import { DadosPessoais } from "../components/DadosPessoais";

//Sessão do usuário
import { Context } from "../contexts/AuthContext";

//API
import api from "../api";

export function DetalhesDaConta() {
    const history = useHistory();
    const { authenticated, user, handleLogout} = useContext(Context);
    const [ cliente, setCliente] = useState({});

    function clienteHandler(cliente: Object) {
        setCliente(cliente);
    }

    async function updateCliente(e: FormEvent) {
        e.preventDefault();
        const request = await api.put("/clientes/update", cliente);
    }

    async function getCliente(){
        const res = await api.post("/clientes/readOne", {"type":"cliente","key":"cli_email","value":user.email});
        console.log("res:"+res)
    }

    document.addEventListener('click',getCliente)

    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 cliente__form__alterar">
                            <Form
                                submitFunction={updateCliente}
                                title="Detalhes da Conta"
                                buttonText="Atualizar"
                                modalMessage="Atualizado com sucesso"
                            >
                                <div className="link1">
                                    <Link to="/editarSenha">Alterar Senha</Link>
                                </div>

                                <DadosPessoais
                                    callback={(e: Object) => {
                                        clienteHandler(e);
                                    }}
                                    formSenha={false}
                                />

                                <div className="link2">
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
            <Footer />
        </div>
    );
}