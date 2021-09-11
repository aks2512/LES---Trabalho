import '../styles/carrinhoDeCompras.scss';

import livro from '../assets/images/livro.png';

export function CarrinhoProduto() {
    return (
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
    );
}