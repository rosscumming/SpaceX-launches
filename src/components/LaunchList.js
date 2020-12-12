import React from "react";
import LaunchItem from "./LaunchItem";

const LaunchList = ({ launches }) => {
  return (
    <ul className="main__launchlist">
      {launches && launches.length === 0 ? (
        <li>Loading launches...</li>
      ) : (
        launches.map((launch) => {
          return (
            <LaunchItem
              flightNumber={launch.flight_number}
              missionName={launch.mission_name}
              launchDate={launch.launch_date_unix}
              rocketName={launch.rocket.rocket_name}
              key={launch.mission_name}
            />
          );
        })
      )}
    </ul>
  );
};

export default LaunchList;
