import React from "react";
import LaunchItem from "./LaunchItem";

const LaunchList = ({ launches }) => {
  return (
    <ul className="main__launchlist-container">
      {launches && launches.length === 0 ? (
        <li>Cannot find any launches</li>
      ) : (
        launches.map((launch) => {
          return <LaunchItem launch={launch} key={launch.id} />;
        })
      )}
    </ul>
  );
};

export default LaunchList;
