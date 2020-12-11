import React from "react";
import moment from "moment";

const LaunchItem = ({ launch }) => {
  return (
    <div className="main__launchitems-container">
      <li>
        <h1>{launch.flight_number}</h1>
        <h2> {launch.mission_name}</h2>
        <div>
          <p>{moment.unix(launch.launch_date_unix).format("DD/MM/YYYY")}</p>
          <p>{launch.rocket_name}</p>
        </div>
      </li>
    </div>
  );
};

export default LaunchItem;
