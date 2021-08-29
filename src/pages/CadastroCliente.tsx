//Dependências
import { useState, FormEvent, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

//Componentes
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { Endereco } from "../components/Endereco";
import { DadosPessoais } from "../components/DadosPessoais";

//API
import api from "../api";

//Contextos
import { Context } from "../contexts/AuthContext";

export function CadastroCliente() {
  const history = useHistory();
  const { authenticated, user, handleLogout} = useContext(Context);
  const [enderecos, setEnderecos] = useState([{}]);
  const [cliente, setCliente] = useState({
    cli_pnome:"",
    cli_unome:"",
    cli_rg:"", 
    cli_cpf:"", 
    cli_sexo:"",
    cli_dtnascimento:"",
    cli_email:"", 
    cli_senha:"", 
    cli_confsenha:"", 
    cli_telefone:"", 
    cli_ddd:"",
    enderecos:[{}]
  });

  const tiposExigidos = ["cobranca", "entrega"];

  useEffect(() => {
    console.log("Search message inside useEffect: ", enderecos);
  }, [enderecos]);

  function enderecosHandler(endereco: Object, key: number) {////Atualiza a lista de enderecos do formulario atráves do componente Endereco
    let temp_enderecos = enderecos;
    temp_enderecos[key] = endereco;
    setEnderecos(temp_enderecos);
  }

  function clienteHandler(cliente: any) {//Atualiza o cliente do formulario atráves do componente DadosPessoais
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
      let str = ""
      validaTipos.forEach((item)=>{
        str += "\n"+item
      })
      alert("Precisa cadastrar pelo menos um endereço para:"+str)
    }

    if(cliente.cli_senha!==cliente.cli_confsenha){
      alert("Senha e confirmação de senha não conferem")
    }

    cliente.enderecos = enderecos

    let res = await api.post("/clientes/insert", cliente);

    if(res.status==200){
      redirect();
    }
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

  const redirect = () => {
    history.push('/your-path')
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
