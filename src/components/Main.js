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
  const [launchYears, setLaunchYears] = useState([]);
  const [sortOrder, setSortOrder] = useState("ASC");
  const [selectedYear, setSelectedYear] = useState("");
  const [filteredYears, setFilteredYears] = useState([]);
  // state for filter year

  const fetchLaunches = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(BASE_API_URL);
      setIsLoading(false);
      setSortOrder("ASC");
      setLaunches(data);
      updateLaunchYears(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const userSelectedYear = (e) => {
    setSelectedYear(e.target.value);
  };

  const launchFilteredYears = (e) => {
    userSelectedYear(e);

    const filterOfYears = launches.filter(
      (launch) => selectedYear === launch.launch_year
    );

    setFilteredYears(filterOfYears);
  };

  // const filterByYear = () => {}
  // process on Change
  // set filter year

  const updateLaunchYears = (data) => {
    const allLaunchYears = data.map((launch) => launch.launch_year);

    const launchYears = [...new Set(allLaunchYears)];

    setLaunchYears(launchYears);
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
  };

  useEffect(() => {
    setLaunches((prevLaunches) => {
      let sortedLaunches = [];

      if (sortOrder === "ASC") {
        sortedLaunches = [
          ...prevLaunches.sort((a, b) =>
            a.launch_date_unix >= b.launch_date_unix ? 1 : -1
          ),
        ];
      } else {
        sortedLaunches = [
          ...prevLaunches.sort((a, b) =>
            a.launch_date_unix <= b.launch_date_unix ? 1 : -1
          ),
        ];
      }
      return sortedLaunches;
    });
  }, [sortOrder]);

  useEffect(() => {
    fetchLaunches();
  }, [fetchLaunches]);

  // const getFilteredlaunches = () =>{
  //   // should probably use useReducer()
  //   // look at the chosen filter year
  //   // return launches for that year

  // }

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
            launchYears={launchYears}
            sortOrder={sortOrder}
            launchFilteredYears={launchFilteredYears}
          />
          <LaunchList launches={launches} />
          {/* getFilteredlaunches() */}
        </div>
      </main>
    </>
  );
};

export default Main;
