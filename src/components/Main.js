import React, { useState, useEffect } from "react";
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
  const [filteredLaunches, setFilteredLaunches] = useState("");
  const [launchYears, setLaunchYears] = useState([]);

  const filterByYear = (e) => {
    setFilteredLaunches(e.target.value);
  };

  const fetchLaunches = async () => {
    try {
      const { data } = await axios.get(BASE_API_URL);
      setLaunches(data);
      updateLaunchYears(data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateLaunchYears = (data) => {
    const launchYears = [];

    data.forEach((launch) => {
      if (!launchYears.includes(launch.launch_year))
        launchYears.push(launch.launch_year);
    });

    setLaunchYears([...launchYears]);
    console.log(launchYears);
  };

  const handleSortByDesc = () => {
    const sortedLaunches = launches.sort((a, b) =>
      a.launch_date_unix <= b.launch_date_unix ? 1 : -1
    );
    console.log(sortedLaunches);
    setLaunches([...sortedLaunches]);
  };

  const handleReloadData = () => {
    setLaunches([]);
    updateLaunchYears([]);
    fetchLaunches();
  };

  useEffect(() => {
    fetchLaunches();
  }, []);

  return (
    <>
      <Navbar handleReloadData={handleReloadData} />
      <main className="main">
        <picture className="main__launch-img">
          <source srcSet={`${LaunchHome}, ${LaunchHome2x}, ${LaunchHome3x}`} />
          <img src={LaunchHome} alt="rocket taking off to space" />
        </picture>

        <div className="main__launchlist-container">
          <LaunchFilters
            handleSortByDesc={handleSortByDesc}
            filterByYear={filterByYear}
            filteredLaunches={filteredLaunches}
            launchYears={launchYears}
          />
          <LaunchList launches={launches} />
        </div>
      </main>
    </>
  );
};

export default Main;
