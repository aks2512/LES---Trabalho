import { useContext, useState, FormEvent, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../contexts/AuthContext';
import '../styles/dadosPessoais.scss'
import api from '../api';

export function DadosPessoais() {
    const history = useHistory();
    const { handleLogin } = useContext(Context);
    const [cliente, setCliente] = useState({ "cli_senha": '', "cli_confsenha": '' });

    /*  "cli_pnome": pnome,
        "cli_unome": unome,
        "cli_rg": rg,
        "cli_cpf": cpf,
        "cli_email": email,
        "cli_telefone": telefone,
        "cli_senha": password, */

    async function insertClientForm(e: FormEvent) {
        e.preventDefault();
        if (cliente.cli_senha === cliente.cli_confsenha) {

        } else {
            alert("senhas vefirique a confirmação da senha!")
        }
        handleLogin(cliente.cli_senha, cliente.cli_confsenha);
        history.push('/cadastroCliente');
    }

    function handleCliente(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setCliente({
            ...cliente,
            [e.target.name]: value
        });
        console.log(cliente)
    }

    return (
        <div className="dados__pessoais">
            <div className="dados__pessoais__nome">
                <input name="cli_pnome" onChange={e => handleCliente(e)} type="text" placeholder="Primeiro Nome" />
                <input name="cli_unome" onChange={e => handleCliente(e)} type="text" placeholder="Ultimo Nome" />
            </div>
            <div className="dados__pessoais__pessoa">
                    <input name="cli_dtnascimento" onChange={e => handleCliente(e)} type="date" placeholder="" />
                    <input name="cli_rg" onChange={e => handleCliente(e)} type="text" placeholder="RG" />
                    <input name="cli_cpf" onChange={e => handleCliente(e)} type="text" placeholder="CPF" />
                    <select name="sexo" id="">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
            </div>
            <div className="dados__pessoais__outros">
                <input name="cli_email" onChange={e => handleCliente(e)} type="email" placeholder="Email" />
                <input name="cli_telefone" onChange={e => handleCliente(e)} type="tel" placeholder="Telefone" />
            </div>
            <div className="dados__pessoais__usuario">
                <input name="cli_senha" onChange={e => handleCliente(e)} type="password" placeholder="Senha" />
                <input name="cli_confsenha" onChange={e => handleCliente(e)} type="password" placeholder="Confirmar Senha" />
            </div>
        </div>

    )
}