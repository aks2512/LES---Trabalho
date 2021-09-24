import { ReactNode } from 'react';
import { Link } from "react-router-dom";

import '../styles/card.scss';

type cardProps = {
    key:string,
    editar: string,
    excluir?: string,
    children?: ReactNode;
}

export function Card(props:cardProps) {
    return(
        <div className="card" key={props.key}>
            {props.children}
            <div className="card__links">
                <Link to={props.editar}>Editar</Link>
                {props.excluir ? <Link to={props.excluir}>Excluir</Link> : null}
            </div>
        </div>
    );
}