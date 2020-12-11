import React from "react";

const LaunchItem = ({ launch }) => {
  return (
    <div className="main__launchitems-container">
      <li>
        <h1>{launch.flight_number}</h1>
        <h2> {launch.mission_name}</h2>
        <div>
          <p>{launch.launch_date_unix}</p>
          {/* <p>{launch.rocket.rocket_name}</p> */}
        </div>
      </li>
    </div>
  );
};

export default LaunchItem;
