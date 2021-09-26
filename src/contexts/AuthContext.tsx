import React, { createContext, ReactNode } from 'react';

import useAuth from '../hooks/useAuth';

type authProviderProps = {
    children?: ReactNode;
}

const Context = createContext({} as any);

function AuthProvider({children}:authProviderProps) {
  const {
    setUser, user, authenticated, loading, handleLogin, handleLogout,
  } = useAuth();

  return (
    <Context.Provider value={{ loading, setUser, user, authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };