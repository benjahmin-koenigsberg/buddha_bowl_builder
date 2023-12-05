import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import FormComponent from "./FormComponent";
import Button from "react-bootstrap/Button";

function Card({ foods, bowl, setBowl, setProgress }) {

const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [modalContent, setModalContent] = useState({
    name: "",
    text: "",
    img: "",
    calories: "",
    carbs: "",
    fat: "",
    protein: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`Choose your ${foods[0].category}`}</h5>
          <p className="card-text">Some quick example text</p>

          {/* {
          foods.map( (food, index) => (
            <FormComponent
            food={food}
            foods={foods}
            key={index}
            setBowl={setBowl}
            setProgress={setProgress}
            handleShow={handleShow}
            setModalContent={setModalContent}
            show={show}
          />
          ))
          }  */}

           <form className="d-flex flex-row justify-content-evenly">
            {foods.map((food, index) => (
              <div key={index}>
                <div className="form-check d-flex flex-row justify-content-evenly align-items-center gap-2 flex-wrap">
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
                      setProgress(foods[0].progress);
                      // setProgress((prev)=>prev+12.5)
                    }}
                  />
                  <div
                    className="text-center"
                    type="button"
                    onClick={() => {
                      bowl[food.category] ? handleShow() : "";
                    }}>
                    ℹ️
                  </div>
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-primary mt-5"
          onClick={() => {
            setProgress((prev) => prev - 12.5);
            navigate(foods[0].navBack);
          }}>
          ◀️ Back
        </button>
        <button
          className="btn btn-primary mt-5"
          onClick={() => {
            bowl[foods[0].category] ? navigate(foods[0].navTo) : "";
            // navigate(foods[0].navTo);
          }}>
          {foods[0].navTo.slice(1)} ▶️
        </button>
      </div>
      <ModalComponent
        modalContent={modalContent}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
}
export default Card;
