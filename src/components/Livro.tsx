import { Link } from 'react-router-dom';

import '../styles/livros.scss';
import livro from '../assets/images/livro.png';

type LivroProps = {
    openModal:Function
}

export function Livro(props: LivroProps) {

    return (
        <div className="card">
            <div className="card__image">
                <img src={livro} alt="" />
            </div>
            <div className="card__content">
                <Link to="/#">
                    <p>Livro: Banco Brasil</p>
                    <span>Equipe Alfacon</span>
                    <h5>R$ 49,00</h5>
                </Link>

                <Link to="/#" onClick={() => props.openModal()} className="button">Adicionar ao carrinho</Link>
            
            </div>
        </div>
    );
}