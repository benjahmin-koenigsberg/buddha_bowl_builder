function Table({modalContent}) {
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
          <td>{modalContent.calories}</td>
          <td>{modalContent.carbs}g</td>
          <td>{modalContent.fat}g</td>
          <td>{modalContent.protein}g</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table
