  
import React, { createContext, useState, useEffect, ReactNode } from 'react';

import useAuth from '../hooks/useAuth';

type authProviderProps = {
    children?: ReactNode;
}

const Context = createContext({} as any);

function AuthProvider({children}:authProviderProps) {
  const {
    user, authenticated, loading, handleLogin, handleLogout,
  } = useAuth();

  return (
    <Context.Provider value={{ loading, user, authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };