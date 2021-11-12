import { useContext, useState } from "react";

import { CartContext } from "../contexts/CartContext";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Pedido } from "../components/Pedido";
import { Cupons } from "../components/Cupons";

import '../styles/verPedidos.scss';

export function VerPedidos() {
    const { carrinhoItens, setCarrinhoItens } = useContext(CartContext);
    const [ aba, setAba] = useState('historico_pedidos');
    
    return(
        <>
            <Header numberOfItens={carrinhoItens.length} />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="menu__pedidosECupons">
                                <li onClick={() => setAba('historico_pedidos')}>Historico de pedidos</li>
                                <li onClick={() => setAba('cupons')} >cupons</li>
                            </ul>
                        </div>
                        <div className="col-md-8">
                            {aba === 'historico_pedidos' && (
                                <Pedido />
                            )}
                            {aba === 'cupons' && (
                                <Cupons />
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}