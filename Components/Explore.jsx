import "./explore.css";
import ex1 from '../assets/ex1.png'
import ex2 from '../assets/ex2.png'
import ex3 from '../assets/ex3.png'
import ex4 from '../assets/ex4.png'
import ex5 from '../assets/ex5.png'
import ex6 from '../assets/ex6.png'
import ex7 from '../assets/ex7.png'
import ex8 from '../assets/ex8.png'
import ex9 from '../assets/ex9.png'
import ex10 from '../assets/ex10.png'
import ex11 from '../assets/ex11.png'
import ex12 from '../assets/ex12.png'
import ex13 from '../assets/ex13.png'
import ex14 from '../assets/ex14.png'
import ex15 from '../assets/ex15.png'
import ex16 from '../assets/ex16.png'



const categories = [
  { name: "Fruits vwgatbles", image:ex1 },
  { name: "pharama and higence", image:ex2 },
  { name: "Baby care", image:ex3 },
  { name: "FreshFruits", image:ex4 },
  { name: "Dry fruits", image:ex5 },
  { name: "Fish & sea food", image:ex6 },
  { name: "Bakery", image:ex7 },
  { name: "Dairy& bread", image:ex8 },
  { name: "Intsnat foods", image:ex9 },
  { name: "Eggs", image:ex10 },
  { name: "Chocolates", image:ex11 },
  { name: "Cold xults", image:ex12 },
  { name: "Spices", image:ex13 },
  { name: "Spread", image:ex14 },
  { name: "Rice", image:ex15 },
  { name: "Prwan", image:ex16 },

];

const ExploreCategory = () => {
  return (
    // <div className="explore-category-container">
      <div className="col-12 d-flex flex-wrap">
      {categories.map((category, index) => (
        <div key={index} className="category-card category-slider arrow-slider col-xxl-2 col-lg-2 col-md-3   p-1">
          <img src={category.image} alt={category.name} className="category-image img-fluid blur-up lazyloaded "/>
          <p className="category-name ">{category.name}</p>
        </div>
      ))}
      </div>
    // </div>
  );
};

export default ExploreCategory;
