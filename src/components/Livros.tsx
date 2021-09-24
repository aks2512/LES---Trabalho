import { useLayoutEffect, useState } from 'react';
import api from '../api';
import '../styles/livros.scss';

import { Livro } from './Livro';
import { LivroModal } from './LivroModal';

type livroType = {
    liv_id: number,
    liv_nome: string,
    liv_editora: string,
    liv_preco: number
}

export function Livros() {
    const [isLoading, setIsLoading] = useState(false);
    const [livros, setLivros] = useState<livroType[]>();
    const [livroModal, setLivroModal] = useState(false);

    useLayoutEffect(() => {
        async function getLivros() {
            let consulta = await api.post('/livros/read', {"type": "livro"});
    
            setLivros(consulta.data);
            setIsLoading(true);
    
        }

        getLivros();
    }, [])

    function openLivroModal() {
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
                        key={'livro_'+index}
                        liv_nome={livro.liv_nome}
                        liv_editora={livro.liv_editora}
                        liv_preco={livro.liv_preco}
                        liv_id={livro.liv_id}
                        openModal={openLivroModal}
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
                        {livroModal ? <LivroModal closeModal={closeLivroModal} /> : null}
                    </div>
                </div>
            </div>
        </>
    );
}