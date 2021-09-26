import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

//CONTEXT
import { CartContext } from "../contexts/CartContext";

import '../styles/carrinhoDeCompras.scss';

export function SelecaoDeEndereco() {
    const { carrinhoItens } = useContext(CartContext);

    return (
        <>
            <Header numberOfItens={carrinhoItens.length} />
            <main>
                <div className="carrinhoDeCompras container">
                    <div className="row">
                        <div className="produtos col-12 col-md-8">
                            {carrinhoItens.map((item:any, index:number) => (
                                <CarrinhoProduto 
                                    key={index}
                                    data={item}
                                />
                            ))}
                        </div>
                        <div className="total col-12 col-md-4">
                            <div className="valores">
                                <p>Produtos</p>
                                <h5>R$ 500,00</h5>
                            </div>

                            <div className="valores">
                                <p>Frete</p>
                                <h5>R$ 50,00</h5>
                            </div>

                            <div className="valores">
                                <p>Total</p>
                                <h5>R$ 550,00</h5>
                            </div>

                            <div className="selecionar_endereco">

                                <select name="endereco_cobranca" id="endereco_cobranca">
                                    <option value="" disabled selected>endereco de cobrança</option>
                                    <option>endereco 1</option>
                                    <option>endereco 2</option>
                                </select>

                                <select name="endereco_entrega" id="endereco_entrega">
                                    <option value="" disabled selected>endereco de entrega</option>
                                    <option>endereco 1</option>
                                    <option>endereco 2</option>
                                </select>

                            </div>

                            <div className="frete">
                                <label htmlFor="frete-checkbox1">
                                    <input 
                                        id="frete-checkbox1"
                                        name="frete"
                                        type="radio"
                                    /> Transportadora 1
                                </label>
                            </div>

                            <div className="frete">
                                <label htmlFor="frete-checkbox2">
                                    <input 
                                        id="frete-checkbox2"
                                        name="frete"
                                        type="radio"
                                    /> Transportadora 2
                                </label>
                            </div>

                            <div className="buttons">
                                <Link style={{fontSize: '16px', textDecoration: 'none'}} to="/formaDePagamento" className="button">Continuar Compra</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}