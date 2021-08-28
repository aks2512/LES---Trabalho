//Dependências
import { useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";

//Componentes
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { Endereco } from "../components/Endereco";
import { DadosPessoais } from "../components/DadosPessoais";

//API
import api from "../api";



export function CadastroCliente() {
  const history = useHistory();
  const [enderecos, setEnderecos] = useState([{}]);
  const [cliente, setCliente] = useState({});

  const tiposExigidos = ["cobranca", "entrega"];

  useEffect(() => {
    console.log("Search message inside useEffect: ", enderecos);
  }, [enderecos]);

  function enderecosHandler(endereco: Object, key: number) {////Atualiza a lista de enderecos do formulario atráves do componente Endereco
    let temp_enderecos = enderecos;
    temp_enderecos[key] = endereco;
    setEnderecos(temp_enderecos);
  }

  function clienteHandler(cliente: Object) {//Atualiza o cliente do formulario atráves do componente DadosPessoais
    setCliente(cliente);
  }

  async function postCliente(e: FormEvent) {//Prepara e pede para API cadastrar o cliente no banco de dados
    e.preventDefault();
    let validaTipos = tiposExigidos;
    enderecos.forEach((item) => {
      if (item["end_tipo" as keyof typeof item] === "ambos") validaTipos = [];
      let tipoIndex = validaTipos.indexOf(
        item["end_tipo" as keyof typeof item]
      );
      if (tipoIndex >= 0) validaTipos.splice(tipoIndex, 1);
    });
    if (Object.keys(validaTipos).length != 0) {
    }
    const request = await api.post("/clientes/insert", cliente);
    console.log(request);
  }

  function addEnderecos() {//Adiciona Campos de Endereço
    var temp_end = enderecos;
    temp_end.push({});
    setEnderecos([...temp_end]);
  }

  function rmEnderecos() {//Remove Campos de Endereço
    var temp_end = enderecos;
    temp_end.pop();
    setEnderecos([...temp_end]);
  }

  return (
    <>
      <Header />
      <main>
        <div className="container cliente__form__cadastro">
          <Form
            submitFunction={(e: FormEvent) => postCliente(e)}
            title="Cadastre-se"
            about="Usuário"
            buttonText="Criar conta"
            modalMessage="Cadastrado com sucesso"
          >
            <DadosPessoais
              callback={(e: Object) => {
                clienteHandler(e);
              }}
              formSenha={true}
            />

            <hr></hr>
            <h1 className="cliente__form__enderecoIndicator form__title">
              Enderecos
            </h1>
            <div className="form__body__btngroup">
              <button
                type="button"
                className="form__body__button"
                onClick={(e) => addEnderecos()}
              >
                Adicionar
              </button>
              <button
                type="button"
                className="form__body__button"
                onClick={(e) => rmEnderecos()}
              >
                Remover
              </button>
            </div>

            {enderecos.map((itens, index) => (
              <Endereco
                key={index}
                index={index}
                callback={(e: Object) => {
                  enderecosHandler(e, index);
                }}
              />
            ))}
          </Form>
        </div>
      </main>
      <Footer />
    </>
  );
}
