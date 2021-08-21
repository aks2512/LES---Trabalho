import { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';

import api from '../api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<string|null>('');

  useEffect(() => {
    let userExist:string|null;
    userExist = localStorage.getItem('user_first_name');
    setUser(userExist);
    if (userExist) {
    // api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);
  
  async function handleLogin(email: string, senha: string) {
    const userDB = await api.get('/clientes');
    // localStorage.setItem('token', JSON.stringify(token));
    if (userDB['data'].email === email && userDB['data'].senha === senha) {
      localStorage.setItem('user_first_name', userDB['data'].first_name);
      localStorage.setItem('user_email', userDB['data'].email);
      localStorage.setItem('user_senha', userDB['data'].senha);
      // api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }
    createBrowserHistory().push('/');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.getItem('user_first_name');
    localStorage.getItem('user_email');
    localStorage.getItem('user_senha');
    // api.defaults.headers.Authorization = undefined;
    createBrowserHistory().push('/');
  }
  
  return { user, authenticated, loading, handleLogin, handleLogout };
}