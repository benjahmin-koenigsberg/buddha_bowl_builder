/** @format */

import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { foods } from "./assets/data";
import Header from "./components/Header";
import Card from "./components/Card";
import LandingPage from "./components/LandingPage";
import BowlPage from "./components/BowlPage";

function App() {
  //functions
  const resizeOps = () => {
    document.documentElement.style.setProperty(
      "--vh",
      window.innerHeight * 0.01 + "px"
    );
  };

  resizeOps();

  window.addEventListener("resize", resizeOps);

  //

  //state

  // const [progress, setProgress] = useState(0);

  const [bowl, setBowl] = useState({
    greens: "",
    grains: "",
    beans: "",
    roots: "",
    toppings: "",
    dressing: "",
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
    progress: 0,
  });

  const [modalContent, setModalContent] = useState({
    name: "",
    text: "",
    img: "",
    calories: "",
    carbs: "",
    fat: "",
    protein: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{},[window.location.pathname])

  return (
    <BrowserRouter>
      {/* <Header progress={progress}  /> */}
      <Header progress={bowl.progress} />

      <div className="main container">
        <Routes>
          {/* <Route path="/" element={<LandingPage setProgress={setProgress} />} /> */}
          <Route
            path="/"
            element={<LandingPage setBowl={setBowl} bowl={bowl} />}
          />

          {foods.map((foods, i) => (
            <Route
              key={i}
              // path={`/${i}`}
              path={`${foods.path}`}
              element={
                <Card
                  foods={foods.choices}
                  bowl={bowl}
                  setBowl={setBowl}
                  // progress={progress}
                  // setProgress={setProgress}
                  modalContent={modalContent}
                  setModalContent={setModalContent}
                  show={show}
                  setShow={setShow}
                  handleClose={handleClose}
                  handleShow={handleShow}
                />
              }
            />
          ))}
          <Route
            path="/bowl"
            element={
              <BowlPage
                bowl={bowl}
                setBowl={setBowl}
                // setProgress={setProgress}
                modalContent={modalContent}
                setModalContent={setModalContent}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
