import React from "react";
import SongCard from "./SongCard";


function SongCollection({ handleFavoriteSong, songs, setSongs }) {
  return (
    <div className="cards">
      {songs.map((song) => (
        <SongCard
          key={song.id}
          handleFavoriteSong={handleFavoriteSong}
          song={song}
        />
      ))}
    </div>
  );
}

export default SongCollection;
