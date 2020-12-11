import React, { useState, useEffect } from "react";
import Sort from "../css/icons/sort.png";
import { baseApiURL } from "../API/Api";

const LaunchFilters = () => {
  useEffect(() => {
    baseApiURL();
  });

  return (
    <div className="main__launchfilters">
      <select className="main__launchfilters-year--select">
        <option value="default-value">Filter By Year</option>
      </select>
      <button className="main__launchfilters-year--sort">
        <p className="main__launchfilters-sort-button">Sort Descending</p>
        <img src={Sort} alt="sort launch list by ascending or descending"></img>
      </button>
    </div>
  );
};

export default LaunchFilters;
