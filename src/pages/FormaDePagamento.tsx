import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

//CONTEXT
import { CartContext } from "../contexts/CartContext";

import '../styles/carrinhoDeCompras.scss';

type livroType = {
    liv_id: string,
    liv_valor?: string,
    liv_nome?: string,
    liv_autor?: string,
    liv_categoria?: string,
    liv_ano?: string,
    liv_titulo?: string,
    liv_editora?: string,
    liv_edicao?: string,
    liv_isbn?: string,
    liv_npaginas?: string,
    liv_sinopse?: string,
    liv_altura?: string,
    liv_peso?: string,
    liv_profundidade?: string,
    liv_descricao?: string,
    liv_estoque?: string,
    liv_custo?: string,
    liv_mlucro?: string,
    liv_preco: string,
    liv_cbarras?: string,
    liv_quantidade?: string,
    liv_ativo?: true,
}

export function FormaDePagamento() {

    const history = useHistory();
    
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
    const { carrinhoItens, setCarrinhoItens } = useContext(CartContext);

    useEffect(() => {
        if(carrinhoItens.length === 0) {
            history.push('/')
        }
    }, [carrinhoItens])

    function removeProduto(id:string) {
        let index = carrinhoItens.findIndex((item:livroType) => item.liv_id === id )
        carrinhoItens.splice(carrinhoItens[index], 1);
        setCarrinhoItens(carrinhoItens);
        if(carrinhoItens.length !== 0)
            history.push("/selecaoDeEndereco")
        else
            history.push("/")
    }

    function calcularTotal() {
        if(carrinhoItens) {
            return carrinhoItens.reduce((sum:number, item:livroType) =>  
                sum += parseFloat(item.liv_preco), 0
            )
        }
    }

    return (
        <>
            <Header numberOfItens={carrinhoItens.length} />
            <main>
                <div className="carrinhoDeCompras container">
                    <div className="row">
                        <div className="produtos col-12 col-md-8">
                            {carrinhoItens.map((item:any, index:number) => (
                                <CarrinhoProduto 
                                    removeProduto={removeProduto}
                                    key={index}
                                    data={item}
                                />
                            ))}
                        </div>
                        <div className="total col-12 col-md-4">

                            <div className="valores">
                                <p>Total</p>
                                <h5>R$ {calcularTotal()}</h5>
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