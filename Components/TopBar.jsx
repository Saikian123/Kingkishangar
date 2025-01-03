import { FaShoppingCart, FaUser, FaHistory, FaSearch, FaMapMarkerAlt } from "react-icons/fa"; // Added icons
import './TopBar.css';
import kingKishan from '../assets/kingKisan.png'; // Correct import path

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">
        <img src={kingKishan} alt="Logo" />
      </div>
      <div className="location">
        <FaMapMarkerAlt className="input-icon" /> {/* Added icon */}
        <input type="text" placeholder="Enter location" />
      </div>
      <div className="search-bar">
        <FaSearch className="input-icon" /> {/* Added icon */}
        <input type="text" placeholder="Search..." />
      </div>
      <div className="icons">
        <FaShoppingCart className="icon" />
        <FaUser className="icon" />
        <FaHistory className="icon" />
      </div>
    </div>
  );
};

export default TopBar;
