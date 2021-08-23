import { useState, FormEvent, ReactNode } from 'react';

import { Modal } from './Modal';

import '../styles/form.scss';

type formProps = {
    title:string,
    about?:string,
    submitFunction:Function,
    buttonText:string,
    modalMessage:string,
    children?: ReactNode
}

export function Form(props:formProps) {
    const [showModal, setShowModal] = useState(false);

    const validateRequisition = (e:FormEvent) => {
        e.preventDefault();
        props.submitFunction(e);
        setShowModal(true);
    };

    return (
        <>
            <div className="form">
                <h1 className="form__title" >{props.title}</h1>
                <form onSubmit={validateRequisition} className="form__body">
                    {props.about ? <p>{props.about}</p> : null}
                    {props.children}
                    <button type="submit" className="button">{props.buttonText}</button>
                </form>
            </div>
            {showModal ? <Modal message={props.modalMessage} setShowModal={setShowModal} /> : null}
        </>
    );
}