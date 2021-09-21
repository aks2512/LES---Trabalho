import { useState } from 'react';
import '../styles/livros.scss';

import { Livro } from './Livro';
import { LivroModal } from './LivroModal';

export function Livros() {

    const [livroModal, setLivroModal] = useState(false);

    function openLivroModal() {
        setLivroModal(true);
    }

    function closeLivroModal() {
        setLivroModal(false);
    }
    
    return (
        <>
            <div className="d-flex book">
                
                <div className="col-md-12 book__list">
                    <h5 className="book__list__title">Livros</h5>
                    <div className="book__list__cards">
                        <Livro openModal={openLivroModal} />
                        <Livro openModal={openLivroModal} />
                        <Livro openModal={openLivroModal} />
                        <Livro openModal={openLivroModal} />
                        <Livro openModal={openLivroModal} />
                        <Livro openModal={openLivroModal} />
                        <Livro openModal={openLivroModal} />
                        <Livro openModal={openLivroModal} />
                        {livroModal ? <LivroModal closeModal={closeLivroModal} /> : null}

                    </div>
                </div>
            </div>
        </>
    );
}