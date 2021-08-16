import React,{ useRef } from "react";

import '../styles/popup.scss';

export function Popup(props) {

  const popupRef = useRef();
  const closePopup = (e) => {
    if (e.target === popupRef.current) {
      props.setShowPopup(false);
    }
  };

    return (
        <div className="popup" ref={popupRef} onClick={closePopup}>
            <div className="boxMessage">
                <h1>{props.message}</h1>
                <button onClick={() => props.setShowPopup(false)} className="button" type>OK</button>
            </div>
        </div>
    );
}