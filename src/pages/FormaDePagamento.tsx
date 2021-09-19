import { useState } from "react";
import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

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

    const [numeroDeCartoes, setNumeroDeCartoes] = useState(1);
    const [numeroDeCupons, setNumeroDeCupons] = useState(0);

    function addPaymentCardFields() {
        setNumeroDeCartoes(numeroDeCartoes+1)
    }

    function getPaymentCardFields() {
        let selects = [];
        
        for (let i = 0; i < numeroDeCartoes; i++) {
            selects.push(getCardFields(i));
        }
        console.log(selects);
        return selects;

    }

    function getCardFields(index: number) {
        return (
            <>
                <select name="cartoes[]" id={"cartoes_"+index}>
                    {optionsCartoes.map((option,index) =>
                        <option key={index} value={option.value}>{option.label}</option>
                    )}
                </select>   
                <input name="cartoes_valor[]" type="text" />
            </>
        )
    }

    function addPaymentCupomFields() {
        setNumeroDeCupons(numeroDeCupons+1)
    }

    function getPaymentCupomFields() {
        let selects = [];
        
        for (let i = 0; i < numeroDeCupons; i++) {
            selects.push(getCupomFields(i));
        }
        console.log(selects);
        return selects;

    }

    function getCupomFields(index: number) {
        return (
            <>
                <select name="cupons[]" id={"cupom_"+index}>
                    {optionsCupons.map((option,index) =>
                        <option key={index} value={option.value}>{option.label}</option>
                    )}
                </select>   
            </>
        )
    }

    return (
        <>
            <Header/>
            <main>
                <div className="carrinhoDeCompras container">
                    <div className="row">
                        <div className="produtos col-12 col-md-8">
                            <CarrinhoProduto />
                            <CarrinhoProduto />
                            <CarrinhoProduto />
                        </div>
                        <div className="total col-12 col-md-4">

                            <div className="valores">
                                <p>Total</p>
                                <h5>R$ 550,00</h5>
                            </div>

                            <form>
                                <div className="formasDePagamento">
                                    <div className="formaDePagamento__cartoes">
                                        <button type="button" onClick={ () => addPaymentCardFields()} className="btn__addPagamentoCartao">Adicionar cartão</button>
                                        {getPaymentCardFields()}
                                    </div>
                                    <div className="formaDePagamento__cupons">
                                        <button type="button" onClick={ () => addPaymentCupomFields()} className="btn__addPagamentoCupons">Adicionar Cupom</button>
                                        {getPaymentCupomFields()}
                                    </div>
                                </div>

                                <div className="cupomDeDesconto">
                                    <input type="text" placeholder="Insira um cupom promocional" />
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