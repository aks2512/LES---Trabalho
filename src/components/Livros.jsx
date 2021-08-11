import '../styles/livros.scss';
import livro from '../assets/images/livro.png';

export function Livros() {
    return (
        <>
            <div className="d-flex book">
                <div className="col-md-4 book__menu">
                    <div className="book__menu__item">
                        <p>
                            Categorias
                        </p>
                        <ul>
                            <li>Administracao</li>
                        </ul>
                    </div>
                    <div className="book__menu__item">
                        <p>
                            Autores
                        </p>
                        <ul>
                            <li>Autor</li>
                        </ul>
                    </div>
                    <div className="book__menu__item">
                        <p>
                            Editoras
                        </p>
                        <ul>
                            <li>Editora</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8 book__list">
                    <h5 className="book__list__title">Livros</h5>
                    <div className="book__list__cards">

                        <div className="card">
                            <div className="card__image">
                                <img src={livro} alt="" />
                            </div>
                            <div className="card__content">
                                <a href="">
                                    <p>Livro: Banco Brasil</p>
                                    <span>Equipe Alfacon</span>
                                    <h5>R$ 49,00</h5>
                                </a>

                                <a href="" className="button">Adicionar ao carrinho</a>
                            
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card__image">
                                <img src={livro} alt="" />
                            </div>
                            <div className="card__content">
                                <a href="">
                                    <p>Livro: Banco Brasil</p>
                                    <span>Equipe Alfacon</span>
                                    <h5>R$ 49,00</h5>
                                </a>

                                <a href="" className="button">Adicionar ao carrinho</a>
                            
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card__image">
                                <img src={livro} alt="" />
                            </div>
                            <div className="card__content">
                                <a href="">
                                    <p>Livro: Banco Brasil</p>
                                    <span>Equipe Alfacon</span>
                                    <h5>R$ 49,00</h5>
                                </a>

                                <a href="" className="button">Adicionar ao carrinho</a>
                            
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card__image">
                                <img src={livro} alt="" />
                            </div>
                            <div className="card__content">
                                <a href="">
                                    <p>Livro: Banco Brasil</p>
                                    <span>Equipe Alfacon</span>
                                    <h5>R$ 49,00</h5>
                                </a>

                                <a href="" className="button">Adicionar ao carrinho</a>
                            
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card__image">
                                <img src={livro} alt="" />
                            </div>
                            <div className="card__content">
                                <a href="">
                                    <p>Livro: Banco Brasil</p>
                                    <span>Equipe Alfacon</span>
                                    <h5>R$ 49,00</h5>
                                </a>

                                <a href="" className="button">Adicionar ao carrinho</a>
                            
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card__image">
                                <img src={livro} alt="" />
                            </div>
                            <div className="card__content">
                                <a href="">
                                    <p>Livro: Banco Brasil</p>
                                    <span>Equipe Alfacon</span>
                                    <h5>R$ 49,00</h5>
                                </a>

                                <a href="" className="button">Adicionar ao carrinho</a>
                            
                            </div>
                        </div>
                        
                        <div className="card">
                            <div className="card__image">
                                <img src={livro} alt="" />
                            </div>
                            <div className="card__content">
                                <a href="">
                                    <p>Livro: Banco Brasil</p>
                                    <span>Equipe Alfacon</span>
                                    <h5>R$ 49,00</h5>
                                </a>

                                <a href="" className="button">Adicionar ao carrinho</a>
                            
                            </div>
                        </div>
                        

                    </div>

            <ul className="book__list__pagination">
                <li><a href=""> Prev </a></li>
                <li><a href=""> 1 </a></li>
                <li><a href=""> 2 </a></li>
                <li><a href=""> 3 </a></li>
                <li><a href=""> 4 </a></li>
                <li><a href=""> 5 </a></li>
                <li><a href=""> Next </a></li>
            </ul>
                </div>

            </div>

        
        </>
    )
}