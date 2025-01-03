import { useState } from "react";
import "./Vegetables.css";
import veg1 from '../assets/veg1.png'; // Import the image correctly
import veg2 from '../assets/veg2.png'; // Import the image correctly
import veg3 from '../assets/veg3.png'; // Import the image correctly
import veg4 from '../assets/veg4.png'; // Import the image correctly
import veg5 from '../assets/veg5.png'; // Import the image correctly
import veg6 from '../assets/veg6.png'; // Import the image correctly



const vegetables = [
  { name: "Red Capsicum", image: veg1, price: "₹100", weight: "500g", discount: "10%" },
  { name: "Red Lettuce", image: veg2, price: "₹180", weight: "400g", discount: "15%" },
  { name: "Raw Papaya", image: veg3, price: "₹60", weight: "300g", discount: "20%" },
  { name: "Cauliflower", image: veg4, price: "₹1.80", weight: "700g", discount: "5%" },
  { name: "BabyCorn Organic", image: veg5, price: "₹1.00", weight: "600g", discount: "25%" },
  { name: "Fresh Mushroom", image: veg6, price: "₹0.80", weight: "1kg", discount: "30%" },
];

const VegetableCards = () => {
  const [quantities, setQuantities] = useState(Array(vegetables.length).fill(0));

  const increment = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const decrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
    }
    setQuantities(newQuantities);
  };

  return (
    <div className="vegetable-container">
      <div className="vegetable-row">
        {vegetables.map((veg, index) => (
          <div
            key={index}
            className="vegetable-card"
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("hovered");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("hovered");
            }}
          >
            {/* Discount Percentage */}
            <div className="vegetable-discount">{veg.discount} OFF</div>

            {/* Image */}
            <img src={veg.image} alt={veg.name} className="vegetable-image" />

            {/* Vegetable Name */}
            <h4 className="vegetable-name">{veg.name}</h4>

            {/* Price and Weight */}
            <p className="vegetable-details">
              <strong>Price:</strong> {veg.price} <br />
              <strong>Weight:</strong> {veg.weight}
            </p>

            {/* Quantity Counter */}
            <div className="vegetable-counter">
              <button className="counter-button" onClick={() => decrement(index)}>
                -
              </button>
              <span className="counter-quantity">{quantities[index]}</span>
              <button className="counter-button increment" onClick={() => increment(index)}>
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegetableCards;
