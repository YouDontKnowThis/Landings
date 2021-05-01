import classes from "./modal.module.scss";

function Modal({ children, setShowModal }) {
  return (
    <div className={classes.modal} onClick={() => setShowModal(false)}>
      <div className={classes.center}>{children}</div>
    </div>
  );
}

export default Modal;
