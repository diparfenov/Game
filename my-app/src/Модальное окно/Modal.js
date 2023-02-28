import React from "react";
import "./Modal.css";

const Modal = ({active, children}) => {
  return (
    <div className={active ? "modal active" : "modal"}>
      <div className={active ? "modal__content active" : "modal__content"} >
        {children}
      </div>
    </div>
  )
}
export default Modal