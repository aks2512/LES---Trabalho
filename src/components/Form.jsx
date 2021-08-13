import '../styles/form.scss';

export function Form(props) {
    return (
        <div className="form">
            <h1 className="form__title" >{props.title}</h1>
            <form className="form__body">
                <p>{props.about}</p>
                {props.children}
                <button>{props.buttonText}</button>
            </form>
        </div>
    );
}