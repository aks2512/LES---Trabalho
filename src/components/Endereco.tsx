export function Endereco(props:any) {
    console.log(props)
    return (
        <>
            <hr></hr>
            <div className="endereco justify-content-between">
                <select className="col-md-12" name="" id="">
                    <option value="entrega">Entrega</option>
                    <option value="cobranca">Cobrança</option>
                </select>
                <input className="col-md-10" type="text" name="" placeholder="Logradouro" />
                <input className="col-md-2" type="text" name="" placeholder="Numero" />
                <input className="col-md-6" type="text" name="" placeholder="Cidade" />
                <input className="col-md-6" type="text" name="" placeholder="Estado" />
                <input className="col-md-12" type="text" name="" placeholder="Bairro" />
                <input className="col-md-6" type="text" name="" placeholder="CEP" />
            </div>
        </>
    )
}