//Dependências
import { useState, FormEvent, useContext } from "react";
import { Link, Redirect, Route, useHistory } from "react-router-dom";
import { useEffect } from "react";
import moment from 'moment'

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
    const { authenticated, user, handleLogout } = useContext(Context);
    const [isLoading, setLoading] = useState(true);
    const [cliente, setCliente] = useState({
        cli_pnome: "",
        cli_unome: "",
        cli_rg: "",
        cli_cpf: "",
        cli_email: "",
        cli_telefone: "",
        cli_dtnascimento: "",
        cli_ddd: "",
        cli_sexo: "Masculino",
        enderecos: [{
            end_id: "",
            end_nome: "",
            end_tipo: "",
            end_tresidencia: "",
            end_tlogradouro: "",
            end_pais: "",
            end_cep: "",
            end_numero: "",
            end_logradouro: "",
            end_complemento: "",
            end_bairro: "",
            end_cidade: "",
            end_estado: ""
        }],
        type: "cliente"
    });

    useEffect(() => {
        if (cliente.cli_email === "") getCliente()
        console.log(cliente)
    }, [cliente])

    function clienteHandler(cliente: any) {
        setCliente(cliente);
    }

    async function updateCliente(e: FormEvent) {
        e.preventDefault();

        let temp_clidt = cliente.cli_dtnascimento

        let date = new Date(cliente.cli_dtnascimento);

        cliente.cli_dtnascimento = moment(date).format()
        cliente.type = "cliente"

        await api.put("/clientes/update", cliente);

        cliente.cli_dtnascimento = temp_clidt

        history.push('/detalhesDaConta')
    }


    async function getCliente() {
        const res = await api.post("/clientes/readId", { "type": "cliente", "key": "cli_id", "value": user.email });
        setCliente(res.data[0])//api sempre retorna os dados em forma de vetor - só precisamos da primeira posição deste
        setLoading(false)
    }

    const renderEndCards = () => {
        if (!isLoading) {
            return cliente.enderecos.map((endereco, index) => {
                return <>
                    <Card editar={"/editarEndereco?id=" + endereco.end_id}>
                        <h5>Endereço 1</h5>
                        <p><strong>Logradouro:</strong> {endereco.end_logradouro} </p>
                        <p><strong>Numero:</strong> {endereco.end_numero}</p>
                        <p><strong>CEP:</strong>    {endereco.end_cep}</p>
                        <p><strong>Cidade:</strong> {endereco.end_cidade}</p>
                        <p><strong>Bairro:</strong> {endereco.end_bairro}</p>
                        <p><strong>Estado:</strong> {endereco.end_estado}</p>
                    </Card>
                </>
            })
        }else{
            return <Card editar="">Carregando Enderecos...</Card>
        }
    }

    /*     const renderSenha = () => {
            {
              if (props.formSenha) {
                return <>
                  <div className="labeled__input">
                    <label htmlFor="cli_senha">Senha</label>
                    <input
                      name="cli_senha"
                      onChange={(e) => handleCliente(e)}
                      type="password"
                      placeholder="Senha"
                      className="senha"
                      required />
                  </div>
                  <div className="labeled__input">
                    <label htmlFor="cli_confsenha">Confirme a senha</label>
                    <input
                      name="cli_confsenha"
                      onChange={(e) => handleCliente(e)}
                      type="password"
                      placeholder="Confirmar Senha"
                      className="confsenha"
                      required />
                  </div>
                </>
              }
            }
          } */


    if (isLoading) {
        return <div>
            <Header />
            <main>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 cliente__form__alterar">
                            <Form
                                submitFunction={() => { alert("Aguarde o carregamento do seus dados...") }}
                                title="Detalhes da Conta"
                                buttonText="Aguarde..."
                                modalMessage="Atualizado com sucesso"
                            >
                                <p>Carregando dados da conta...</p>
                            </Form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    }

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
                                    preSet={cliente}
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
                                {renderEndCards()}
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
