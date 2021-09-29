import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

//CONTEXT
import { CartContext } from "../contexts/CartContext";

import '../styles/carrinhoDeCompras.scss';

cors();

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

export function SelecaoDeEndereco() {
    const history = useHistory();
    const { carrinhoItens, setCarrinhoItens } = useContext(CartContext);
    const [freteData, setFreteData] = useState({
        sCepOrigem: '08770320',
        sCepDestino: '08770430',
        nVlPeso: '1',
        nCdFormato: '1',
        nVlComprimento: '20',
        nVlAltura: '20',
        nVlLargura: '20',
        nCdServico: ['04014', '04510'], //Array com os códigos de serviço
        nVlDiametro: '0',
    });

    function removeProduto(id:string) {
        let index = carrinhoItens.findIndex((item:livroType) => item.liv_id === id )
        carrinhoItens.splice(carrinhoItens[index], 1);
        setCarrinhoItens(carrinhoItens);
        history.push("/selecaoDeEndereco")
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
                                <p>Produtos</p>
                                <h5>R$ {calcularTotal()}</h5>
                            </div>

                            <div className="valores">
                                <p>Frete</p>
                                <h5>R$ 50,00 | Prazo</h5>
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