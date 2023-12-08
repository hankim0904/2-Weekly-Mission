import { useEffect } from "react";
import Overlay from "./Overlay";
import "./modal.css";
import closeIcon from "./images/close.svg";

const Modal = ({ onClose, modalTitle, subTitle, children }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <Overlay>
      <div className="modal">
        <button className="modal-btn-close" onClick={onClose}>
          <img src={closeIcon} alt="모달 닫기 버튼" />
        </button>
        <header className="modal-header">
          <h1 className="modal-header-title">{modalTitle}</h1>
          <p className="modal-header-sub-title">{subTitle}</p>
        </header>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
