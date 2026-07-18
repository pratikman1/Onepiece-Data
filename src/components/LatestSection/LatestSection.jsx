import React from "react";
import "./LatestSection.css";
import luffyImage from "../../assets/luffy.png";
import devilFruit from "../../assets/devil_fruit.png";
import bounty from "../../assets/bounty.png";
import atlas from "../../assets/atlas.png";
import { FaArrowRight } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const LatestSection = () => {
  return (
    <section>
      <div className="latest-section">
        <div className="card ">
          {" "}
          <img src={luffyImage} alt="" />
          <div className="content">
            <h3>The Warrior of Liberation: Gear 5 Awakens</h3>
            <p>
              Witness the historical transformation that shook the foundations
              of the New World. Luffy's ultimate peak revealed
            </p>
          </div>
        </div>

        <div className="card">
          <img src={devilFruit} alt="" />
          <div className="content">
            <h3 className="text-secondary">Encyclopaedia of Fruits</h3>
            <p>
              Explore the mysterious world of Devil Fruits, their powers, and
              the legends surrounding them. Uncover the secrets of these
              mystical fruits.
            </p>
            <NavLink to="devil-fruit">
              <button className="btn">
                Explore Powers <FaArrowRight />{" "}
              </button>
            </NavLink>
          </div>
        </div>

        <div className="card">
          {" "}
          <img src={atlas} alt="" />
          <div className="content">
            <h3 className="text-secondary">World Atlas</h3>
            <p>
              Navigate the vast seas of the One Piece world with our detailed
              atlas. Discover islands, territories, and the rich geography of
              this expansive universe.
            </p>
            <NavLink to="world-map">
              <button className="btn">
                See Details <FaArrowRight />{" "}
              </button>
            </NavLink>
          </div>
        </div>
        <div className="card">
          <img src={bounty} alt="" />
          <div className="content">
            <h3 className="text-secondary">BOUNTY UPDATES</h3>
            <p>
              Stay informed about the latest bounty announcements and the most
              wanted pirates in the One Piece world.
            </p>
            <NavLink to="characters">
              <button className="btn">
                Check Bounties <FaArrowRight />{" "}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;
