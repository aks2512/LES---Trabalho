import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import homeBanner from '../assets/images/banner.png';

export function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <img src={homeBanner} alt="" />
                <div className="col-md-4 book__listMenu">
                    <div className="menu__item">
                        <div className="menu__subitem">
                            Categorias
                        </div>
                        <ul className="category__items">
                            <li>Administracao</li>
                        </ul>
                    </div>
                    <div className="menu__item">
                        <div className="menu__subitem">
                            Autores
                        </div>
                        <ul className="category__items">
                            <li>Autor</li>
                        </ul>
                    </div>
                    <div className="menu__item">
                        <div className="menu__subitem">
                            Editoras
                        </div>
                        <ul className="category__items">
                            <li>Editora</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8 book__list">

                </div>
            </div>
            <Footer />
        </>
    )
}