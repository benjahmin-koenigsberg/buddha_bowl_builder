import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { greens, grains, beans, roots, fats } from "./assets/data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import LandingPage from "./components/LandingPage";

function App() {


    const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

  resizeOps();
  window.addEventListener("resize", resizeOps);

const [progress, setProgress] = useState(0);

useEffect(()=>{},[progress])


  const [ bowl, setBowl] = useState({
    greens: "",
    grains: "",
    beans: "",
    roots: "",
    fats: "",
    dressings: '',
    calories: "",
    carbs: "",
    fat: '',
    protein: "",
  });

  return (
    <BrowserRouter>
      <Header progress={progress} />
      <div className="main container">
        <Routes>
          <Route  path="/" element={<LandingPage  setProgress={setProgress} />} />
          <Route
            path="/greens"
            element={
              <Card
                foods={greens}
                bowl={bowl}
                setBowl={setBowl}
                setProgress={setProgress}
              />
            }
          />
          <Route
            path="/grains"
            element={
              <Card
                foods={grains}
                bowl={bowl}
                setBowl={setBowl}
                setProgress={setProgress}
              />
            }
          />
          <Route
            path="/beans"
            element={
              <Card
                foods={beans}
                bowl={bowl}
                setBowl={setBowl}
                setProgress={setProgress}
              />
            }
          />
          <Route
            path="/roots"
            element={
              <Card
                foods={roots}
                bowl={bowl}
                setBowl={setBowl}
                setProgress={setProgress}
              />
            }
          />
          <Route
            path="/fats"
            element={
              <Card
                foods={fats}
                bowl={bowl}
                setBowl={setBowl}
                setProgress={setProgress}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
