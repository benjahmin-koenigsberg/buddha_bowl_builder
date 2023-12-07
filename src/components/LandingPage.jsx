/** @format */

import { useNavigate } from "react-router-dom";

function LandingPage({ setBowl, bowl }) {


  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-body ">

        <h5 className="card-title">Vegan Buddah Bowl</h5>
        <p className="card-text">
          Served in a single bowl or high-rimmed
          plate, consists of small portions of several foods arranged in
          an "artful" way.
        </p>
        {/* <p className="card-text">
          The concept appeared in 2013 Juice for Life, now Fresh, in Toronto,
          Ontario, started offering these on their menu prior to 2013.
        </p> */}
        <p className="card-text">
          In general, there are 5 basic elements to a buddha bowl
        </p>
        <div className="text-center ">
          <ul className="list-group">
            <li className="list-group-item">Greens</li>
            <li className="list-group-item">Whole grains</li>
            <li className="list-group-item">Beans</li>
            <li className="list-group-item">Vegetables</li>
            <li className="list-group-item">Dressings</li>
            <li className="list-group-item">Toppings</li>
          </ul>
        </div>
        <br></br>
        <button
          className="btn btn-dark"
          onClick={() => {
            setBowl({
              ...bowl,
              progress: bowl.progress + 12.5
            })

            navigate("/greens");
          }}>
          Next ▶️
        </button>

      </div>
    </div>
  );
}
export default LandingPage;
