import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { CadastroCliente } from './pages/CadastroCliente';
import { CadastroEndereco } from './pages/CadastroEndereco';
import { EditarEndereco } from './pages/EditarEndereco';
import { EditarSenha } from './pages/EditarSenha';
import { DetalhesDaConta } from './pages/DetalhesDaConta';

import './styles/fonts.scss';
import './styles/grid.scss';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/cadastroCliente" exact component={CadastroCliente} />
      <Route path="/cadastroEndereco" exact component={CadastroEndereco} />
      <Route path="/editarEndereco" exact component={EditarEndereco} />
      <Route path="/editarSenha" exact component={EditarSenha} />
      <Route path="/detalhesDaConta" exact component={DetalhesDaConta} />
    </BrowserRouter>
  );
}

export default App;
