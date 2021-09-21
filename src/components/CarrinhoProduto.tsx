import { MouseEvent } from 'react';
import '../styles/carrinhoDeCompras.scss';

import livro from '../assets/images/livro.png';

export function CarrinhoProduto() {

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
    );
}