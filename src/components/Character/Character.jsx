import React from "react";
import "./Character.css";
import CharacterCard from "../CharacterCard/CharacterCard";

const Character = () => {
  return (
    <section className="character-container">
      <div className="crew-header">
        <div className="crew-title">
          <span className="subtitle">THE STRAW HAT GRAND FLEET</span>
          <h1>
            Crew <br />
            <span>Gallery</span>
          </h1>
        </div>

        <div className="crew-filters">
          <button className="active">All Crews</button>
          <button>Fighters</button>
          <button>Strategists</button>
          <button>Bounty: High to Low</button>
        </div>
      </div>
      <div>
        <CharacterCard />
      </div>
    </section>
  );
};

export default Character;
