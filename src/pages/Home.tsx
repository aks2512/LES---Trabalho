import { useContext } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Livros } from '../components/Livros';

//CONTEXT
import { CartContext } from '../contexts/CartContext';

export function Home() {
    const { carrinhoItens, setCarrinhoItens } = useContext(CartContext);
    return (
        <>
            <Header numberOfItens={carrinhoItens.length} />
            <main>
                <div className="container">
                    <Livros 
                        setCarrinhoItens={setCarrinhoItens}
                        carrinhoItens={carrinhoItens}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}