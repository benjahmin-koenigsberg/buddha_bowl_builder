import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import Button from "react-bootstrap/Button";

function Card({ foods, bowl, setBowl }) {

const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const [modalContent, setModalContent] = useState({
    name: "" ,
    text: "" ,
    img: "",
    calories: '',
    carbs: '',
    fat: '',
    protein: '',
}
    );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{`Choose your ${foods[0].category}`}</h5>
          <p class="card-text">Some quick example text</p>

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
                      setBowl({
                        ...bowl,
                        [`${food.category}`]: e.target.value,
                      });
                      setModalContent({
                        name: food.name,
                        text: food.modalText,
                        img: food.modalImg,
                        calories: food.calories,
                        carbs: food.carbs,
                        fat: food.fat,
                        protien: food.protein,
                      });
                    }}
                  />
                  <div
                    className="text-center"
                    type="button"
                    onClick={() => handleShow()}>
                    ℹ️
                  </div>
                </div>
              </div>
            ))}
          </form>
          {/* <button  class="btn btn-primary mt-5" onClick={ () => navigate( foods[0].navTo) } >
            {foods[0].navTo.slice(1)} ▶️
          </button> */}
        </div>
      </div>
      <ModalComponent
        show={show}
        modalContent={modalContent}
        handleClose={handleClose}
      />
      <div className="d-flex flex-row justify-content-between">
        <button
          class="btn btn-primary mt-5"
          onClick={() => navigate(foods[0].navBack)}>
          ◀️ Back
        </button>
        <button
          class="btn btn-primary mt-5"
          onClick={() => navigate(foods[0].navTo)}>
          {foods[0].navTo.slice(1)} ▶️
        </button>
      </div>
    </>
  );
}
export default Card;
