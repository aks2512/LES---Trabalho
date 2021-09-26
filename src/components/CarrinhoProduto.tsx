import { MouseEvent } from 'react';
import '../styles/carrinhoDeCompras.scss';

import livro from '../assets/images/livro.png';

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
    liv_estoque?: number,
    liv_custo?: number,
    liv_mlucro?: number,
    liv_preco?: number,
    liv_cbarras?: string,
    liv_ativo?: true,
}

type carrinhoDeComprasProps = {
    data: livroType,
}

export function CarrinhoProduto(props:carrinhoDeComprasProps) {

    function removeProduto(e:MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        let close = e.currentTarget;
        let produto = close.parentNode;
        if(produto) {
            produto.parentNode?.removeChild(produto);
        }
    }

    return (
        <div className="produto">
            <div onClick={(e) => removeProduto(e) } className="close"></div>
            <img width="52" src={livro} alt="" />
            <h5 className="produto_nome">{props.data.liv_nome}</h5>
            <div className="produto_quantidade">
                <label htmlFor="">QTD: </label>
                <input
                    type="number"
                    value="1"
                    onChange={() => console.log('value')} 
                />
            </div>
            <h5 className="produto_preco">{props.data.liv_preco}</h5>
        </div>
    );
}