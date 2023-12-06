
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "./Table";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";


function BowlModal({ show, handleClose, modalContent, bowl }) {


const handleCapture = async () => {
  const canvas = await html2canvas(document.getElementById("bowlImg"));
  const dataURL = canvas.toDataURL("image/png");
  downloadjs(dataURL, "My Buddah Bowl.png", "image/png");
};



  return (
    <>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Buddah Bowl</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center"></Modal.Body>
        <div className="parent m-auto" id="bowlImg">
          <img src={"./src/assets/images/bowl.png"} />
          <img
            className="food"
            src={`./src/assets/images/${bowl?.greens}.png`}
          />
          <img
            className="food"
            src={`./src/assets/images/${bowl?.grains}.png`}
          />
          <img
            className="food black-beans"
            src={`./src/assets/images/${bowl?.beans}.png`}
          />
          <img
            className="food"
            src={`./src/assets/images/${bowl?.roots}.png`}
          />
          <img
            className="food"
            src={`./src/assets/images/${bowl?.toppings}.png`}
          />
        </div>
        <Modal.Footer className="m-auto">
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="warning" onClick={handleCapture}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default BowlModal;
