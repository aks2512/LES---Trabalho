import { useContext, useLayoutEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../api";

import { CarrinhoProduto } from "../components/CarrinhoProduto";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

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
    liv_altura: string,
    liv_peso: string,
    liv_profundidade: string,
    liv_descricao?: string,
    liv_estoque?: string,
    liv_custo?: string,
    liv_mlucro?: string,
    liv_preco: string,
    liv_cbarras?: string,
    liv_quantidade: string,
    liv_ativo?: true,
}

type enderecoType = {
    end_id: string,
    end_nome: string,
    end_cep: string
}

type itemType = {
    ite_peso: string,
    ite_comprimento: string,
    ite_altura: string,
    ite_largura: string
}

type pedidosType = {
    carrinhoItens:livroType[],
    ped_end_ent_id: string,
    ped_end_cob_id: string,
    ped_valor: string,
    ped_status: string
}

export function SelecaoDeEndereco() {
    const [selectCobranca, setSelectCobranca] = useState<number>(0);
    const [selectEntrega, setSelectEntrega] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(false);
    const [enderecosCobrancaData, setEnderecosCobrancaData] = useState<enderecoType[]>();
    const [enderecosEntregaData, setEnderecosEntregaData] = useState<enderecoType[]>();
    const history = useHistory();
    const { carrinhoItens, setCarrinhoItens, setPedidos, pedidos } = useContext(CartContext);
    const [total, setTotal] = useState(0.00);
    const [totalComFrete, setTotalComFrete] = useState(0.00);
    const [freteValor, setFreteValor] = useState(0.00);

    useLayoutEffect(() => {
        if (carrinhoItens.length === 0) {
            history.push('/')
        }

        const getEnderecosCobrancaData = async () => {
            let response = await api.post('/enderecos/readCobranca', { "type": "endereco" });
            let data: enderecoType[];
            data = response.data;
            setEnderecosCobrancaData(data);
            setIsLoading(true);
        }
        
        const getEnderecosEntregaData = async () => {
            let response = await api.post('/enderecos/readEntrega', { "type": "endereco" });
            let data: enderecoType[];
            data = response.data;
            setEnderecosEntregaData(data);
            setIsLoading(true);
        }
        
        getEnderecosCobrancaData();
        getEnderecosEntregaData();
        calcularTotal();
        

    }, [carrinhoItens, setEnderecosCobrancaData, setEnderecosEntregaData]);

    function getEnderecoCobranca() {
        if (isLoading === true) {
            if (enderecosCobrancaData) {
                if (enderecosCobrancaData.length > 0) {
                    return enderecosCobrancaData.map((endereco: enderecoType, index: number) => (
                        <option key={index} value={index}>{endereco.end_nome}</option>
                    ));
                }
            }
        }
    }

    function getEnderecoEntrega() {
        if (isLoading === true) {
            if (enderecosEntregaData) {
                if (enderecosEntregaData.length > 0) {
                    return enderecosEntregaData.map((endereco: enderecoType, index: number) => (
                        <option key={index} value={index}>{endereco.end_nome}</option>
                    ));
                }
            }
        }
    }

    async function calcularFrete(value: number) {
        setSelectEntrega(value)
        let items:itemType[] = new Array();
        carrinhoItens.forEach((item:livroType) => {
            items.push({
                ite_peso: item.liv_peso,
                ite_comprimento: item.liv_profundidade,
                ite_altura: item.liv_altura,
                ite_largura: item.liv_profundidade
            })
        })
        if(enderecosEntregaData) {
            let response = await api.post('/frete/calcular', {
                    type: 'frete',
                    fre_destino: enderecosEntregaData[value].end_cep,
                    items: items,
                });
            setFreteValor(response.data[0].Valor);
            let total_com_frete = parseFloat(response.data[0].Valor.replace(',', '.')) + calcularTotal();
            total_com_frete = total_com_frete.toFixed(2);
            setTotalComFrete(total_com_frete)
        }

    }

    function removeProduto(id: string) {
        let index = carrinhoItens.findIndex((item: livroType) => item.liv_id === id)
        carrinhoItens.splice(carrinhoItens[index], 1);
        setCarrinhoItens(carrinhoItens);
        setFreteValor(0.00);
        setTotalComFrete(0.00);
        if (carrinhoItens.length !== 0) {
            if (selectEntrega)
                calcularFrete(selectEntrega)
            history.push("/selecaoDeEndereco")
        } else {
            history.push("/")
        }
    }

    function calcularTotal() {
        if (carrinhoItens) {
            let totali = carrinhoItens.reduce((sum: number, item: livroType) =>
                sum += parseFloat(item.liv_preco) * parseInt(item.liv_quantidade), 0
            )
            setTotal(totali)
            return totali;
        }
    }

    function addPedidos() {
        if(enderecosEntregaData && enderecosCobrancaData)
        setPedidos({
            carrinhoItens: carrinhoItens,
            ped_end_ent_id: enderecosEntregaData[selectEntrega].end_id,
            ped_end_cob_id: enderecosCobrancaData[selectCobranca].end_id,
            ped_valor: totalComFrete,
            ped_status: "PAGO"
        });
        console.log(pedidos)
        history.push("/formaDePagamento");
    }

    return (
        <>
            <Header numberOfItens={carrinhoItens.length} />
            <main>
                <div className="carrinhoDeCompras container">
                    <div className="row">
                        <div className="produtos col-12 col-md-8">
                            {carrinhoItens.map((item: any, index: number) => (
                                <CarrinhoProduto
                                    removeProduto={removeProduto}
                                    key={index}
                                    data={item}
                                    disabled={true}
                                    calcularTotal={calcularTotal}
                                />
                            ))}
                        </div>
                        <div className="total col-12 col-md-4">
                            <div className="valores">
                                <p>Produtos</p>
                                <h5>R$ {total}</h5>
                            </div>

                            <div id="frete-valor" className="valores">
                                <p>Frete</p>
                                <h5>R$ {(freteValor)}</h5>
                            </div>

                            <div id="total-com-frete" className="valores">
                                <p>Total</p>
                                <h5>R$ {(totalComFrete)}</h5>
                            </div>

                            <div className="selecionar_endereco">

                                <select onChange={(e) => setSelectCobranca(parseInt(e.target.value))} value={selectCobranca} name="endereco_cobranca" id="endereco_cobranca">
                                    {getEnderecoCobranca()}
                                </select>

                                <select onChange={(e) => calcularFrete(parseInt(e.target.value))} value={selectEntrega} name="endereco_entrega" id="endereco_entrega">
                                    {getEnderecoEntrega()}
                                </select>

                            </div>

                            <div className="buttons">
                                <button style={{ fontSize: '16px', textDecoration: 'none' }} onClick={() => addPedidos()} className="button">Continuar Compra</button>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}