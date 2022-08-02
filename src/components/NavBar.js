import React from "react";
import { NavLink } from "react-router-dom";

function NavBar( { setSearchQuery, setSortBy } ) {

  return (
    <div className='nav-bar'>
      <div className="sidebar">
        <NavLink to="/">
          <img id="logo" src={require("../images/logo.png")} alt="Logo" height="100" />
        </NavLink>
          <input onChange={((e) => setSearchQuery(e.target.value))} className='button' type='text' placeholder='Search a song' />
       <div className="sort-inputs">
          <label>Sort By: </label>
          <select name="Sortby" defaultValue = "" onChange={(e)=> setSortBy(e.target.value)}>
              <option value="">Default</option>
              <option value="genre">Genre</option>
              <option value="artist">Artist</option>
              <option value="name">Song</option>
              <option value="album">Album</option>
          </select>
          </div>
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
            Random Song
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
