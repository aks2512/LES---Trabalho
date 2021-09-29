import { MouseEvent, useLayoutEffect, useState } from 'react';
import api from '../api';
import '../styles/livros.scss';

import { Livro } from './Livro';
import { LivroModal } from './LivroModal';

type livrosProps = {
    carrinhoItens:livroType[],
    setCarrinhoItens:Function
}

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
    liv_quantidade?: string,
    liv_ativo?: true,
}


export function Livros(props:livrosProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [livros, setLivros] = useState<livroType[]>();
    const [livroId, setLivroId] = useState<string>();
    const [livroModal, setLivroModal] = useState(false);

	function addCarrinho(data:livroType) {
        let isExist = props.carrinhoItens.find((item) => item.liv_id === data.liv_id);
        if(isExist === undefined) {
            data.liv_quantidade = '1';
            props.carrinhoItens.push(data);
            props.setCarrinhoItens(props.carrinhoItens);
        }
	}

    useLayoutEffect(() => {
        async function getLivros() {
            let consulta = await api.post('/livros/read', {"type": "livro"});
    
            setLivros(consulta.data);
            setIsLoading(true);
    
        }

        getLivros();
    }, [])

    async function openLivroModal(value: string) {
        setLivroId(value);
        setLivroModal(true);
    }

    function closeLivroModal() {
        setLivroModal(false);
    }

    function renderLivros() {
        if (livros) {
            return livros.map((livro, index) => 
                    (
                    <Livro
                        key={index}
                        data={livro}
                        openModal={openLivroModal}
                        addCarrinho={addCarrinho}
                    />
                    )
            )
        }
    }
    
    return (
        <>
            <div className="d-flex book">
                
                <div className="col-md-12 book__list">
                    <h5 className="book__list__title">Livros</h5>
                    <div className="book__list__cards">
                        {isLoading && renderLivros()}
                        {livroModal ? <LivroModal liv_id={livroId} closeModal={closeLivroModal} /> : null}
                    </div>
                </div>
            </div>
        </>
    );
}