import React from "react";
import "./Hero.css";
import Title from "../Title/Title";
import LatestSection from "../LatestSection/LatestSection";
import { Link } from "react-router-dom";
import Logbook from "../Logbook/Logbook";

const Hero = () => {
  return (
    <>
      <div className="hero container ">
        <div className="hero-text">
          <h1>The world's greatest adventure awaits </h1>
          <p>
            Dive into ultimate repositary of Grand Line knowledge.From the
            darkest depths of Impel Down to the height of Skypiea, your journey
            through the One Piece universe starts here
          </p>
          <div className="hero-btn">
            <button className="btn start-btn">Start your Voyage</button>
            <Link to="/world-map">
              <button className="btn map-btn">view map</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="latestSection-container">
        <Title title="Latest from the new world" />
        <LatestSection />
      </div>
      <div className="logbook-container">
      <Title title="The Straw Hat Logbook" />
        <Logbook />
      </div>
    </>
  );
};

export default Hero;
