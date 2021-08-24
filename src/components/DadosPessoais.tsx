import { useContext, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../contexts/AuthContext';
import '../styles/dadosPessoais.scss'
import api from '../api';

export function DadosPessoais() {
    const history = useHistory();
    const { handleLogin } = useContext(Context);
    const [pnome, setPnome] = useState('');
    const [unome, setUnome] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function insertClientForm(e: FormEvent) {
        e.preventDefault();
        if (password === confirmPassword) {
            await api.post('clientes/insert', {
                "cli_pnome": pnome,
                "cli_unome": unome,
                "cli_rg": rg,
                "cli_cpf": cpf,
                "cli_email": email,
                "cli_telefone": telefone,
                "cli_senha": password,
            });
        }
        handleLogin(email, password);
        history.push('/cadastroEndereco');
    }

    return (
        <div className="dados_pessoais">
            <input className="col-md-4 " onChange={e => setPnome(e.target.value)} value={pnome} type="text" placeholder="Primeiro Nome" />
            <input className="col-md-8" onChange={e => setUnome(e.target.value)} value={unome} type="text" placeholder="Ultimo Nome" />
            <input className="col-md-6" onChange={e => setRg(e.target.value)} value={rg} type="text" placeholder="RG" />
            <input className="col-md-6" onChange={e => setCpf(e.target.value)} value={cpf} type="text" placeholder="CPF" />
            <input className="col-md-6" onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
            <input className="col-md-6" onChange={e => setTelefone(e.target.value)} value={telefone} type="tel" placeholder="Telefone" />
            <select className="col-md-6" name="sexo" id="">
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
            </select>
            <div className="col-md-12">
                <input className="col-md-6" onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Senha" />
                <input className="col-md-6" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" placeholder="Confirmar Senha" />
            </div>
        </div>

    )
}