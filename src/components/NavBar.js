import React from "react";
import { NavLink } from "react-router-dom";

function NavBar( { setSearchQuery } ) {

  return (
    <div className='nav-bar'>
      <div className="sidebar">
        <NavLink to="/">
          <img id="logo" src={require("../images/logo.png")} alt="Logo" height="100" />
        </NavLink>
          <input onChange={((e) => setSearchQuery(e.target.value))} className='button' type='text' placeholder='Search a song' />
        <li>
        <ul>
          <NavLink className='navbutton' to="/">
            All Songs
          </NavLink>
        </ul>
        <ul>
          <NavLink className='navbutton' to="/add-song">
            Add A New Song
          </NavLink>
        </ul>
        <ul>
          <NavLink className='navbutton' to="/random-song">
            Random Song Generator
          </NavLink>
        </ul>
        <ul>
          <NavLink className='navbutton' to="/favorites">
            Favorites
          </NavLink>
        </ul>
        <ul>
          <NavLink className='navbutton' to="/about">
            About
          </NavLink>
        </ul>
      </li>
      </div>
    </div>
  );
}

export default NavBar;
