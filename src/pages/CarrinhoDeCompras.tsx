import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import '../styles/carrinhoDeCompras.scss';

import livro from '../assets/images/livro.png';

export function CarrinhoDeCompras() {
    return (
        <>
            <Header/>
            <main>
                <div className="carrinhoDeCompras container">
                    <div className="row">
                        <div className="produtos col-12 col-md-8">
                            <div className="produto">
                                <img width="52" src={livro} alt="" />
                                <h5 className="produto_nome">Produto 1</h5>
                                <div className="produto_quantidade">
                                    <label htmlFor="">QTD: </label>
                                    <input
                                        type="number"
                                        value="1"
                                        onChange={() => console.log('value')} 
                                    />
                                </div>
                                <h5 className="produto_preco">R$ 49,90</h5>
                            </div>
                            <div className="produto">
                                <img width="52" src={livro} alt="" />
                                <h5 className="produto_nome">Produto 1</h5>
                                <div className="produto_quantidade">
                                    <label htmlFor="">QTD: </label>
                                    <input
                                        type="number"
                                        value="1"
                                        onChange={() => console.log('value')} 
                                    />
                                </div>
                                <h5 className="produto_preco">R$ 49,90</h5>
                            </div>
                            <div className="produto">
                                <img width="52" src={livro} alt="" />
                                <h5 className="produto_nome">Produto 1</h5>
                                <div className="produto_quantidade">
                                    <label htmlFor="">QTD: </label>
                                    <input
                                        type="number"
                                        value="1"
                                        onChange={() => console.log('value')} 
                                    />
                                </div>
                                <h5 className="produto_preco">R$ 49,90</h5>
                            </div>
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
                                <h5>R$ 50,00</h5>
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
                                <button className="button">Continuar Compra</button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}