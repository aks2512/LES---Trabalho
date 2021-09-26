import React from 'react';
import { Router } from 'react-router-dom';

import {Routes} from './routes';
import { createBrowserHistory } from 'history';

import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router history={createBrowserHistory()}>
          <Routes />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
