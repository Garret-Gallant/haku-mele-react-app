import React from 'react';

function NavBar(){
    return (
        <div>
            <nav className="navbar">
            <label>Genre: </label>
            <select>
                <option value="metal">Metal</option>
                <option value="jazz">Jazz</option>
                <option value="oldies">Oldies</option>
                <option value="lofi">LoFi</option>
            </select>
            </nav>
        </div>
    )
}

export default NavBar;