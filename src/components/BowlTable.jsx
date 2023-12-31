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
          <td>{bowl.carbs.toFixed(2)}g</td>
          <td>{bowl.fat.toFixed(2)}g</td>
          <td>{bowl.protein.toFixed(2)}g</td>
        </tr>
      </tbody>
    </table>
  );
}
export default BowlTable;
