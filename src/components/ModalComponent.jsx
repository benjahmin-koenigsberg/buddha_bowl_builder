/** @format */

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "./Table";
import axios from "axios";
import { useEffect } from "react";

function ModalComponent({ show, modalContent, setModalContent, handleClose, bowl, setBowl }) {
  async function getNutrients() {

    const api_key = import.meta.env.VITE_API_KEY;
    const query = modalContent.name;

    const fruitTextUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${api_key}&query=${query}`;

    const response = await axios.get(fruitTextUrl);
    const data = await response.data;

    //console.log(data)
    //const nutrients = data.foods[0]
    const nutrients = data.foods[0].foodNutrients;
    // const protien = nutrients.find(
    //   (nutrient) => nutrient.nutrientName === "Protein"
    // ).value;
    const protien = nutrients.find(( nutrient) =>
      nutrient.nutrientName.includes('Protein' || 'protien')
    )?.value;
    const carbs = nutrients.find((nutrient) =>
      nutrient.nutrientName.includes('Carbohydrate' || 'carbohydrate')
    )?.value;
    const fat = nutrients.find((nutrient) =>
      nutrient.nutrientName.includes("lipid" || "fat" || "Total lipid")
    )?.value;
    const calories = carbs * 4 + fat * 9 + protien * 4;

    setModalContent({
      ...modalContent,
      calories: calories.toFixed(2),
      carbs: carbs,
      fat: fat,
      protien: protien,
    });

    setBowl({
      ...bowl,
      calories: bowl.calories + calories,
      carbs: bowl.carbs + carbs,
      fat: bowl.fat + fat,
      protein: bowl.protein + protien,
    });


    console.log(nutrients);
  }

  useEffect(() => {
    getNutrients();
  }, []);

  return (
    <>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center ">{modalContent.text}</Modal.Body>
        <img src={modalContent.img} className="img-thumbnail m-auto" />
        <div>
          <Table modalContent={modalContent} />
        </div>
        <Modal.Footer className="m-auto">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalComponent;
