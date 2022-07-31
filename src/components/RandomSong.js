import React from "react";

function RandomSong() {
  return (
    <div className='random-song'>
      <label>Pick a Genre: </label>
      <select>
        <option value="metal">Metal</option>
        <option value="jazz">Jazz</option>
        <option value="oldies">Oldies</option>
        <option value="lofi">LoFi</option>
      </select>
      <button>Generate a Random Song!</button>
    </div>
  );
}

export default RandomSong;
