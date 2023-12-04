import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "./Table";

function ModalComponent({ show, modalContent, handleClose }) {


  return (
    <>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent.text}</Modal.Body>
        <img src={modalContent.img} />
        <div>
          <Table modalContent={modalContent} />
        </div>
        <Modal.Footer className="m-auto">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalComponent;
