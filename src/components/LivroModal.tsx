import { useLayoutEffect, useState } from 'react';
import api from '../api';
import livro from '../assets/images/livro.png';

import '../styles/livroModal.scss';

type LivroProps = {
    liv_id?: string,
    closeModal:Function
}

type LivroType = {
    liv_id: number,
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



export function LivroModal(props: LivroProps) {
    const [isLoading, setLoading] = useState(false);
    const [livroData, setLivroData] = useState<LivroType>();

    useLayoutEffect(() => {
        async function getLivro() {
            const consulta = await api.post('/livros/readId', {"type": "livro", "liv_id": props.liv_id});
            const data = consulta.data;
            setLivroData(data[0]);
            setLoading(true);
        }

        getLivro();
    }, [])

    return (
        <div className="livroModal">
            <div className="boxMessage">
                <div onClick={() => props.closeModal()} className="close"></div>
                <div className="livroModal__img">
                    <img src={livro} alt="" />
                </div>
                <div className="livroModal__content">
                    <h4>Descrição do Produto</h4>
                    {isLoading == true && livroData && (
                        <div className="livroModal__content__description">
                            <p>Titulo: {livroData.liv_nome}</p>
                            <p>Autor: {livroData.liv_autor}</p>
                            <p>Ano: {livroData.liv_ano}</p>
                            <p>Editora: {livroData.liv_editora}</p>
                            <p>Edição: {livroData.liv_edicao}</p>
                            <p>ISBN: {livroData.liv_isbn}</p>
                            <p>Páginas: {livroData.liv_npaginas}</p>
                            <p>Altura: {livroData.liv_altura}</p>
                            <p>Peso: {livroData.liv_peso}</p>
                            <p>Profundidade: {livroData.liv_profundidade}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}