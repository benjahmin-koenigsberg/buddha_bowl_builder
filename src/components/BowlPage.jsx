import { useEffect } from "react";
import ModalComponent from "./ModalComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "./Table";
import BowlModal from "./BowlModal";
import { bowlImages } from "../assets/data";


function BowlPage({
  bowl,
  setBowl,
  show,
  modalContent,
  setModalContent,
  handleShow,
  handleClose,
}) {

useEffect(()=>{
  setBowl({...bowl, progress: 100})
}, [])

console.log(bowlImages)

  return (
    <>
      <div className="card">
        <h5 className="card-title">Buddah Bowl</h5>

        {/* <img className={`img-fluid`} src={"./src/assets/images/bowl.png"} /> */}
        <div className="card-body">
          <div className="parent">
            <img src={bowlImages.Bowl} className="z-0" />
            <img
              className="food"
              src={bowlImages[bowl.greens]}
            />
            <img
              className="food"
              src={bowlImages[bowl.grains]}
            />
            <img
              className="food black-beans"
              src={bowlImages[bowl.beans]}
            />
            <img
              className="food"
              src={bowlImages[bowl.roots]}
            />
            <img
              className="food"
              src={bowlImages[bowl.toppings]}
            />
          </div>
          <p className="card-text"></p>
          <button className="btn btn-primary" onClick={handleShow}>
            Details
          </button>
        </div>
      </div>
      <BowlModal
        show={show}
        handleClose={handleClose}
        modalContent={modalContent}
        bowl={bowl}
        bowlImages={bowlImages}
      />
    </>
  );
}
export default BowlPage;
