import { useContext } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';


import { Context } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { CadastroCliente } from './pages/CadastroCliente';
import { CadastroEndereco } from './pages/CadastroEndereco';
import { CadastroCartao } from './pages/CadastroCartao';
import { EditarEndereco } from './pages/EditarEndereco';
import { EditarCartao } from './pages/EditarCartao';
import { EditarSenha } from './pages/EditarSenha';
import { DetalhesDaConta } from './pages/DetalhesDaConta';
import { CarrinhoDeCompras } from './pages/CarrinhoDeCompras';
import { SelecaoDeEndereco } from './pages/SelecaoDeEndereco';
import { AutenticacaoCarrinho } from './pages/AutenticacaoCarrinho';
import { FormaDePagamento } from './pages/FormaDePagamento';

import './styles/fonts.scss';
import './styles/animation.scss';
import './styles/bootstrap.scss';
import './styles/global.scss';

function UserRoute({ isPrivate = false, ...rest }) {
const { loading, authenticated } = useContext(Context);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (isPrivate && !authenticated) {
        return <Redirect to="/" />
    }

    return <Route {...rest} />;
}

export function Routes() {
  return (
    <BrowserRouter>
        <Switch>
          <UserRoute isPrivate={false}  path="/" exact component={Home} />
          <UserRoute isPrivate={false}  path="/cadastroCliente" exact component={CadastroCliente} />
          <UserRoute isPrivate={false}  path="/carrinhoDeCompras" exact component={CarrinhoDeCompras} />
          <UserRoute isPrivate={false}  path="/autenticacaoCarrinho" exact component={AutenticacaoCarrinho} />
          <UserRoute isPrivate={false}  path="/formaDePagamento" exact component={FormaDePagamento} />
          <UserRoute isPrivate={true}  path="/selecaoDeEndereco" exact component={SelecaoDeEndereco} />
          <UserRoute isPrivate={true}  path="/cadastroCartao" exact component={CadastroCartao} />
          <UserRoute isPrivate={true}  path="/cadastroEndereco" exact component={CadastroEndereco} />
          <UserRoute isPrivate={true}  path="/editarEndereco" exact component={EditarEndereco} />
          <UserRoute isPrivate={true}  path="/editarCartao" exact component={EditarCartao} />
          <UserRoute isPrivate={true}  path="/editarSenha" exact component={EditarSenha} />
          <UserRoute isPrivate={true}  path="/detalhesDaConta" exact component={DetalhesDaConta} />
        </Switch>
    </BrowserRouter>
  );
}