import React from "react";
import LaunchItem from "./LaunchItem";

const LaunchList = ({ launches }) => {
  return (
    <ul className="main__launchlist-container">
      {launches && launches.length === 0 ? (
        <li>Cannot find any launches</li>
      ) : (
        launches.map((launch) => {
          return (
            <LaunchItem
              flightNumber={launch.flight_number}
              missionName={launch.mission_name}
              launchDate={launch.launch_date_unix}
              rocketName={launch.rocket.rocket_name}
            />
          );
        })
      )}
    </ul>
  );
};

export default LaunchList;
