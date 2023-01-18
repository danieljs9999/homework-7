import { AddBackdrop, AddModal } from "../global/Global";
import { createPortal } from "react-dom";

function Modalka({ onCancel, children }) {
  return (
    <>
      {createPortal(
        <AddBackdrop onClick={onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <AddModal>{children}</AddModal>,
        document.getElementById("modal-root")
      )}
    </>
  );
}

export default Modalka;
