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
                {props.children}
            </div>
        </div>
    );
}