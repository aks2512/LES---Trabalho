import "../styles/cartoesForm.scss";
import { useState, ChangeEvent, useEffect } from "react";

type endProps = {
  index?: number;
  callback: Function;
  endereco?: {
    car_nome: string,
    car_numero: string,
    car_validade: string,
    car_bandeira: string
  }
};

export function Cartao(props: endProps) {

  const bandeiraOpts = [
    {valor:"1",texto:"Elo"},
    {valor:"2",texto:"Mastercard"}
  ]

  const [cartao, setCartao] = useState({
    car_nome: "",
    car_numero: "",
    car_validade: "",
    car_bandeira: ""
  });

  useEffect(() => {
    props.callback(cartao, props.index);
  }, [cartao, props]);

  //Carrega os valores de cartoes
  function handleCartao(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) {
    console.log(cartao)
    const value = e.target.value;
    setCartao({
      ...cartao,
      [e.target.name]: value
    });
  }

  //Carrega o id dos cartoes do formulario
  const renderIndex = () => {
      if(typeof props.index !== undefined){
        return <div className="cartoes__form__index">Endereco - ({props.index})</div>
      }
  }

  //Renderiza os options setados nas variaveis
  const renderSelect = (opcoes:{valor:string,texto:string}[]) => {
    return opcoes.map((item,key)=>{
        return <option value={item.valor}>{item.texto}</option>
    })
  }

  return (
    <div>
      <div className="cartoes__form justify-content-between">
        <label htmlFor="car_nome">Nome do Cartão</label>
        <input
          type="text"
          name="car_nome"
          className="cartoes__form__titulo"
          placeholder="Nome do Cartão"
          value={cartao.car_nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleCartao(e)}
          required/>
        <label htmlFor="car_numero">Número do Cartão</label>
        <input
          type="text"
          name="car_numero"
          className="cartoes__form__titulo"
          placeholder="Número do Cartão"
          value={cartao.car_numero}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleCartao(e)}
          required/>
        <label htmlFor="car_validade">Validade do Cartão</label>
        <input
          type="date"
          name="car_validade"
          className="cartoes__form__titulo"
          placeholder="Validade do Cartão"
          value={cartao.car_validade}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleCartao(e)}
          required/>
          <label htmlFor="car_bandeira">Bandeira do Cartão</label>
          <select name='car_bandeira' onChange={(e:ChangeEvent<HTMLSelectElement>)=>{handleCartao(e)}}>
              {renderSelect(bandeiraOpts)}
          </select>
      </div>
    </div>
  );
}
