import React from "react";
import moment from "moment";

const LaunchItem = ({ flightNumber, missionName, launchDate, rocketName }) => {
  return (
    <div className="main__launchitems-container">
      <li>
        <h1>#{flightNumber}</h1>
        <h2> {missionName}</h2>
        <div className="main__launchitems-container-info">
          <p className="main__launchitems-container-date">
            {moment.unix(launchDate).format("Do MMM YYYY")}
          </p>
          <p className="main__launchitems-container-rocketname">{rocketName}</p>
        </div>
      </li>
    </div>
  );
};

export default LaunchItem;
