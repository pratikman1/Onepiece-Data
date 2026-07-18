import React from "react";
import "./EpisodeCard.css";
import { useState } from "react";
import { useEffect } from "react";

const EpisodeCard = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.api-onepiece.com/v2/episodes/en");
        const data = await res.json();
        setEpisodes(data);
        console.log(data, "man");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="episode-container">
      <div className="episode-grid">
        {episodes.slice(0,10).map((episode) => (
          <div className="episode-card" key={episode.id}>
            <div className="episode-image">
              <img
                src={`/episodes/${episode.id}.jpg`}
                alt={episode.title}
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/400x250/1d1d1d/f5d37b?text=Episode";
                }}
              />

              <div className="episode-number">
                EP {String(episode.number).padStart(2, "0")}
              </div>
            </div>

            <div className="episode-body">
              <h2>{episode.title}</h2>

              <p>
                {episode.description.length > 120
                  ? episode.description.substring(0, 120) + "..."
                  : episode.description}
              </p>

              <button>▶ ARCHIVE ACCESS</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EpisodeCard;
