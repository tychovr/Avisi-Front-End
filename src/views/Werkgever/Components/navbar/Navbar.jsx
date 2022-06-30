import React from "react";
import "./navbar.scss";
import profilepic from "../../images/profilepic.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="nav-logo">Logo</span>
      <div className="nav-items">
        <a href="">placeholder</a>
        <a href="">placeholder</a>
        <a href="">placeholder</a>
        <a href="">placeholder</a>
        <a href="">placeholder</a>
        <img className="nav-ppic" src={profilepic} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
