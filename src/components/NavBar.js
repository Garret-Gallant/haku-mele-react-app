import React, {useState} from "react";
import { NavLink } from "react-router-dom";

function NavBar( { sortByGenre, setSearchQuery, sortDefault /*setSortBy*/} ) {

  const [checkbox, setCheckbox] = useState(false);

  function toggleCheckbox() {
    setCheckbox((checkbox) => !checkbox)
  }

  return (
    <div className='nav-bar'>
      <div className="sidebar">
        <NavLink to="/">
          <img id="logo" src={require("../images/logo.png")} alt="Logo" height="125" />
        </NavLink>
          <input onChange={((e) => setSearchQuery(e.target.value))} className='button' type='text' placeholder='Search a song' />
       <div className="sort-inputs">
          <label>Sort By Genre? </label>
          <input type='checkbox' onChange={toggleCheckbox} onClick={checkbox ? sortDefault : sortByGenre} /* name="Sortby" defaultValue = "" onChange={(e)=> {setSortBy(e.target.value)}} */>
              {/* <option value="">Default</option>
              <option onChange={sortByGenre} value="genre">Genre</option>
              <option value="artist">Artist</option>
              <option value="name">Name</option>
              <option value="album">Album</option> */}
          </input>
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
