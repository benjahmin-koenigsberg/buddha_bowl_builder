/** @format */

import Button from "react-bootstrap/Button";

function FoodItem({ food, setModalContent, bowl, setBowl, modalContent }) {
  return (
    <>
      <form className="d-flex flex-row justify-content-evenly">
        <div>
          <div className="form-check">
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
                });
              }}
            />
            <Button variant="dark" onClick={handleShow}>
              Launch demo modal
            </Button>
          </div>
        </div>
      </form>
      <ModalComponent
        show={show}
        handleClose={handleClose}
        modalContent={modalContent}
      />
    </>
  );
}
export default FoodItem;
