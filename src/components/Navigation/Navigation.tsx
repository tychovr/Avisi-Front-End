import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-container">
      <img className="avisi-logo" src="https://www.avisi.nl/hubfs/avisi.svg" />
      <ul className="refs">
        <li>
          <a href="#">VACATURES</a>
        </li>
        <li>
          <a href="#">CARIEREGIDS</a>
        </li>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <Link to="/werkgever">WERKGEVER</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
