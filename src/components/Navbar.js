import React from "react";
import logo from "../css/imgs/spacex-logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <img
        className="nav__logo"
        src={logo}
        alt="SpaceX's official company Logo"
      ></img>
      <h1 className="nav__title">Launches</h1>
    </nav>
  );
};

export default Navbar;
