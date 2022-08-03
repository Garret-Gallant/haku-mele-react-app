import React from "react";
import SongCard from "./SongCard";

function Favorites( { handleFavoriteSong, songs } ) {
    const songList = songs.filter((song) => song.favorite)
    return (
    <div className="holder">
    <div className="cards">
      {songList.length===0 ? <h2 className='favorite-text'>you don't have any favorites yet... <br/> like a few songs to have them show here</h2> 
      :
      songList.map((song) => (<SongCard key={song.id} song={song} handleFavoriteSong={handleFavoriteSong}/>))}
    </div>
    </div>
  );
}

export default Favorites;
