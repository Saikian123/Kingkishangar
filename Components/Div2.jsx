import { useState } from "react";
import "./Vegetables.css";
import og1 from '../assets/og1.png'; // Import the image correctly
import og2 from '../assets/og2.png'; // Import the image correctly
import og3 from '../assets/og3.png'; // Import the image correctly
import og4 from '../assets/og4.png'; // Import the image correctly
import og5 from '../assets/og5.png'; // Import the image correctly
import og6 from '../assets/og6.png'; // Import the image correctly



const vegetables = [
  { name: "Red Capsicum", image: og1, price: "₹100", weight: "500g", discount: "10%" },
  { name: "Red Lettuce", image: og2, price: "₹180", weight: "400g", discount: "15%" },
  { name: "Raw Papaya", image: og3, price: "₹60", weight: "300g", discount: "20%" },
  { name: "Cauliflower", image: og4, price: "₹1.80", weight: "700g", discount: "5%" },
  { name: "BabyCorn Organic", image: og5, price: "₹1.00", weight: "600g", discount: "25%" },
  { name: "Fresh Mushroom", image: og6, price: "₹0.80", weight: "1kg", discount: "30%" },
];

const VegetableCard2 = () => {
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

export default VegetableCard2;
