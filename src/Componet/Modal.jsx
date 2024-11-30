import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <>
            {/* Overlay */}
            <div className={styles.overlay} onClick={onClose}></div>
            {/* Modal Content */}
            <div className={styles.modal}>
                {/* Close Button */}
                <button onClick={onClose} className={styles.closeButton}>
                    &times;
                </button>
                {/* Children Content */}
                <div className={styles.content}>{children}</div>
            </div>
        </>,
        document.getElementById("cart-root")
    );
};

export default Modal;
