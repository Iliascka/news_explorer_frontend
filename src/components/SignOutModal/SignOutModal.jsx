import useModalClose from "../../hooks/useModalClose";
import modalCloseIcon from "../../assets/modal-close.svg";
import "./SignOutModal.css";

function SignOutModal({ isOpen, onClose, userData }) {
  const { handleOverlayClick } = useModalClose(isOpen, onClose);
  return (
    <div
      onClick={handleOverlayClick}
      className={`signOut-modal  ${isOpen ? "signOut-modal-opened" : ""}`}
    >
      <div className="signOut-modal__content">
        <button onClick={onClose} className="signOut-modal__close-btn">
          <img
            src={modalCloseIcon}
            alt="Close"
            className="signOut-modal__icon"
          />
        </button>
        <h3 className="signOut-modal__text">
          {userData.name} are you sure you want to sign out?
        </h3>
        <div className="singOut-modal_buttons">
          <button className="signOut-modal__button signOut-modal__button-signOut">
            Sign out
          </button>
          <button className="signOut-modal__button ">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default SignOutModal;
