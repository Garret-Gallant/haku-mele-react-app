import React, { useState, useEffect, useInsertionEffect } from "react";
import SongCard from "./SongCard";

function RandomSong({ song, getRandomSong }) {

  return (
    <div className="holder">
      <h2>Feeling lucky? Click to... </h2>
      <button className='button' onClick={getRandomSong}>Generate a Random Song!</button>
      <div className='random-card'><SongCard key={song.id} song={song}/></div>
    </div>
  );
}

export default RandomSong;
