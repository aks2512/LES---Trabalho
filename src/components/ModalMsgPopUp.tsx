import '../styles/modal.scss';

type modalProps = {
  message:string,
  setShowModal:Function,
}

export function Modal(props:modalProps) {

  function closeModal(){
      props.setShowModal(false);
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="boxMessage">
                <h1>{props.message}</h1>
                <button onClick={() => props.setShowModal(false)} className="button" type="button" >OK</button>
            </div>
        </div>
    );
}