/** @format */

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import Button from "react-bootstrap/Button";

function Card({
  foods,
  bowl,
  setBowl,

  modalContent,
  setModalContent,
  show,
  setShow,
  handleClose,
  handleShow,
}) {
  const navigate = useNavigate();

  return (
    <>
      {/* <div className={`main`}> */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`Choose your ${foods[0].category}`}</h5>
          <p className="card-text display-1">{foods[0].emoji}</p>
          <p className="card-text">{foods[0].mainText}</p>
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
                        // calories: bowl.calories + food.calories,
                        // carbs: bowl.carbs + food.carbs,
                        // fat: bowl.fat + food.fat,
                        // protein: bowl.protein + food.protein,
                        progress: foods[0].progress,
                      });

                      //localStorage.setItem("bowl", JSON.stringify(bowl));

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
                    className="text-center bg-info rounded-circle button"
                    style={{ boxShadow: "-1px 3px 3px 0px" }}
                    type="button"
                    onClick={() => {
                      bowl[food.category] ? handleShow() : "";
                    }}>
                    ❔
                  </div>
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between">
        <button
          className="btn btn-dark mt-5"
          onClick={() => {
            setBowl({ ...bowl, progress: bowl.progress - 12.5 });
            navigate(foods[0].navBack);
            // history.back();
          }}>
          ◀️ Back
        </button>
        <button
          className="btn btn-dark mt-5"
          onClick={() => {
            bowl[foods[0].category] ? navigate(foods[0].navTo) : "";
          }}>
          {foods[0].navTo.slice(1)} ▶️
        </button>
      </div>
      {/* </div> */}
      <ModalComponent
        modalContent={modalContent}
        show={show}
        handleClose={handleClose}
      />
      {/* </div> */}
    </>
  );
}

export default Card;
