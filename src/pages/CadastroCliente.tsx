import { useContext, useState, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { Endereco } from "../components/Endereco";
import { DadosPessoais } from "../components/DadosPessoais";
import { Context } from "../contexts/AuthContext";

import api from "../api";
import ReactDOM from "react-dom";

export function CadastroCliente() {
  const history = useHistory();
  const { handleLogin } = useContext(Context);
  const [enderecos, setEnderecos] = useState([{}]);
  const [cliente, setCliente] = useState({});

  const tiposExigidos = ["cobranca", "entrega"];

  useEffect(() => {
    console.log("Search message inside useEffect: ", enderecos);
  }, [enderecos]);

  function enderecosHandler(endereco: Object, key: number) {
    let temp_enderecos = enderecos;
    temp_enderecos[key] = endereco;
    setEnderecos(temp_enderecos);
  }

  function clienteHandler(cliente: Object) {
    setCliente(cliente);
  }

  async function postCliente(e: FormEvent) {
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
    console.log(cliente);
    const request = await api.post("/clientes/insert", cliente);
    console.log(request);
  }

  function addEnderecos() {
    var temp_end = enderecos;
    temp_end.push({});
    setEnderecos([...temp_end]);

    var k = document.getElementsByClassName("enderecos__form");
  }

  function rmEnderecos() {
    var temp_end = enderecos;
    temp_end.pop();
    setEnderecos([...temp_end]);
  }

  return (
    <>
      <Header />
      <main>
        <div className="container">
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
