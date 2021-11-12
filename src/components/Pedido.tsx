import { MouseEvent } from 'react';
import livro from '../assets/images/livro.png';

export function Pedido() {

    function accordionToggle(e:MouseEvent<HTMLDivElement>) {

        let el = e.currentTarget?.parentElement?.parentElement;
        if(el) {
            el.classList.toggle('active');
        }
         
     }

    return (
        <div className="verPedido">
            <h3>Pedido #1<div onClick={(e) => accordionToggle(e)}></div></h3>
            <table>
                <tbody>
                    <tr>
                        <td><img src={livro} alt="" /></td>
                        <td>Livro</td>
                        <td>R$ 30.00</td>
                        <td><button>trocar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}