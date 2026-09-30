import { useEffect } from "react";

const useModalClose = (isOpen, onClose) => {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeClose = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [isOpen, onClose]);

  return { handleOverlayClick };
};

export default useModalClose;
