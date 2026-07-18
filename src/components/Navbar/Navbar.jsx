import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <Link to="/">
          <h2>GRAND LINE ARCHIEVE</h2>{" "}
        </Link>
      </div>
      <ul>
        <Link to="/characters">
          <li>Characters</li>
        </Link>
        <Link to="/world-map">
          <li>World Map</li>
        </Link>
        <Link to="/devil-fruit">
          <li>Devil Fruit</li>
        </Link>
        <Link to="/episodes">
          <li>Episodes</li>
        </Link>
      </ul>
      <input type="text" placeholder="Search" />
    </nav>
  );
};

export default Navbar;
