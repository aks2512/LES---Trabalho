import { useContext, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { Endereco } from '../components/Endereco';
import { DadosPessoais } from '../components/DadosPessoais';
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
                        <DadosPessoais/>
                        <Endereco/>
                        <Endereco/>
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}