import Sort from "../css/icons/sort.png";

const LaunchFilters = () => {
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
