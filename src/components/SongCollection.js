import React from "react";
import SongCard from "./SongCard";


function SongCollection({ handleFavoriteSong, songs}) {
  return (<div className="holder">
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
