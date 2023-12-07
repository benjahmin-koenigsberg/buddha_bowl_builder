import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
  useEffect(() => {
    setBowl({ ...bowl, progress: 100 });
  }, []);

const navigate = useNavigate()

  return (
    <>
      <div className="card">
        {/* <h5 className="card-title">Buddah Bowl</h5> */}
        <div className="card-body">
          <div className="parent">
            <img src={bowlImages.Bowl} className="z-0" />
            <img className="food" src={bowlImages[bowl.greens]} />
            <img className="food" src={bowlImages[bowl.grains]} />
            <img className="food" src={bowlImages[bowl.beans]} />
            <img className="food" src={bowlImages[bowl.roots]} />
            <img className="food" src={bowlImages[bowl.toppings]} />
            <img className="food" src={bowlImages[bowl.dressing]} />
          </div>
          <p className="card-text"></p>
          <button className="btn btn-dark" onClick={handleShow}>
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

      <button
        className="btn btn-secondary mt-4"
        onClick={() => {
          navigate("/");
          setBowl({
            ...bowl,
            greens: "",
            grains: "",
            beans: "",
            roots: "",
            toppings: "",
            dressing: "",
            calories: 0,
            carbs: 0,
            fat: 0,
            protein: 0,
            progress: 0,
          });
        }}>
        Start over 🔃
      </button>
    </>
  );
}
export default BowlPage;
