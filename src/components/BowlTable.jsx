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
          <td>{bowl.calories}</td>
          <td>{bowl.carbs}</td>
          <td>{bowl.fat}</td>
          <td>{bowl.protein}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default BowlTable;
