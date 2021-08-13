import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Livros } from '../components/Livros';

export function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Livros/>
                </div>
            </main>
            <Footer />
        </>
    )
}