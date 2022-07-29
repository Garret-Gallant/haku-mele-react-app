import React from 'react';

function NavBar({songs}){
    
    // console.log(songs[2].name) 
 
    return (
        <div>
            <nav className="navbar" />
            <select>
                {/* {songArray.map((song)=>{
                <option>{song}</option>})}
                 */}
            </select>
        </div>
    )
}

export default NavBar;