
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "./Table";

function BowlModal({ show, handleClose, modalContent, bowl }) {
  return (
    <>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Buddah Bowl</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center"></Modal.Body>
        <div className="parent m-auto">
          <img src={"./src/assets/images/bowl.png"} />
          <img
            className="food"
            src={`./src/assets/images/${bowl.greens}.png`}
          />
          <img
            className="food"
            src={`./src/assets/images/${bowl.grains}.png`}
          />
          <img
            className="food black-beans"
            src={`./src/assets/images/${bowl.beans}.png`}
          />
          <img className="food" src={`./src/assets/images/${bowl.roots}.png`} />
          <img
            className="food"
            src={`./src/assets/images/${bowl.toppings}.png`}
          />
        </div>
        <Modal.Footer className="m-auto">
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default BowlModal;
