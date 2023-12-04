function Table({modalContent}) {
  return (
    <table class="table text-center">
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
          <td>{modalContent.carbs}</td>
          <td>{modalContent.fat}</td>
          <td>{modalContent.protein}</td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table
