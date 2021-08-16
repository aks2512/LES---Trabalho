import { useState } from 'react';

import { Popup } from './Popup';

import '../styles/form.scss';

export function Form(props) {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = (e) => {
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