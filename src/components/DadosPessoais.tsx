//Dependências
import { useContext, useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../contexts/AuthContext";
import moment from 'moment'

//CSS/SCSS
import "../styles/dadosPessoais.scss";

const ex_cliente = {
  cli_pnome:"",
  cli_unome:"",
  cli_rg:"",
  cli_cpf:"",
  cli_email:"",
  cli_telefone:"",
  cli_dtnascimento:"",
  cli_ddd:"",
  cli_sexo: "Masculino",
  type: "cliente"
}

type cliProps = {
  callback: Function;
  formSenha: boolean;
  preSet?: typeof ex_cliente
};

export function DadosPessoais(props: cliProps) {
  
  const history = useHistory();
  const { handleLogin } = useContext(Context);
  const [cliente, setCliente] = useState(props.preSet||ex_cliente);

  useEffect(() => {
    props.callback(cliente);
  }, [cliente]);

  function handleCliente(e: any) {
    let value = e.target.value;
    if (e.target.name === "cli_dtnascimento") {
      let date = new Date(value);
      value = moment(date).format()
    }
    console.log(value)
    setCliente({
      ...cliente,
      [e.target.name]: value
    });
  }

  const renderSenha = () => {
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
  }

  return (
    <div className="dados__pessoais">
      <label>Seu Nome</label>
      <div className="dados__pessoais__nome">
        <input
          value={cliente.cli_pnome}
          name="cli_pnome"
          onChange={(e) => handleCliente(e)}
          type="text"
          placeholder="Primeiro Nome"
          required />
        <input
        value={cliente.cli_unome}
          name="cli_unome"
          onChange={(e) => handleCliente(e)}
          type="text"
          placeholder="Ultimo Nome"
          required />
      </div>
      <div className="dados__pessoais__pessoa">
        <div className="labeled__input">
          <label htmlFor="cli_dtnascimento">Data de nascimento</label>
          <input
            name="cli_dtnascimento"
            onChange={(e) => handleCliente(e)}
            type="date"
            placeholder="0000-00-00"
            required />
        </div>
        <div className="labeled__input">
          <label htmlFor="cli_rg">RG</label>
          <input
            value={cliente.cli_rg}
            name="cli_rg"
            onChange={(e) => handleCliente(e)}
            type="text"
            placeholder="RG"
            required />
        </div>
        <div className="labeled__input">
          <label htmlFor="cli_cpf">CPF</label>
          <input
            value={cliente.cli_cpf}
            name="cli_cpf"
            onChange={(e) => handleCliente(e)}
            type="text"
            placeholder="CPF"
            required />
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
            value={cliente.cli_email}
            required />
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
            value={cliente.cli_ddd}
            required />
        </div>
        <div className="labeled__input">
          <label htmlFor="cli_telefone">Seu numero de telefone</label>
          <input
            name="cli_telefone"
            onChange={(e) => handleCliente(e)}
            type="number"
            placeholder="Telefone"
            value={cliente.cli_telefone}
            required />
        </div>
      </div>
      <div className="dados__pessoais__usuario">
        {renderSenha()}
      </div>
    </div>
  );
}
