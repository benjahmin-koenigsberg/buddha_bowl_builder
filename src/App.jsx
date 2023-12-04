import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { greens, grains } from "./assets/data";
import Header from './components/Header'
import Card from './components/Card'

function App() {

  const [bowl, setBowl] = useState({
    greens: "",
    grains: "",
    calories: "",
    carbs: "",
    fats: "",
    protein: "",
  });



  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/greens"
          element={<Card foods={greens} bowl={bowl} setBowl={setBowl} />}
        />
        <Route
          path="/grains"
          element={<Card foods={grains} bowl={bowl} setBowl={setBowl} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
