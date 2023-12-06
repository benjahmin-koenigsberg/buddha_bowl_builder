
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "./Table";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";


function BowlModal({ show, handleClose, modalContent, bowl, bowlImages }) {


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
          <img src={bowlImages.Bowl} className="z-0" />
          <img className="food" src={bowlImages[bowl.greens]} />
          <img className="food" src={bowlImages[bowl.grains]} />
          <img className="food black-beans" src={bowlImages[bowl.beans]} />
          <img className="food" src={bowlImages[bowl.roots]} />
          <img className="food" src={bowlImages[bowl.toppings]} />
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
