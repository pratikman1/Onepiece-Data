import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      {/* Footer left side with copyright information */}
      <div className="footer-left">
        <h2>GRAND LINE ARCHIVE</h2>
        <p>
          The ultimate destination for One Piece fans. Built by Nakama, for
          Nakama.
        </p>
        <p>
          © 1524 Sea Era - Straw Hat Grand Fleet. One Piece. All rights
          reserved.
        </p>
      </div>
      {/* Footer middle section */}
      <div className="footer-middle">
        <div>
          <h3>Crew Recruitment</h3>
        </div>
        <div>
          <h3>Privacy Policy</h3>
        </div>
        <div>
          {" "}
          <h3>Grand Line Terms</h3>
        </div>
      </div>
      {/* Footer right side with social media links */}
      <div className="footer-right">
        <NavLink to="https://github.com/pratikman1">
          <FaGithub />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/pratik-anand-98a100333/">
          <FaLinkedin />
        </NavLink>
        <NavLink>
          <FaWhatsapp />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
