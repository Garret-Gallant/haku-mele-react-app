import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar({}) {
  return (
    <div className="nav-bar">
      <div className="sidebar">
        <NavLink to="/">
          <img
            id="logo"
            src={require("../Assets/logo.png")}
            alt="Logo"
            height="125"
          />
        </NavLink>
        <li>
          <ul>
            <NavLink className="navbutton" to="/">
              All Songs
            </NavLink>
          </ul>
          <ul>
            <NavLink className="navbutton" to="/add-song">
              Add A New Song
            </NavLink>
          </ul>
          <ul>
            <NavLink className="navbutton" to="/random-song">
              Random Song
            </NavLink>
          </ul>
          <ul>
            <NavLink className="navbutton" to="/favorites">
              Favorites
            </NavLink>
          </ul>
          <ul>
            <NavLink className="navbutton" to="/about">
              About
            </NavLink>
          </ul>
        </li>
      </div>
    </div>
  );
}

export default NavBar;
