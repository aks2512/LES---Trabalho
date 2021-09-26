import { useContext } from "react";
import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

//CONTEXT
import { CartContext } from "../contexts/CartContext";

import '../styles/carrinhoDeCompras.scss';

export function FormaDePagamento() {
    
    const optionsCartoes = [
        {value: 'cartao1', label: 'cartao1'},
        {value: 'cartao2', label: 'cartao2'},
        {value: 'cartao3', label: 'cartao3'}
    ]

    const optionsCupons = [
        {value: 'cupon1', label: 'cupon1'},
        {value: 'cupon2', label: 'cupon2'},
        {value: 'cupon3', label: 'cupon3'}
    ]
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
                                <p>Total</p>
                                <h5>R$ 550,00</h5>
                            </div>

                            <form>
                                <div className="formasDePagamento">

                                <select name="cartao" id="cartao">
                                    {optionsCartoes.map((option,index) =>
                                        <option key={index} value={option.value}>{option.label}</option>
                                    )}
                                </select>

                                <select name="cupons" id="cupom">
                                    {optionsCupons.map((option,index) =>
                                        <option key={index} value={option.value}>{option.label}</option>
                                    )}
                                </select>  

                                </div>

                                <div className="buttons">
                                    <button className="button">Finalizar Compra</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}