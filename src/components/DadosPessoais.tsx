import { useContext, useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../contexts/AuthContext";
import "../styles/dadosPessoais.scss";
import api from "../api";

type cliProps = {
  callback: Function;
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

  /*  "cli_pnome": pnome,
        "cli_unome": unome,
        "cli_rg": rg,
        "cli_cpf": cpf,
        "cli_email": email,
        "cli_telefone": telefone,
        "cli_senha": password, */

  useEffect(() => {
    props.callback(cliente);
    console.log(cliente);
  }, [cliente]);

  async function insertClientForm(e: FormEvent) {
    e.preventDefault();
    if (cliente.cli_senha === cliente.cli_confsenha) {
    } else {
      alert("senhas vefirique a confirmação da senha!");
    }
    handleLogin(cliente.cli_senha, cliente.cli_confsenha);
    history.push("/cadastroCliente");
  }

  function handleCliente(e: any) {
    const value = e.target.value;
    setCliente({
      ...cliente,
      [e.target.name]: value
    });
  }

  return (
    <div className="dados__pessoais">
      <div className="dados__pessoais__nome">
        <input
          name="cli_pnome"
          onChange={(e) => handleCliente(e)}
          type="text"
          placeholder="Primeiro Nome"
        />
        <input
          name="cli_unome"
          onChange={(e) => handleCliente(e)}
          type="text"
          placeholder="Ultimo Nome"
        />
      </div>
      <div className="dados__pessoais__pessoa">
        <label htmlFor="cli_dtnascimento">Data de nascimento</label>
        <label htmlFor="cli_rg">RG</label>
        <label htmlFor="cli_cpf">CPF</label>
        <label htmlFor="cli_sexo">Sexo</label>
        <input
          name="cli_dtnascimento"
          onChange={(e) => handleCliente(e)}
          type="date"
          placeholder=""
        />
        <input
          name="cli_rg"
          onChange={(e) => handleCliente(e)}
          type="text"
          placeholder="RG"
        />
        <input
          name="cli_cpf"
          onChange={(e) => handleCliente(e)}
          type="text"
          placeholder="CPF"
        />
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
      <div className="dados__pessoais__outros">
        <label htmlFor="cli_email">Seu melhor email</label>
        <label htmlFor="cli_ddd">DDD</label>
        <label htmlFor="cli_telefone">Seu numero de telefone</label>
        <input
          name="cli_email"
          onChange={(e) => handleCliente(e)}
          type="email"
          placeholder="Email"
        />
        <input
          name="cli_ddd"
          onChange={(e) => handleCliente(e)}
          type="number"
          placeholder="DDD"
        />
        <input
          name="cli_telefone"
          onChange={(e) => handleCliente(e)}
          type="number"
          placeholder="Telefone"
        />
      </div>
      <div className="dados__pessoais__usuario">
        <label htmlFor="cli_senha">Senha</label>
        <label htmlFor="cli_confsenha">Confirme a senha</label>
        <label htmlFor=""></label>
        <input
          name="cli_senha"
          onChange={(e) => handleCliente(e)}
          type="password"
          placeholder="Senha"
          className="senha"
        />
        <input
          name="cli_confsenha"
          onChange={(e) => handleCliente(e)}
          type="password"
          placeholder="Confirmar Senha"
          className="confsenha"
        />
      </div>
    </div>
  );
}
