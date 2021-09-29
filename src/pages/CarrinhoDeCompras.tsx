import { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

//CONTEXT
import { Context } from '../contexts/AuthContext';
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

export function CarrinhoDeCompras() {

    const { authenticated } = useContext(Context);
    const { carrinhoItens, setCarrinhoItens } = useContext(CartContext);
    const history = useHistory();

    useEffect(() => {
        addProdutoCards();
    }, [addProdutoCards])

    function continuarCompra() {
        if(authenticated) {
            return (
                <Link to="/selecaoDeEndereco" className="button">Continuar Compra</Link>
            );
        } else {
            return (
                <Link to="/autenticacaoCarrinho" className="button">Continuar Compra</Link>
            )
        }
    }

    function calcularTotal() {
        if(carrinhoItens) {
            return carrinhoItens.reduce((sum:number, item:livroType) =>  
                sum += parseFloat(item.liv_preco), 0
            )
        }
    }

    function removeProduto(id:string) {
        let index = carrinhoItens.findIndex((item:livroType) => item.liv_id === id )
        carrinhoItens.splice(carrinhoItens[index], 1);
        setCarrinhoItens(carrinhoItens);
        history.push("/carrinhoDeCompras")

    }

    function addProdutoCards() {

        return carrinhoItens.map((item:any, index:number) => (
            <CarrinhoProduto 
                removeProduto={removeProduto}
                key={index}
                data={item}
            />
        ))
    }

    return (
        <>
            <Header numberOfItens={carrinhoItens.length} />
            <main>
                <div className="carrinhoDeCompras container">
                    <div className="row justify-content-center">
                        <div className="produtos col-12">
                            {addProdutoCards()}
                        </div>
                        <div className="total_carrinho col-12 col-md-4">
                            <div className="valores">
                                <p>Total</p>
                                <h5>R$ {calcularTotal()}</h5>
                            </div>
                            <div className="buttons">
                                <Link to="/" className="button">Voltar a Loja</Link>
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