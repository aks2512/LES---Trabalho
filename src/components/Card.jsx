import { Link } from "react-router-dom";

import '../styles/cards.scss';

export function Card(props) {
    return(
        <div className="card">
            {props.children}
            <div className="card__links">
                <Link to={props.editar}>Editar</Link>
                <Link to={props.excluir}>Excluir</Link>
            </div>
        </div>
    );
}