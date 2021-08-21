import React from 'react';
import { Router } from 'react-router-dom';

import {Routes} from './routes';
import { createBrowserHistory } from 'history';

import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router history={createBrowserHistory()}>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
