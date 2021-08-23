import { useContext, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';

import { Context } from '../contexts/AuthContext';

import api from '../api';

export function CadastroCliente() {
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

    async function insertClientForm(e:FormEvent) {
        e.preventDefault();
        if(password === confirmPassword) {
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
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        submitFunction={insertClientForm}
                        title="Cadastre-se" 
                        about="Usuário"
                        buttonText="Criar conta"
                        modalMessage="Cadastrado com sucesso"    
                    >
                        <input onChange={e => setPnome(e.target.value)} value={pnome} type="text" placeholder="Primeiro Nome" />
                        <input onChange={e => setUnome(e.target.value)} value={unome} type="text" placeholder="Ultimo Nome" />
                        <input onChange={e => setRg(e.target.value)} value={rg} type="text" placeholder="RG" />
                        <input onChange={e => setCpf(e.target.value)} value={cpf} type="text" placeholder="CPF" />
                        {/* <div className="radios">
                            <div className="radio">
                                <input id="sexo1" name="sexo" type="radio" value="masculino" defaultChecked/>
                                <label htmlFor="sexo1">Masculino</label>
                            </div>
                            <div className="radio">
                                <input id="sexo2" name="sexo" type="radio" value="feminino" />
                                <label htmlFor="sexo2">Feminino</label>
                            </div>
                            <div className="radio">
                                <input id="sexo3" name="sexo" type="radio" value="outro" />
                                <label htmlFor="sexo3">Outro</label>
                            </div>
                        </div> */}
                        <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
                        <input onChange={e => setTelefone(e.target.value)} value={telefone} type="tel" placeholder="Telefone" />
                        <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Senha" />
                        <input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" placeholder="Confirmar Senha" />
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}