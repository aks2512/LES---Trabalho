import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<string|null>();
  const history = useHistory();

  useEffect(() => {
    let userExist = localStorage.getItem('token');
    let username = localStorage.getItem('username');
    if (userExist && username) {
      setUser(username)
      api.defaults.headers.Authorization = `Bearer ${userExist}`;
      setAuthenticated(true);
    } 
    setLoading(false);
  }, []);
  
  async function handleLogin(email: string, password: string) {
    const userDB = await api.post('/auth',({
      "email" : email,
      "senha" : password
    }));
    if (userDB.data.returnData && userDB.data.token) {
      localStorage.setItem('token', userDB.data.token);
      localStorage.setItem('username', userDB.data.returnData.cli_pnome)
      api.defaults.headers.Authorization = `Bearer ${userDB.data.token}`;
      setUser(userDB.data.returnData.cli_pnome);
      setAuthenticated(true);
    }
    history.push('/detalhesDaConta');
  }

  async function handleLogout() {
    setAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }
  
  return { user, setUser, authenticated, loading, handleLogin, handleLogout };
}