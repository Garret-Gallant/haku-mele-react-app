import React, { useEffect, useInsertionEffect } from "react";
import SongCard from "./SongCard";

function RandomSong({ songs, handleFavoriteSong }) {
  console.log(songs);

  function getRandomSong(){
   let randomSong = songs[Math.floor(Math.random() * songs.length)];
   console.log(randomSong);
  }

  return (
    <div className="holder">
    <div className="random-song">
      <label>Pick a Genre: </label>
      <select>
        <option value="metal">Metal</option>
        <option value="jazz">Jazz</option>
        <option value="oldies">Oldies</option>
        <option value="lofi">LoFi</option>
        <option value="reggaeton">Reggaeton</option>
        <option value="hip-hop">Hip Hop</option>
        <option value="pop">Pop</option>
        <option value="indie">Indie</option>
        <option value="punk">Punk</option>
        <option value="edm">EDM</option>
        <option value="rap">Rap</option>
        <option value="k-pop">K-Pop</option>
        <option value="country">Country</option>
      </select>
      <button onClick={getRandomSong}>Generate a Random Song!</button>
    </div>
    </div>

  );
}

export default RandomSong;
