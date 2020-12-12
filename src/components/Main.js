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

  const fetchLaunches = async () => {
    try {
      const { data } = await axios.get(BASE_API_URL);
      setLaunches(data);
      // setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleReloadData = () => {
    setLaunches([]);
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
          <LaunchFilters launches={launches} />
          <LaunchList launches={launches} />
        </div>
      </main>
    </>
  );
};

export default Main;
