//Dependências
import { useState, FormEvent, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
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
    const [isLoading, setLoading] = useState(true);
    const [cliente, setCliente] = useState({
        type: "cliente",
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
        cartoes:[{
            car_id:"",
            car_numero:"",
            car_bandeira:"",
            car_nome:"",
            car_validade:""
        }],
    });

    useEffect(() => {
        if (cliente.cli_email === "") getCliente()
    }, [cliente, getCliente])

    function clienteHandler(cliente: any) {
        setCliente(cliente);
    }

    async function updateCliente(e: FormEvent) {
        e.preventDefault();

        let temp_clidt = cliente.cli_dtnascimento

        let date = new Date(cliente.cli_dtnascimento);

        cliente.cli_dtnascimento = moment(date).format()

        const query = await api.put("/clientes/update", cliente);
        cliente.cli_dtnascimento = temp_clidt

        history.push('/detalhesDaConta')
    }


    async function getCliente() {
        const res = await api.post("/clientes/readId", { "type": "cliente" });
        setCliente(res.data[0])//api sempre retorna os dados em forma de vetor - só precisamos da primeira posição deste
        setLoading(false)
    }

    const renderEndCards = () => {
        if (!isLoading) {
            return cliente.enderecos.map((endereco, index) => {
                return <>
                    <Card key={"end_"+index} editar={"/editarEndereco"}>
                        <h5>{endereco.end_nome}</h5>
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
            return <Card key="cli_carregando" editar="">Carregando Enderecos...</Card>
        }
    }

    const renderCarCards = () => {
        if (!isLoading&&cliente.cartoes) {
            return cliente.cartoes.map((cartao, index) => {
                return <>
                    <Card key={"car_"+index} editar={"/editarCartao"}>
                            <h5>Cartão {cartao.car_id}</h5>
                            <p><strong>Numero:</strong>{cartao.car_numero}</p>
                            <p><strong>Nome:</strong>{cartao.car_numero}</p>
                            <p><strong>Validade:</strong>{cartao.car_validade}</p>
                    </Card>
                </>
            })
        }else{
            if(isLoading) return <Card key="car_carregando" editar="">Carregando Cartões...</Card>
        }
    }

    if (isLoading) {
        return <div>
            <Header />
            <main>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 cliente__form__alterar">
                            <Form
                                submitFunction={(e: FormEvent) => updateCliente(e)}
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
                                    <button>desativar conta</button>
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
                                {renderCarCards()}
                            </Cards>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
