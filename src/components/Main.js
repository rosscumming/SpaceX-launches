import React from "react";
import LaunchHome from "../css/imgs/launch-home.png";
import LaunchHome2x from "../css/imgs/launch-home@2x.png";
import LaunchHome3x from "../css/imgs/launch-home@3x.png";

const Main = () => {
  return (
    <main className="main">
      <picture className="main__launch-img">
        <source srcSet={`${LaunchHome}, ${LaunchHome2x}, ${LaunchHome3x}`} />
        <img src={LaunchHome} alt="rocket taking off to space" />
      </picture>
    </main>
  );
};

export default Main;
