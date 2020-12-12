import React from "react";
import Sort from "../css/icons/sort.png";

const LaunchFilters = ({ launches }) => {
  return (
    <div className="main__launchfilters">
      <select className="main__launchfilters-year--select" defaultValue="">
        <option hidden value="">
          Filter by Year
        </option>
        <option value="all">All launches</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
      </select>
      <button className="main__launchfilters-year--sort">
        <p className="main__launchfilters-sort-button">Sort Descending</p>
        <img src={Sort} alt="sort launch list by ascending or descending"></img>
      </button>
    </div>
  );
};

export default LaunchFilters;
