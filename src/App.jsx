import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import {data} from './assets/data'
import FoodItem from './components/FoodItem';

function App() {

  // const Spinach = data.filter(item=>item.name === 'Spinach')

  return (
    <>
      <h1 className="display-5">Buddah Bowl Builder</h1>
      <ul>
        {data.map((item, index) => (
          <FoodItem key={index}  item={item} />
        ))}
      </ul>
    </>
  );
}

export default App
