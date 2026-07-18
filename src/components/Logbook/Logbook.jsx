import React from "react";
import "./Logbook.css";
import zoroImage from "../../assets/moss_head.png";
import sunny from "../../assets/sunny.png";
import poneglyph from "../../assets/poneglyph.png";

const Logbook = () => {
  //   const logbookEntries = [
  //     {
  //       id: 1,
  //       title: "MOSS HEAD'S NEW FEAT",
  //       description:
  //         "Luffy sets sail from Foosha Village, beginning his adventure to become the Pirate King.",
  //     },
  //   ];

  return (
    
    <section>
      <div className="logbook-section">
        <div className="news-card">
          <div className="news-image">
            <img src={zoroImage} alt="Zoro" />
          </div>

          <div className="news-content">
            <h2>MOSS HEAD'S NEW FEAT</h2>

            <span className="category">WANTED</span>

            <p>
              Reports suggest Zoro has mastered a new sword style during the
              clash on Egghead. Marines are on high alert.
            </p>

            <h4>B 1,111,000,000</h4>
          </div>
        </div>
        <div className="news-card">
          <div className="news-image">
            <img src={sunny} alt="Sunny" />
          </div>

          <div className="news-content">
            <h2>SUNNY'S UPGRADES</h2>

            <span className="category">SHIP LOG</span>

            <p>
              Franky reveals a new 'Coup de Burst' modification designed for
              escaping marine blockades in record time.
            </p>

            <h4>VEGAPUNK TECH</h4>
          </div>
        </div>
        <div className="news-card">
          <div className="news-image">
            <img src={poneglyph} alt="Sunny" />
          </div>

          <div className="news-content">
            <h2>PONEGLYPH REVEAL</h2>

            <span className="category">FORBIDDEN</span>

            <p>
              Robin deciphered the translation of the ancient text found in the
              depths of the Elbaf library. The truth nears.
            </p>

            <h4>VOID HISTORY</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logbook;
