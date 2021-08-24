import '../styles/enderecosForm.scss'
import api from '../api';
import { useHistory } from 'react-router-dom';
import {  FormEvent, useState, ChangeEvent} from 'react';

type endProps = {
    index?:string
}

export function Endereco(props:endProps) {
    const history = useHistory();
    const [endereco, setEndereco] = useState({});

    /*  "end_nome":'',
        "end_tipo":'',
        "end_tipo_residencia":'',
        "end_pais":'',
        "end_cep":'',
        "end_numero":'',
        "end_logradouro":'',
        "end_complemento" :'',
        "end_bairro":'',
        "end_cidade":'',
        "end_estado":'' */

    function handleEndereco(e:ChangeEvent<HTMLInputElement>){
        const value = e.target.value;
        setEndereco({
            ...endereco,
            [e.target.name]: value
        });
        console.log(endereco)
    }

    return (
        <>
            <hr></hr>
            <div className="enderecos__form justify-content-between">
                <input type="text" name="end_nome" placeholder="Nome do Endereco"  onChange={e=>handleEndereco(e)}/>
                <div className="enderecos__form__tipos">
                    <label htmlFor="end_tipo">Tipo de Endereço</label>
                    <select name="end_tipo" id="">
                        <option value="entrega">Entrega</option>
                        <option value="cobranca">Cobrança</option>
                    </select>
                    <label htmlFor="end_tipo_residencia">Tipo de Residência</label>
                    <select name="end_tipo_residencia" id="">
                        <option value="casa">Casa</option>
                        <option value="apartamento">Apartamento</option>
                        <option value="condominio">Condomínio</option>
                    </select>
                </div>
                <div className="enderecos__form__outros">
                    <input type="text" name="end_cep" placeholder="CEP" onChange={e=>handleEndereco(e)}/>
                </div>
                <div className="enderecos__form__outros">
                    <select name="end_pais" id="">
                        <option value="brasil">Brasil</option>
                        <option value="argentina">Argentina</option>
                    </select>
                    <input type="text" name="cidade" placeholder="Cidade" />
                    <input type="text" name="estado" placeholder="Estado" />
                    <input type="text" name="bairro" placeholder="Bairro" />
                </div>
                <div className="enderecos__form__detalhesRua">
                    <input type="text" name="logradouro" placeholder="Logradouro" />
                    <input type="number" name="numero" placeholder="Numero" />
                </div>
            </div>
        </>
    )
}