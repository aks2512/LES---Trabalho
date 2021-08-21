import { useState, FormEvent, ReactNode } from 'react';

import { Modal } from './Modal';

import '../styles/form.scss';

type formProps = {
    title:string,
    about?:string,
    buttonText:string,
    modalMessage:string,
    children?: ReactNode
}

export function Form(props:formProps) {
    const [showModal, setShowModal] = useState(false);

    const openModal = (e:FormEvent) => {
        e.preventDefault();
        
        setShowModal(true);
    };

    return (
        <>
            <div className="form">
                <h1 className="form__title" >{props.title}</h1>
                <form onSubmit={openModal} className="form__body">
                    {props.about ? <p>{props.about}</p> : null}
                    {props.children}
                    <button type="submit" className="button">{props.buttonText}</button>
                </form>
            </div>
            {showModal ? <Modal message={props.modalMessage} setShowModal={setShowModal} /> : null}
        </>
    );
}