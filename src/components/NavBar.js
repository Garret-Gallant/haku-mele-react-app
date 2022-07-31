import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div>
      <NavLink to="/">
        <img id="logo" src={require("../images/logo.png")} alt="Logo" height="150" />
      </NavLink>
      <NavLink className='button' to="/">
        All Songs
      </NavLink>
      <NavLink className='button' to="add-song">
        Add A New Song
      </NavLink>
      <NavLink className='button' to="random-song">
        Random Song Generator
      </NavLink>
    </div>
  );
}

export default NavBar;
