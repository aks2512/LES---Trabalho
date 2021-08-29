//Dependências
import { useContext, useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../contexts/AuthContext";
import moment from 'moment'

//CSS/SCSS
import "../styles/dadosPessoais.scss";

type cliProps = {
  callback: Function;
  formSenha:boolean
};

export function DadosPessoais(props: cliProps) {
  const history = useHistory();
  const { handleLogin } = useContext(Context);
  const [cliente, setCliente] = useState({
    cli_senha: "",
    cli_confsenha: "",
    cli_sexo: "Masculino",
    type: "cliente"
  });

  useEffect(() => {
    props.callback(cliente);
  }, [cliente]);

  function handleCliente(e: any) {
    let value = e.target.value;
    if (e.target.name === "cli_dtnascimento") {
      let date = new Date(value);
      value = moment(date).format()
    }
    setCliente({
      ...cliente,
      [e.target.name]: value
    });
  }

  const renderSenha = () => {
    { 
      if(props.formSenha){
      return <>
              <div className="labeled__input">
                <label htmlFor="cli_senha">Senha</label>
                <input
                  name="cli_senha"
                  onChange={(e) => handleCliente(e)}
                  type="password"
                  placeholder="Senha"
                  className="senha"
                required/>
              </div>
              <div className="labeled__input">
                <label htmlFor="cli_confsenha">Confirme a senha</label>
                <input
                  name="cli_confsenha"
                  onChange={(e) => handleCliente(e)}
                  type="password"
                  placeholder="Confirmar Senha"
                  className="confsenha"
                required/>
              </div>
            </>
    }}
  }

  return (
    <div className="dados__pessoais">
      <label>Seu Nome</label>
      <div className="dados__pessoais__nome">
        <input
          name="cli_pnome"
          onChange={(e) => handleCliente(e)}
          type="text"
          placeholder="Primeiro Nome"
        required/>
        <input
          name="cli_unome"
          onChange={(e) => handleCliente(e)}
          type="text"
          placeholder="Ultimo Nome"
        required/>
      </div>
      <div className="dados__pessoais__pessoa">
        <div className="labeled__input">
          <label htmlFor="cli_dtnascimento">Data de nascimento</label>
          <input
            name="cli_dtnascimento"
            onChange={(e) => handleCliente(e)}
            type="date"
            placeholder="0000-00-00"
          required/>
        </div>
        <div className="labeled__input">
          <label htmlFor="cli_rg">RG</label>
          <input
            name="cli_rg"
            onChange={(e) => handleCliente(e)}
            type="text"
            placeholder="RG"
          required/>
        </div>
        <div className="labeled__input">
          <label htmlFor="cli_cpf">CPF</label>
          <input
            name="cli_cpf"
            onChange={(e) => handleCliente(e)}
            type="text"
            placeholder="CPF"
          required/>
        </div>
        <div className="labeled__input">
          <label htmlFor="cli_sexo">Sexo</label>
          <select
            name="cli_sexo"
            id=""
            onChange={(e: any) => handleCliente(e)}
            value={cliente.cli_sexo}
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </div>
      <div className="dados__pessoais__outros">
        <div className="labeled__input">
          <label htmlFor="cli_email">Seu melhor email</label>
          <input
            name="cli_email"
            onChange={(e) => handleCliente(e)}
            type="email"
            placeholder="Email"
          required/>
        </div>
      </div>
      <div className="dados__pessoais__telefone">
        <div className="labeled__input">
          <label htmlFor="cli_ddd">DDD</label>
          <input
            name="cli_ddd"
            onChange={(e) => handleCliente(e)}
            type="number"
            placeholder="DDD"
          required/>
        </div>
        <div className="labeled__input">
          <label htmlFor="cli_telefone">Seu numero de telefone</label>
          <input
            name="cli_telefone"
            onChange={(e) => handleCliente(e)}
            type="number"
            placeholder="Telefone"
          required/>
        </div>
      </div>
      <div className="dados__pessoais__usuario">
        {renderSenha()}
      </div>
    </div>
  );
}
