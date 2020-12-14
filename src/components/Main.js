import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BASE_API_URL } from "../API/Api";
import LaunchHome from "../css/imgs/launch-home.png";
import LaunchHome2x from "../css/imgs/launch-home@2x.png";
import LaunchHome3x from "../css/imgs/launch-home@3x.png";
import LaunchFilters from "./LaunchFilters";
import LaunchList from "./LaunchList";
import Navbar from "./Navbar";

const Main = () => {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [yearsOfLaunch, setYearsOfLaunch] = useState([]);
  const [sortOrder, setSortOrder] = useState("ASC");
  const [currentSelectedYear, setCurrentSelectedYear] = useState("All");
  const [launchesToDisplay, setLaunchesToDisplay] = useState([]);

  const fetchLaunches = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(BASE_API_URL);
      setLaunches(data);
      createListOfLaunchYears(data);
      setLaunchesToDisplay(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const filterLaunchesByYear = (year) =>
    launches.filter((launch) => year === launch.launch_year);

  const filterLaunchesToDisplay = () => {
    const filteredLaunchesByYear =
      currentSelectedYear === "All"
        ? launches
        : filterLaunchesByYear(currentSelectedYear);
    const sortedLaunchesByYear = sortList(filteredLaunchesByYear);
    setLaunchesToDisplay(sortedLaunchesByYear);
  };

  const sortList = (launchesToBeSorted) => {
    let sortedLaunches = [];

    if (sortOrder === "ASC") {
      sortedLaunches = [
        ...launchesToBeSorted.sort((a, b) =>
          a.launch_date_unix >= b.launch_date_unix ? 1 : -1
        ),
      ];
    } else {
      sortedLaunches = [
        ...launchesToBeSorted.sort((a, b) =>
          a.launch_date_unix <= b.launch_date_unix ? 1 : -1
        ),
      ];
    }
    return sortedLaunches;
  };

  const setUserSelectedYear = (e) => {
    setCurrentSelectedYear(e.target.value);
  };

  const createListOfLaunchYears = (data) => {
    const allLaunchYears = data.map((launch) => launch.launch_year);

    const launchYears = [...new Set(allLaunchYears)];

    setYearsOfLaunch(launchYears);
  };

  const toggleSortOrder = () => {
    if (sortOrder === "ASC") {
      setSortOrder("DESC");
    } else {
      setSortOrder("ASC");
    }
  };

  const handleReloadData = () => {
    fetchLaunches();
    setSortOrder("ASC");
  };

  useEffect(() => {
    filterLaunchesToDisplay();
  }, [sortOrder, currentSelectedYear]);

  useEffect(() => {
    fetchLaunches();
  }, []);

  return (
    <>
      <Navbar handleReloadData={handleReloadData} isLoading={isLoading} />
      <main className="main">
        <picture className="main__launch-img">
          <source srcSet={`${LaunchHome}, ${LaunchHome2x}, ${LaunchHome3x}`} />
          <img src={LaunchHome} alt="rocket taking off to space" />
        </picture>

        <div className="main__launchlist-container">
          <LaunchFilters
            toggleSortOrder={toggleSortOrder}
            launchYears={yearsOfLaunch}
            sortOrder={sortOrder}
            userSelectedYear={setUserSelectedYear}
          />
          <LaunchList launches={launchesToDisplay} />
        </div>
      </main>
    </>
  );
};

export default Main;
