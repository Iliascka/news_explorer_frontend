function ModalWithForm({ children, title, buttonText, secondaryButtonText }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close">
          <img src="" alt="" className="modal__close-icon" />
        </button>
        <form action="" className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
          <button type="button" className="modal__secondary-button">
            {secondaryButtonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
