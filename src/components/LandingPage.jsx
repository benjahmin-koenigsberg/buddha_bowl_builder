/** @format */

import { useNavigate } from "react-router-dom";

function LandingPage({setProgress}) {
  const navigate = useNavigate();

  return (
    <div className="card">
      {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
      <div className="card-body ">
        <h5 className="card-title">Vegan Buddah Bowl</h5>
        <p className="card-text">
          A Buddha bowl is a vegan meal, served on a single bowl or high-rimmed
          plate, which consists of small portions of several foods arranged in
          an "artful" way.
        </p>
        <p className="card-text">
          The concept appeared in 2013 Juice for Life, now Fresh, in Toronto,
          Ontario, was offering this on their menu prior to 2013.
        </p>
        <br></br>
        <p className="card-text">
          In general, there are five basic elements to a buddha bowl
        </p>
        <div className="text-center w-50 m-auto">
          <ul className="list-group">
            <li className="list-group-item">Greens</li>
            <li className="list-group-item">Whole grains</li>
            <li clasName="list-group-item">Beans</li>
            <li className="list-group-item">Vegetable</li>
            <li className="list-group-item">Dressings</li>
          </ul>
        </div>
        <br></br>
        <button
          className="btn btn-dark"
          onClick={() => {
            setProgress((prev)=>prev+12.5)
            navigate("/greens");
          }}>
          Next ▶️
        </button>
      </div>
    </div>
  );
}
export default LandingPage;
