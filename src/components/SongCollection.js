import React from "react";
import SongCard from "./SongCard";


function SongCollection({ setSearchQuery, sortSongs, sortBy, setSortBy, handleFavoriteSong, songs}) {
  
  function handleChange(e)
  {
    let fSort= e;
    setSortBy(fSort);
    sortSongs(fSort);
  }
  
  return (
  
    <div className="holder">
    <input onChange={((e) => {setSearchQuery(e.target.value)})} className='search-form' type='text' placeholder='Search a song' /* only show on homepage */ />
    <br></br>
          <label className='sort-text'>Sort By: </label>
          <select className='drop-down' name="Sortby" value={sortBy} onChange={(e)=> handleChange(e.target.value)}>
              <option value="default">Default</option>
              <option value="genre">Genre</option>
              <option value="artist">Artist</option>
              <option value="name">Name</option> 
              <option value="album">Album</option> 
          </select>
    <div className="cards">
      {songs.map((song) => (
        <SongCard
          key={song.id}
          handleFavoriteSong={handleFavoriteSong}
          song={song}
        />
      ))}
    </div>
    </div>
  );
}

export default SongCollection;
