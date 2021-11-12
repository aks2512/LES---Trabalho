import { MouseEvent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";

import api from "../api";

//CONTEXT
import { CartContext } from "../contexts/CartContext";

import '../styles/carrinhoDeCompras.scss';

type livroType = {
    liv_id: string,
    liv_valor?: string,
    liv_nome?: string,
    liv_autor?: string,
    liv_categoria?: string,
    liv_ano?: string,
    liv_titulo?: string,
    liv_editora?: string,
    liv_edicao?: string,
    liv_isbn?: string,
    liv_npaginas?: string,
    liv_sinopse?: string,
    liv_altura?: string,
    liv_peso?: string,
    liv_profundidade?: string,
    liv_descricao?: string,
    liv_estoque?: string,
    liv_custo?: string,
    liv_mlucro?: string,
    liv_preco: string,
    liv_cbarras?: string,
    liv_quantidade?: string,
    liv_ativo?: true,
}

type cartaoType = {
    car_bandeira: string,
    car_cli_id: number,
    car_id: number,
    car_nome: string,
    car_numero: string,
    car_validade: string,
}

type cupomType = {
    cup_id?: number,
    cup_tipo: string,
    cup_valor: number,
    cup_cli_id: number,
    cup_codigo: string,
    cup_validade: string
}

export function FormaDePagamento() {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    const [cartoes, setCartoes] = useState<cartaoType[]>();
    const [cupons, setCupons] = useState<cupomType[]>();
    const { carrinhoItens, setCarrinhoItens, pedidos, setPedidos } = useContext(CartContext);
    const [total, setTotal] = useState<string|number>(pedidos.ped_valor);
    const [cupIndex, setCupIndex] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(carrinhoItens.length === 0) {
            history.push('/')
        }
        async function reqCartao() {
            let response = await api.post('/cartoes/read', {"type": "cartao"});
            setCartoes(response.data);
        }
        async function reqCupom() {
            let response = await api.post('/cupons/read', {"type": "cupom"});
            setCupons(response.data);
        }
        
        reqCartao();
        reqCupom();
        setIsLoading(true);
    }, [carrinhoItens])

    function removeProduto(id:string) {
        let index = carrinhoItens.findIndex((item:livroType) => item.liv_id === id )
        carrinhoItens.splice(carrinhoItens[index], 1);
        setCarrinhoItens(carrinhoItens);
        if(carrinhoItens.length !== 0)
            history.push("/selecaoDeEndereco")
        else
            history.push("/")
    }
    
    function getCartao() {
        if (isLoading === true) {
            if (cartoes) {
                if (cartoes.length > 0) {
                    return cartoes.map((cartao: cartaoType, index: number) => (
                        <option key={index} value={cartao.car_id}>Cartao{cartao.car_id}</option>
                    ));
                }
            }
        }
    }

    function getTotalComDesconto(index:string) {
        setCupIndex(index);
        console.log(index)
        if(cupons) {
            if(index !== '') {
                let novoValor = '';
                if(cupons[parseInt(index)].cup_tipo === 'troca') {
                    novoValor = (pedidos.ped_valor - cupons[parseInt(index)].cup_valor).toString();
                    novoValor = parseFloat(novoValor).toFixed(2);
                } else if(cupons[parseInt(index)].cup_tipo === 'promocional') {
                    novoValor = (pedidos.ped_valor * cupons[parseInt(index)].cup_valor).toString();
                }
                setTotal(novoValor);
                console.log(novoValor)
            }
        }
    }

    function getCupom() {
        if (isLoading === true) {
            if (cupons) {
                if (cupons.length > 0) {
                    return cupons.map((cupom: cupomType, index: number) => (
                        <option key={index} value={index}>{cupom.cup_codigo}</option>
                    ));
                }
            }
        }
    }

    function closeModal() {
        setShowModal(false);
        setTimeout(() => {
            setCarrinhoItens([]);
        }, 1000)
    }

    function geraStringAleatoria(tamanho:number) {
        var stringAleatoria = '';
        var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (var i = 0; i < tamanho; i++) {
            stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return stringAleatoria;
    }

    async function finalizarCompra(e:MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        console.log(pedidos)
        let carrinho = pedidos.carrinhoItens;
        let itensPedidos:any = [];
        carrinho.forEach((item:livroType) => {
            itensPedidos.push({
                "type": "itemPedido",
                ite_liv_id: item.liv_id,
                ite_quantidade: item.liv_quantidade
            })
        })
        await api.post('vendas/insert', {
            "type": "venda",
            "ven_total": total,
            "ven_cli_id": 207,
            "ven_endcob_id": pedidos.ped_end_cob_id,
            "ven_endent_id": pedidos.ped_end_ent_id,
            "ven_status": "PAGO",
            "itensPedidos": itensPedidos
        })
        if(total < 0) {
            await api.post('cupons/insert', {
                "type": "cupom",
                "cup_tipo": "troca", 
                "cup_valor": -total,
                "cup_codigo": geraStringAleatoria(4),
                "cup_cli_id": 207,
            })
        }
        if(cupons) {
            if(cupIndex) {
                await api.delete('cupons/delete', {data: {
                    "type": "cupom",
                    "cup_id": cupons[parseInt(cupIndex)].cup_id             
                }})
            }
        }
        console.log('teste')
        setShowModal(true);
        console.log(showModal)
    }

    return (
        <>
            <Header numberOfItens={carrinhoItens.length} />
            <main>
                <div className="carrinhoDeCompras container">
                    <div className="row">
                        <div className="produtos col-12 col-md-8">
                            {carrinhoItens.map((item:any, index:number) => (
                                <CarrinhoProduto 
                                    removeProduto={removeProduto}
                                    key={index}
                                    data={item}
                                    disabled={true}
                                />
                            ))}
                        </div>
                        <div className="total col-12 col-md-4">

                            <div className="valores">
                                <p>Total</p>
                                <h5>R$ {total}</h5>
                            </div>

                            <form>
                                <div className="formasDePagamento">

                                <select  name="cartao" id="cartao">
                                    {getCartao()}
                                </select>

                                <select  placeholder="selecione um cupom" onChange={(e) => getTotalComDesconto(e.target.value)} name="cupons" id="cupom">
                                    <option value={-1}>Selecione um Cupom</option>
                                    {getCupom()}
                                </select>  

                                </div>

                                <div className="buttons">
                                    <button onClick={(e) => finalizarCompra(e)} className="button">Finalizar Compra</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                {showModal ? 
                    <Modal 
                        message="Pagamento realizado com sucesso"
                        setShowModal={closeModal}
                    /> 
                : null}
            </main>
            <Footer/>
        </>
    );
}