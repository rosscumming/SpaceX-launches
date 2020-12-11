import React from "react";

import LaunchHome from "../css/imgs/launch-home.png";
import LaunchHome2x from "../css/imgs/launch-home@2x.png";
import LaunchHome3x from "../css/imgs/launch-home@3x.png";
import LaunchFilters from "./LaunchFilters";
import LaunchList from "./LaunchList";

const Main = () => {
  return (
    <main className="main">
      <picture className="main__launch-img">
        <source srcSet={`${LaunchHome}, ${LaunchHome2x}, ${LaunchHome3x}`} />
        <img src={LaunchHome} alt="rocket taking off to space" />
      </picture>

      <div className="main__launchlist-container">
        <LaunchFilters />
        <LaunchList />
      </div>
    </main>
  );
};

export default Main;
