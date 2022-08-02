import React from "react";
import SongCard from "./SongCard";

function Favorites({ songs }) {
    const songList = songs.filter((song) => song.favorite)
    return (
    <div className="holder">
    <div className="cards">
      {songList.length===0 ? <h2 className='favorite-text'>You don't have any favorites yet! Like a few songs to have them show here!</h2> 
      :
      songList.map((song) => (<SongCard key={song.id} song={song} />))}
    </div>
    </div>
  );
}

export default Favorites;
