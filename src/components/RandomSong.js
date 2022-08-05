import React from "react";
import SongCard from "./SongCard";

function RandomSong({ song, getRandomSong, handleFavoriteSong }) {
  return (
    <div className="holder">
      <h2>Feeling lucky? Click to... </h2>
      <button className="random-button" onClick={getRandomSong}>
        GENERATE A RANDOM SONG
      </button>
      <div className="random-card">
        <SongCard
          key={song.id}
          song={song}
          handleFavoriteSong={handleFavoriteSong}
        />
      </div>
    </div>
  );
}

export default RandomSong;
