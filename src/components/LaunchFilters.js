import React from "react";
import Sort from "../css/icons/sort.png";

const LaunchFilters = ({ handleSortByDesc, filterByYear, launchYears }) => {
  return (
    <div className="main__launchfilters">
      <select
        className="main__launchfilters-year--select"
        defaultValue=""
        onChange={filterByYear}
      >
        <option hidden value="">
          Filter by Year
        </option>

        {launchYears && launchYears.length === 0 ? (
          <option>Loading years...</option>
        ) : (
          launchYears.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))
        )}
      </select>
      <button
        onClick={() => handleSortByDesc()}
        className="main__launchfilters-year--sort"
      >
        <p className="main__launchfilters-sort-button">Sort Descending</p>
        <img src={Sort} alt="sort launch list by ascending or descending"></img>
      </button>
    </div>
  );
};

export default LaunchFilters;
