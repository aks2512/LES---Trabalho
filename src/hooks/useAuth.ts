import { useState, useEffect } from 'react';
import { createBrowserHistory } from 'history';

// import api from '../../api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<string|null>('');

  useEffect(() => {
    let userExist:string|null;
    userExist = localStorage.getItem('user_name');
    setUser(userExist);
    if (userExist) {
    //api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);
  
  async function handleLogin() {
    // const token = await api.post('/authenticate');
    setUser("Jefferson");
    // localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user_name', 'Jefferson');
    // api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    createBrowserHistory().push('/');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('user_name');
    // api.defaults.headers.Authorization = undefined;
    createBrowserHistory().push('/');
  }
  
  return { user, authenticated, loading, handleLogin, handleLogout };
}