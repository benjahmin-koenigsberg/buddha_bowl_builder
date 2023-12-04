import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ show, modalContent, handleClose }) {



  return (
    <>
      <Modal show={show} onHide={()=>handleClose()}>
        <Modal.Header closeButton >
          <Modal.Title>{modalContent.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent.text}</Modal.Body>
        <img src={modalContent.img} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalComponent;
