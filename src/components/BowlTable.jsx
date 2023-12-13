function BowlTable({ bowl }) {
  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th scope="col">Calories</th>
          <th scope="col">Carbs</th>
          <th scope="col">Fat</th>
          <th scope="col">Protein</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{bowl.calories.toFixed(2)}</td>
          <td>{bowl.carbs}g</td>
          <td>{bowl.fat}g</td>
          <td>{bowl.protein}g</td>
        </tr>
      </tbody>
    </table>
  );
}
export default BowlTable;
