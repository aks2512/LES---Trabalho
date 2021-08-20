import { useState, FormEvent, ReactNode } from 'react';

import { Popup } from './Popup';

import '../styles/form.scss';

type formProps = {
    title:string,
    about:string,
    buttonText:string,
    popupMessage:string,
    children?: ReactNode
}

export function Form(props:formProps) {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = (e:FormEvent) => {
        e.preventDefault();
        
        setShowPopup(true);
    };

    return (
        <>
            <div className="form">
                <h1 className="form__title" >{props.title}</h1>
                <form onSubmit={openPopup} className="form__body">
                    <p>{props.about}</p>
                    {props.children}
                    <button type="submit" className="button">{props.buttonText}</button>
                </form>
            </div>
            {showPopup ? <Popup message={props.popupMessage} setShowPopup={setShowPopup} /> : null}
        </>
    );
}