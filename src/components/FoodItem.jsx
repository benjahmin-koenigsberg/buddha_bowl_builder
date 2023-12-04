/** @format */

function FoodItem({item}) {
console.log(item.foods)
  return (
    <div className="">
      <h2>Choose your {item.category}</h2>
      <form className="d-flex flex-row justify-content-evenly">
        {item.foods.map((food) => (
          <>
            <input
              type="radio"
              id={food.name}
              name={food.name}
              value={food.name}
            />
             <label htmlFor={food.name}>{food.name} </label>
          </>
        ))}
      </form>
    </div>
  );
}
export default FoodItem;
