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
  const [endereco, setEndereco] = useState({
    end_nome: "",
    end_tipo: "",
    end_tresidencia: "",
    end_tlogradouro: "",
    end_pais: "",
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
            <select
              name="end_tipo"
              id=""
              onChange={(e: any) => handleEndereco(e)}
              value={endereco.end_tipo}
            >
              <option value="entrega">Entrega</option>
              <option value="cobranca">Cobrança</option>
              <option value="ambos">Cobrança/Entrega</option>
            </select>
          </div>
          <div className="labeled__input">
            <label htmlFor="end_tipo_residencia">Tipo de Residência</label>
            <select
              name="end_tresidencia"
              id=""
              onChange={(e: any) => handleEndereco(e)}
              value={endereco.end_tresidencia}
            >
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
              <option value="condominio">Condomínio</option>
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
          <select
            name="end_pais"
            id=""
            onChange={(e: any) => handleEndereco(e)}
            value={endereco.end_pais}
          >
            <option value="brasil">Brasil</option>
            <option value="argentina">Argentina</option>
          </select>
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
          <select 
            name="" 
            onChange={(e: any) => handleEndereco(e)}
            value={endereco.end_tipo}>
            <option value="avenida">Avenida</option>
            <option value="rua">Rua</option>
            <option value="condominio">Condominio</option>
            <option value="campo">Campo</option>
            <option value="area">Área</option>
          </select>
          <input
            type="number"
            name="end_numero"
            placeholder="Numero"
            onChange={(e: any) => handleEndereco(e)}
          />
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
