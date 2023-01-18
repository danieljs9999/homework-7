import {
  AddModalActions,
  AddModalBtnSuccess,
  AddModalBtnPassive,
} from "../global/Global";

function DeleteModal({ onCancel, onConForm }) {
  return (
    <>
      <h2 style={{ margin: "15px 0px 0px 20px" }}>
        Are you sure you wanna delete ?
      </h2>
      <AddModalActions>
        <AddModalBtnPassive onClick={onCancel}>NO</AddModalBtnPassive>
        <AddModalBtnSuccess onClick={onConForm}>YES</AddModalBtnSuccess>
      </AddModalActions>
    </>
  );
}

export default DeleteModal;
