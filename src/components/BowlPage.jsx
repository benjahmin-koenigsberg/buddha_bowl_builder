import { useEffect } from "react";
import ModalComponent from "./ModalComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "./Table";
import BowlModal from "./BowlModal";


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

  return (
    <>
      <div className="card">
        <h5 className="card-title">Buddah Bowl</h5>

        {/* <img className={`img-fluid`} src={"./src/assets/images/bowl.png"} /> */}
        <div className="card-body">
          <div className="parent">
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
      />
    </>
  );
}
export default BowlPage;
