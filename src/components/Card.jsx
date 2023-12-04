import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import Button from "react-bootstrap/Button";
import FoodItem from "./FoodItem";

function Card({ foods, bowl, setBowl }) {

const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const [modalContent, setModalContent] = useState({
    name: "" ,
    text: "" ,
    img: "" }
    );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{`Choose your ${foods[0].category}`}</h5>
          <p class="card-text">
            Some quick example text
          </p>

          <form className="d-flex flex-row justify-content-evenly">
            {foods.map((food) => (
              <div>
                <div className="form-check d-flex flex-row justify-content-evenly align-items-center gap-2">
                  <label className="form-check-label" htmlFor={food.name}>
                    {food.name}
                  </label>
                  <input
                    className="form-checkk-input"
                    type="radio"
                    id={food.name}
                    name={food.name}
                    value={food.name}
                    checked={bowl[`${food.category}`] === food.name}
                    onChange={(e) => {
                        // e.preventDefault()
                      setBowl({
                        ...bowl,
                        [`${food.category}`]: e.target.value,
                      });
                      setModalContent({
                        name: food.name,
                        text: food.modalText,
                        img: food.modalImg,
                      });
                    }}
                  />
                  <button className="btn btn-dark"  type="button" onClick={()=>handleShow()}>
                    ?
                  </button>
                </div>
              </div>
            ))}
          </form>
          <Button  class="btn btn-primary" onClick={ () => navigate( foods[0].navTo) } >
            {foods[0].navTo.slice(1)} ▶️
          </Button>
        </div>
      </div>
      <ModalComponent
        show={show}
        modalContent={modalContent}
        handleClose={handleClose}
      />
    </>
  );
}
export default Card;
