import React from "react";
import SongCard from "./SongCard";

function Favorites({ songs, setSongs }) {
    const songList = songs.filter((song) => song.favorite)
    return (
    <div className="cards">
      {songList.map((song) => (
      <SongCard key={song.id} song={song} />))}
    </div>
  );
}

export default Favorites;
