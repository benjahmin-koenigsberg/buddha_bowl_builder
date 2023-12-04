import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { greens, grains, beans, roots, fats } from "./assets/data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const [bowl, setBowl] = useState({
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
      <Header />
      <div className="main">
        <Routes>
          <Route
            path="/greens"
            element={<Card foods={greens} bowl={bowl} setBowl={setBowl} />}
          />
          <Route
            path="/grains"
            element={<Card foods={grains} bowl={bowl} setBowl={setBowl} />}
          />
          <Route
            path="/beans"
            element={<Card foods={beans} bowl={bowl} setBowl={setBowl} />}
          />
          <Route
            path="/roots"
            element={<Card foods={roots} bowl={bowl} setBowl={setBowl} />}
          />
          <Route
            path="/fats"
            element={<Card foods={fats} bowl={bowl} setBowl={setBowl} />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
