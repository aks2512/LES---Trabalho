import { ReactNode } from 'react';
import { Link } from "react-router-dom";

import '../styles/card.scss';

type cardProps = {
    editar: string,
    excluir: string,
    children?: ReactNode;
}

export function Card(props:cardProps) {
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