import React from "react";
import { NavLink } from "react-router-dom";

function NavBar( { setSearchQuery } ) {

  return (
    <div className='nav-bar'>
      <NavLink to="/">
        <img id="logo" src={require("../images/logo.png")} alt="Logo" height="150" />
      </NavLink>
      <input onChange={((e) => setSearchQuery(e.target.value))} className='button' type='text' placeholder='Search a song' />
      <NavLink className='button' to="/">
        All Songs
      </NavLink>
      <NavLink className='button' to="/add-song">
        Add A New Song
      </NavLink>
      <NavLink className='button' to="/random-song">
        Random Song Generator
      </NavLink>
      <NavLink className='button' to="/favorites">
        Favorites
      </NavLink>
      <NavLink className='button' to="/about">
        About
      </NavLink>
    </div>
  );
}

export default NavBar;
