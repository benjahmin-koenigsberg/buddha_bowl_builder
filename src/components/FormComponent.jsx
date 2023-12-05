/** @format */

function FormComponent({
  food,
  foods,
  bowl,
  setBowl,
  setProgress,
  handleShow,
  setModalContent,
}) {
  return (
      <form className="d-flex flex-row justify-content-evenly">
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
            // checked={bowl[`${food.category}`] === food.name}
            onChange={(e) => {
              setBowl({
                ...bowl,
                [food.category]: e.target.value,
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
      </form>
  );
}
export default FormComponent;
