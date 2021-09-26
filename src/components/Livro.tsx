import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/livros.scss';
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

type livroProps = {
	data:livroType,
    openModal:Function,
	addCarrinho:Function
}

export function Livro(props: livroProps) {

    return (
        <div className="card">
            <div className="card__image">
                <img src={livro} alt="" />
            </div>
            <div className="card__content">
                <Link to="/#" id={''+props.data.liv_id} onClick={(e) => props.openModal(e.currentTarget.id)}>
                    <p>{props.data.liv_nome}</p>
                    <span>{props.data.liv_editora}</span>
                    <h5>R$ {props.data.liv_preco}</h5>
                </Link>

                <Link to="/#" onClick={() => props.addCarrinho(props.data)} className="button">Adicionar ao carrinho</Link>
            
            </div>
        </div>
    );
}