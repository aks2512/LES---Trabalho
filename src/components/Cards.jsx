import { Link } from "react-router-dom";

import '../styles/cards.scss';

export function Cards(props) {
    return(
        <div className="cards">
            <div className="cards__head col-md-12">
                <h1 className="cards__title">{props.title}</h1>
                <Link className="cards__new" to={props.newLink}>{props.new}</Link>
            </div>
            <div className="cards__body col-md-12">
                <div className="card">
                    {props.children}
                    <div className="card__links">
                        <Link to={props.editar}>Editar</Link>
                        <Link to={props.excluir}>Excluir</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}