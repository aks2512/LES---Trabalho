import { MouseEvent, useContext, useState } from 'react';
import '../styles/carrinhoDeCompras.scss';

import livro from '../assets/images/livro.png';

import { CartContext } from '../contexts/CartContext';

type livroType = {
    liv_id?: number,
    liv_valor?: number,
    liv_nome?: string,
    liv_autor?: string,
    liv_categoria?: string,
    liv_ano?: string,
    liv_titulo?: string,
    liv_editora?: string,
    liv_edicao?: string,
    liv_isbn?: string,
    liv_npaginas?: number,
    liv_sinopse?: string,
    liv_altura?: number,
    liv_peso?: number,
    liv_profundidade?: number,
    liv_descricao?: string,
    liv_estoque: number,
    liv_custo?: number,
    liv_mlucro?: number,
    liv_preco?: number,
    liv_cbarras?: string,
    liv_quantidade: string,
    liv_ativo?: true,
}

type carrinhoDeComprasProps = {
    data: livroType,
    removeProduto: Function
}

export function CarrinhoProduto(props:carrinhoDeComprasProps) {
    const { carrinhoItens, setCarrinhoItens } = useContext(CartContext);
    const [ quantidade, setQuantidade ] = useState(props.data.liv_quantidade)

    function addQuantidade(value:string) {
        let index = carrinhoItens.findIndex((item:livroType) => item.liv_id === props.data.liv_id )
        carrinhoItens[index].liv_quantidade = value;
        setCarrinhoItens(carrinhoItens)
        setQuantidade(carrinhoItens[index].liv_quantidade);
    }

    return (
        <div className="produto">
            <div onClick={() => props.removeProduto(props.data.liv_id) } className="close"></div>
            <img width="52" src={livro} alt="" />
            <h5 className="produto_nome">{props.data.liv_nome}</h5>
            <div className="produto_quantidade">
                <label htmlFor="">QTD: </label>
                <input
                    type="number"
                    pattern="[0-9]*"
                    value={quantidade}
                    max={props.data.liv_estoque}
                    onChange={(e) => addQuantidade(e.currentTarget.value)} 
                />
            </div>
            <h5 className="produto_preco">{props.data.liv_preco}</h5>
        </div>
    );
}