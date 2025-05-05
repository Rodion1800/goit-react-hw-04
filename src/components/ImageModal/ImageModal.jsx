import Modal from "react-modal";
import { ModalImage, customStyles } from "../../styles/styled";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Перегляд зображення"
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      {image && (
        <ModalImage src={image.urls.regular} alt={image.alt_description} />
      )}
    </Modal>
  );
}
