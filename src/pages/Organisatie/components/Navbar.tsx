import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function nabar() {
  return (
    <nav>
      <div className="navbar-links">
        <ul>
          <Link to="Home">Home</Link>
          <Link to="Instanties">Instanties</Link>
          <Link to="admininstantie">admininstantie</Link>
          <Link to="geavanceerdeinstanties">geavanceerd</Link>
        </ul>
      </div>
      <div className="user-container">
        <img
          src="https://www.citypng.com/public/uploads/small/11639594308azjskddoutgi296zaayuhyuspofhahhfa4ezuhne7vcflkjlnicxnewkf17enf0janiemum3o1eikv5x9r1s6wst2obumnv3rmxj.png"
          alt=""
        />
      </div>
    </nav>
  );
}
