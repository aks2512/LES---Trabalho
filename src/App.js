import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { CadastroCliente } from './pages/CadastroCliente';
import { CadastroEndereco } from './pages/CadastroEndereco';
import { CadastroCartao } from './pages/CadastroCartao';
import { EditarEndereco } from './pages/EditarEndereco';
import { EditarCartao } from './pages/EditarCartao';
import { EditarSenha } from './pages/EditarSenha';
import { DetalhesDaConta } from './pages/DetalhesDaConta';

import { Context } from './Context/AuthContext';


import './styles/fonts.scss';
import './styles/animation.scss';
import './styles/bootstrap.scss';
import './styles/global.scss';

function App() {

  function UserRoute({ isPrivate, ...rest }) {
    const { loading, authenticated } = useContext(Context);
  
    if (loading) {
      return <h1>Loading...</h1>;
    }
  
    if (isPrivate && !authenticated) {
      return <Redirect to="/" />
    }
  
    return <Route {...rest} />;
  }

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <UserRoute path="/" exact component={Home} />
          <UserRoute path="/cadastroCliente" exact component={CadastroCliente} />
          <UserRoute isPrivate  path="/cadastroCartao" exact component={CadastroCartao} />
          <UserRoute isPrivate  path="/cadastroEndereco" exact component={CadastroEndereco} />
          <UserRoute isPrivate  path="/editarEndereco" exact component={EditarEndereco} />
          <UserRoute isPrivate  path="/editarCartao" exact component={EditarCartao} />
          <UserRoute isPrivate  path="/editarSenha" exact component={EditarSenha} />
          <UserRoute isPrivate  path="/detalhesDaConta" exact component={DetalhesDaConta} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
