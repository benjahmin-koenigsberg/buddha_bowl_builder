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
        <Modal.Body className="text-center ">{modalContent.text}</Modal.Body>
        <img src={modalContent.img} className="img-thumbnail m-auto" />
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
