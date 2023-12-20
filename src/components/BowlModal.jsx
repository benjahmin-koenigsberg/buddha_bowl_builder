/** @format */

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "./Table";
// import html2canvas from "html2canvas";
// import downloadjs from "downloadjs";
import * as htmlToImage from "html-to-image";

import BowlTable from "./BowlTable";

function BowlModal({ show, handleClose, modalContent, bowl, bowlImages }) {
  const handleCapture = async () => {
    const dataUrl = await htmlToImage.toPng(document.getElementById("bowlImg"));

    // download image
    const link = document.createElement("a");
    link.download = "my-Buddha-bowl.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <>
      <Modal show={show} onHide={() => handleClose()}>
        {/* <Modal.Header closeButton>
          <Modal.Title>My Buddha Bowl</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="text-center"> </Modal.Body>
        <div className="parent m-auto  mb-4" id="bowlImg">
          <img src={bowlImages.Bowl} className="" />
          <img className="food" src={bowlImages[bowl.greens]} />
          <img className="food" src={bowlImages[bowl.grains]} />
          <img className="food black-beans" src={bowlImages[bowl.beans]} />
          <img className="food" src={bowlImages[bowl.roots]} />
          <img className="food" src={bowlImages[bowl.toppings]} />
          <img className="food" src={bowlImages[bowl.dressing]} />
        </div>

        <BowlTable bowl={bowl} className="mt-4" />

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
