import "./Navigation.scss";

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
      </ul>
    </div>
  );
};

export default Navigation;
