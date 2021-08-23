import { useState, useEffect } from 'react';

import api from '../api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState<boolean|null>();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<string|null>();

  useEffect(() => {
    let userExist = localStorage.getItem('token');
    let username = localStorage.getItem('username');
    if (userExist && username) {
      setUser(username)
      api.defaults.headers.Authorization = `Bearer ${userExist}`;
      setAuthenticated(true);
    } else {
      setUser(null);
      setAuthenticated(false);
      api.defaults.headers.Authorization = undefined;
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
  }

  async function handleLogout() {
    setAuthenticated(false);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    api.defaults.headers.Authorization = undefined;
  }
  
  return { user, setUser, authenticated, setAuthenticated, loading, handleLogin, handleLogout };
}