import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/About"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>À propos</li>
          </NavLink>
          <NavLink
            to="/Blog"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Blog</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
