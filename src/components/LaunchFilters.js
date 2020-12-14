import React from "react";
import Sort from "../css/icons/sort.png";

const LaunchFilters = ({
  toggleSortOrder,
  filterByYear,
  launchYears,
  sortOrder,
  launchFilteredYears,
}) => {
  const convertButtonSortText = {
    ASC: "Sort Descending",
    DESC: "Sort Ascending",
  };

  return (
    <div className="main__launchfilters">
      <select
        className="main__launchfilters-year--select"
        defaultValue=""
        onChange={launchFilteredYears}
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
        onClick={toggleSortOrder}
        className="main__launchfilters-year--sort"
      >
        <p className="main__launchfilters-sort-button">
          {convertButtonSortText[sortOrder]}
        </p>
        <img src={Sort} alt="sort launch list by ascending or descending"></img>
      </button>
    </div>
  );
};

export default LaunchFilters;
