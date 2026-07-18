import React from "react";
import "./Episodes.css";
import { FaStar } from "react-icons/fa";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

const Episodes = () => {
  return (
    <section className="episode-section">
      <div className="intro">
        <div className="view">
          <h2>East Blue Saga</h2>
          <p>
            The dawn of an adventure. Follow Monkey D. Luffy as he gathers his
            crew and heads <br /> towards the Grand Line to find the legendary
            One Piece.
          </p>
        </div>
      </div>
      <div className="key-moments">
        <FaStar />
        <span>Must-Watch Key Moments</span>
      </div>

      <div className="must-watch">
        <div className="episode1">
          <div className="overlay"></div>

          <div className="episode-content">
            <span className="episode-tag">ICONIC DEBUT</span>

            <h1>
              Episode 1: I'm Luffy! The Man Who's Gonna Be King of the Pirates!
            </h1>

            <p>
              Luffy sets sail into the great unknown, meeting Coby and taking on
              the terrifying Alvida. The legend begins here.
            </p>
          </div>
        </div>
        <div className="episode2">
          <div className="overlay"></div>

          <div className="episode-content">
            <span className="episode-tag">Key Moment</span>

            <h1>Episode 2: The Great Swordsman Appears! </h1>

            <p>
              Luffy meets the Pirate Hunter Roronoa Zoro, the man who will
              become his first mate.
            </p>
          </div>
        </div>
      </div>
      {/* episode card */}
      <EpisodeCard />
    </section>
  );
};

export default Episodes;
