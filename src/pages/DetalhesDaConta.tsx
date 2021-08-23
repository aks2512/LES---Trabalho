import { useLayoutEffect, useState, FormEvent, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Cards } from "../components/Cards";
import { Card } from "../components/Card";

import { Context } from "../contexts/AuthContext";

import api from "../api";

export function DetalhesDaConta() {
    const history = useHistory();
    const { handleLogout } = useContext(Context);
    const [pnome, setPnome] = useState('');
    const [unome, setUnome] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    useLayoutEffect(() => {
        async function getData() {
            const userDB = await api.post('clientes/readId');
            const userData = userDB.data;
            setPnome(userData.cli_pnome);
            setUnome(userData.cli_unome);
            setRg(userData.cli_rg);
            setCpf(userData.cli_cpf);
            setEmail(userData.cli_email);
            setTelefone(userData.cli_telefone);
        }
        getData();
    }, [])

    async function updateClientForm(e:FormEvent) {
        e.preventDefault();
        await api.put('clientes/update', {
            "cli_pnome": pnome,
            "cli_unome": unome,
            "cli_rg": rg,
            "cli_cpf": cpf,
            "cli_email": email,
            "cli_telefone": telefone,
            "cli_senha": "teste",
        });
        handleLogout();
        history.push('/');
    }

    return(
        <div>
            <Header/>
            <main>

                <div className="container">

                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6">

                            <Form
                                submitFunction={updateClientForm}
                                title="Detalhes da Conta"
                                buttonText="Atualizar" 
                                modalMessage="Atualizado com sucesso"    
                            >
                                <div className="link1">
                                    <Link to="/editarSenha">Alterar Senha</Link>
                                </div>

                                <input onChange={e => setPnome(e.target.value)} value={pnome} type="text" placeholder="Primeiro Nome" />
                                <input onChange={e => setUnome(e.target.value)} value={unome} type="text" placeholder="Ultimo Nome" />
                                {/* <div className="radios">
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
                                </div> */}
                                <input onChange={e => setRg(e.target.value)} value={rg} type="text" placeholder="RG"/>
                                <input onChange={e => setCpf(e.target.value)} value={cpf} type="text" placeholder="CPF" />
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
                                <input onChange={e => setTelefone(e.target.value)} value={telefone} type="tel" placeholder="Telefone" />

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
            <Footer/>
        </div>
    );
}