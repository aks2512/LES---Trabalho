import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Context } from '../contexts/AuthContext';

import '../styles/carrinhoDeCompras.scss';

export function CarrinhoDeCompras() {

    const { authenticated } = useContext(Context);

    function continuarCompra() {
        if(authenticated) {
            return (
                <Link to="/selecaoDeEndereco" className="button">Continuar Compra</Link>
            );
        } else {
            return (
                <Link to="/" className="button">Continuar Compra</Link>
            )
        }
    }
    return (
        <>
            <Header/>
            <main>
                <div className="carrinhoDeCompras container">
                    <div className="row justify-content-center">
                        <div className="produtos col-12">
                            <CarrinhoProduto />
                            <CarrinhoProduto />
                            <CarrinhoProduto />
                        </div>
                        <div className="total_carrinho col-12 col-md-4">
                            <div className="valores">
                                <p>Total</p>
                                <h5>R$ 500,00</h5>
                            </div>
                            <div className="buttons">
                                <Link to="/" className="button">Continuar Comprando</Link>
                                {continuarCompra()}
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}