import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import homeBanner from '../assets/images/banner.png';
import { Livros } from '../components/Livros';

export function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <img src={homeBanner} alt="" />
                    <Livros/>
                </div>
            </main>
            <Footer />
        </>
    )
}