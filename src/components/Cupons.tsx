import { useEffect, useState } from "react";
import api from "../api";

type cupomType = {
    cup_id?: number,
    cup_tipo: string,
    cup_valor: number,
    cup_cli_id: number,
    cup_codigo: string,
    cup_validade: string
}

export function Cupons() {
    const [cupons, setCupons] = useState<cupomType[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function reqCupom() {
            let response = await api.post('/cupons/read', {"type": "cupom"});
            setCupons(response.data);
        }

        reqCupom();
        setIsLoading(true);
    });

    function getCupom() {
        if (isLoading === true) {
            if (cupons) {
                if (cupons.length > 0) {
                    return cupons.map((cupom: cupomType, index: number) => (
                        <tr>
                            <td>{cupom.cup_codigo}</td>
                            <td>{cupom.cup_tipo}</td>
                            <td>R$ {cupom.cup_valor}</td>
                        </tr>
                    ));
                }
            }
        }
    }

    return (
        <div className="verCupons">
            <table>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {getCupom()}
                </tbody>
            </table>
        </div>
    );
}