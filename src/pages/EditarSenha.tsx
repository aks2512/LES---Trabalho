import { FormEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Form } from '../components/Form';

import { Context } from '../contexts/AuthContext';

import api from '../api';

export function EditarSenha() {
    const history = useHistory();
    const { handleLogout } = useContext(Context)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function updatePasswordForm(e:FormEvent) {
        e.preventDefault();

        if(password === confirmPassword) {
            await api.put('clientes/updatePassword', {
                "cli_senha": password,
            });
        }
        handleLogout();
        history.push('/');
    }

    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Form 
                        submitFunction={updatePasswordForm}
                        title="Editar Senha"
                        about="Redefinição de Senha"
                        buttonText="Atualizar"
                        modalMessage="Atualizado com sucesso" 
                    >
                    <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Nova Senha" />
                    <input onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" placeholder="Confirmar Senha" />
                    </Form>
                </div>
            </main>
            <Footer />
        </>
    )
}