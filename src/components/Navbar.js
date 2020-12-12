import React from "react";
import logo from "../css/imgs/spacex-logo.png";
import reload from "../css/icons/refresh.png";

const Navbar = ({ handleReloadData }) => {
  return (
    <nav className="nav">
      <img
        className="nav__logo"
        src={logo}
        alt="SpaceX's official company Logo"
      ></img>
      <h1 className="nav__title">Launches</h1>
      <button onClick={() => handleReloadData()} className="nav__reload-button">
        <p className="nav__reload-text">Reload Data</p>
        <img src={reload} alt="launch information reload button" />
      </button>
    </nav>
  );
};

export default Navbar;
