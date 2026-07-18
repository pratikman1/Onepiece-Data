import React from "react";
import "./EpisodeCard.css";
import { useState } from "react";
import { useEffect } from "react";

const EpisodeCard = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currPage, setCurrPage] = useState(1);

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

  // Pagination
  const pageSize = 10;

  const startIndex = (currPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
//   const currentEpisodes = episodes.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex < episodes.length) {
      setCurrPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currPage > 1) {
      setCurrPage((prev) => prev - 1);
    }
  };

  return (
    <section className="episode-container">
      <div className="episode-grid">
        {episodes.slice(startIndex, endIndex).map((episode) => (
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
      {/* Pagination */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currPage === 1}>
          ← Previous
        </button>

        <span>Page {currPage}</span>

        <button onClick={nextPage} disabled={endIndex >= episodes.length}>
          Next →
        </button>
      </div>
    </section>
  );
};

export default EpisodeCard;
