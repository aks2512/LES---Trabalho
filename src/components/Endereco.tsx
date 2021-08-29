import "../styles/enderecosForm.scss";
import api from "../api";
import { useHistory } from "react-router-dom";
import { FormEvent, useState, ChangeEvent, useEffect } from "react";

type endProps = {
  index?: number;
  callback: Function;
  endereco?: {
    end_nome: string,
    end_tipo: string,
    end_tresidencia: string,
    end_tlogradouro: string,
    end_pais: string,
    end_cep:  string,
    end_numero: string,
    end_logradouro: string,
    end_complemento: string,
    end_bairro: string,
    end_cidade: string,
    end_estado: string
  }
};

export function Endereco(props: endProps) {
  const history = useHistory();

  const tresidenciaOpts = [
    {valor:"casa",texto:"Casa"},
    {valor:"apartamento",texto:"Apartamento"}
  ]

  const tlogradouroOpts = [
    {valor:"avenida",texto:"Avenida"},
    {valor:"rua",texto:"Rua"},
    {valor:"bairro",texto:"Bairro"}
  ]

  const tipoOpts = [
    {valor:"entrega",texto:"Entrega"},
    {valor:"cobranca",texto:"Cobrança"},
    {valor:"ambos",texto:"Entrega e Cobrança"}
  ]

  const paisOpts = [
    {valor:"brasil",texto:"Brasil"},
    {valor:"argentina",texto:"Argentina"}
  ]

  const [endereco, setEndereco] = useState({
    end_nome: "",
    end_tipo: tipoOpts[0].valor,
    end_tresidencia: tresidenciaOpts[0].valor,
    end_tlogradouro: tlogradouroOpts[0].valor,
    end_pais: "brasil",
    end_cep:  "",
    end_numero: "",
    end_logradouro: "",
    end_complemento: "",
    end_bairro: "",
    end_cidade: "",
    end_estado: ""
  });

  useEffect(() => {
    props.callback(endereco, props.index);
  }, [endereco]);

  function handleEndereco(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEndereco({
      ...endereco,
      [e.target.name]: value
    });
  }
  const renderIndex = () => {
      if(typeof props.index !== undefined){
        return <div className="enderecos__form__index">Endereco - ({props.index})</div>
      }
  }

  const renderSelect = (opcoes:{valor:string,texto:string}[]) => {
    return opcoes.map((item,key)=>{
        return <option value={item.valor}>{item.texto}</option>
    })
  }

  return (
    <div>
      <div className="enderecos__form justify-content-between animate__animated animate__backInDown">
        {renderIndex()}
        <label htmlFor="end_nome">Nome do Endereco</label>
        <input
          type="text"
          name="end_nome"
          className="enderecos__form__titulo"
          placeholder="Nome do Endereco"
          value={endereco.end_nome}
          onChange={(e: any) => handleEndereco(e)}
        />
        <div className="enderecos__form__tipos">
          <div className="labeled__input">
            <label htmlFor="end_tipo">Tipo de Endereço</label>
            <select name='end_tipo' onChange={(e:any)=>{handleEndereco(e)}}>
              {renderSelect(tipoOpts)}
            </select>
          </div>
          <div className="labeled__input">
            <label htmlFor="end_tresidencia">Tipo de Residência</label>
            <select name='end_tresidencia' onChange={(e:any)=>{handleEndereco(e)}}>
              {renderSelect(tresidenciaOpts)}
            </select>
          </div>
        </div>
        <div className="enderecos__form__outros">
          <input
            type="text"
            name="end_cep"
            placeholder="CEP"
            onChange={(e: any) => handleEndereco(e)}
            value={endereco.end_cep}
          />
        </div>
        <div className="enderecos__form__outros">
          <div className="labeled__input">
            <label htmlFor="end_pais">País</label>
            <select name='end_pais' onChange={(e:any)=>{handleEndereco(e)}}>
              {renderSelect(paisOpts)}
            </select>
          </div>
          <input
            type="text"
            name="end_estado"
            placeholder="Estado"
            onChange={(e: any) => handleEndereco(e)}
            value={endereco.end_estado}
          />
          <input
            type="text"
            name="end_cidade"
            placeholder="Cidade"
            onChange={(e: any) => handleEndereco(e)}
            value={endereco.end_cidade}
          />
          <input
            type="text"
            name="end_bairro"
            placeholder="Bairro"
            onChange={(e: any) => handleEndereco(e)}
            value={endereco.end_bairro}
          />
        </div>
        <div className="enderecos__form__detalhesRua">
          <input
            type="text"
            name="end_logradouro"
            placeholder="Logradouro"
            onChange={(e: any) => handleEndereco(e)}
          />
          <select name='end_tlogradouro' onChange={(e:any)=>{handleEndereco(e)}}>
              {renderSelect(tlogradouroOpts)}
          </select>
          <input
            type="number"
            name="end_numero"
            placeholder="Numero"
            onChange={(e: any) => handleEndereco(e)}
          />
          <input
            type="text"
            name="end_complemento"
            placeholder="Complemento"
            onChange={(e: any) => handleEndereco(e)}
          />
        </div>
        <div className="enderecos__form__complemento">
          <input
            type="textarea"
            name="end_observacao"
            placeholder="Observacao"
            onChange={(e: any) => handleEndereco(e)}
          />
        </div>
      </div>
    </div>
  );
}
