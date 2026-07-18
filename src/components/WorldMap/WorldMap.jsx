import React from "react";
import "./WorldMap.css";
import { FaLocationDot } from "react-icons/fa6";

const WorldMap = () => {
  return (
    <section className="current">
      <div className="grandline-map">
        <h1>Grand Line Map</h1>
        <p>
          Chart the treacherous waters from the East Blue to the cutting-
          <br />
          <span>edge shores of Egghead. Each island holds a legend.</span>
        </p>
        <div className="location">
          <div>
            <span>
              <FaLocationDot />
            </span>
          </div>
          <div>
            <span>Current: Elbaph</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
