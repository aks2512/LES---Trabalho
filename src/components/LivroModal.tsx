import livro from '../assets/images/livro.png';

import '../styles/livroModal.scss';

type LivroModalProps = {
    closeModal:Function
}

export function LivroModal(props: LivroModalProps) {

    return (
        <div className="livroModal">
            <div className="boxMessage">
                <div onClick={() => props.closeModal()} className="close"></div>
                <div className="livroModal__img">
                    <img src={livro} alt="" />
                </div>
                <div className="livroModal__content">
                    <h4>Descrição do Produto</h4>
                    <div className="livroModal__content__description">
                        <p>Titulo: Banco do Brasil</p>
                        <p>Autor: Leonardo Huffman</p>
                        <p>Ano: 2020</p>
                        <p>Editora: Fundamento</p>
                        <p>Edição: 1</p>
                        <p>ISBN: 1049012940</p>
                        <p>Páginas: 200</p>
                        <p>Altura: 44</p>
                        <p>Largura: 18</p>
                        <p>Peso: 200g</p>
                        <p>Profundidade: 18</p>
                    </div>
                </div>
                <button className="button">Adicionar ao carrinho</button>
            </div>
        </div>
    );
}