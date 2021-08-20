import { Link } from 'react-router-dom';

import '../styles/livros.scss';
import livro from '../assets/images/livro.png';

export function Livros() {
    return (
        <>
            <div className="d-flex book">
                
                <div className="col-md-12 book__list">
                    <h5 className="book__list__title">Livros</h5>
                    <div className="book__list__cards">

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

                                <Link to="/#" className="button">Adicionar ao carrinho</Link>
                            
                            </div>
                        </div>
                        
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

                                <Link to="/#" className="button">Adicionar ao carrinho</Link>
                            
                            </div>
                        </div>
                        
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

                                <Link to="/#" className="button">Adicionar ao carrinho</Link>
                            
                            </div>
                        </div>
                        
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

                                <Link to="/#" className="button">Adicionar ao carrinho</Link>
                            
                            </div>
                        </div>
                        
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

                                <Link to="/#" className="button">Adicionar ao carrinho</Link>
                            
                            </div>
                        </div>
                        
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

                                <Link to="/#" className="button">Adicionar ao carrinho</Link>
                            
                            </div>
                        </div>
                        
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

                                <Link to="/#" className="button">Adicionar ao carrinho</Link>
                            
                            </div>
                        </div>

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

                                <Link to="/#" className="button">Adicionar ao carrinho</Link>
                            
                            </div>
                        </div>
                        

                    </div>

                </div>

            </div>

        
        </>
    );
}