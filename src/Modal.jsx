import { Overlay } from "react-bootstrap";


const Modal = ({children , onClose }) => {
     return(<>
     <div style={OVERLAY_STYLES}></div>
     <div style={MODAL_STYLES}>
          <button onClick={onClose}>X</button>
          {children}
     </div>
     </>);
} 

export default Modal;