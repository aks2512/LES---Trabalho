import { useState, useEffect } from 'react';

// import api from '../../api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user_name');

    if (user) {
    //api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin() {
    // const token = await api.post('/authenticate');
    const user = "Jefferson"

    // localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user_name', user)
    // api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    history.push('/');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('user_name');
    // api.defaults.headers.Authorization = undefined;
    history.push('/');
  }
  
  return { user, authenticated, loading, handleLogin, handleLogout };
}