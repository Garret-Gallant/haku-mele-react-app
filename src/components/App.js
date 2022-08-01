import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import SongForm from "./SongForm";
import RandomSong from "./RandomSong";
import SongCollection from "./SongCollection";
import Favorites from './Favorites';
import About from "./About";

//Goals
//get random render function for a single card
//like function => favorites page

//Stretch Goals
//Add user auth
//Add Delete button which works w/ correct password ONLY
//👍

function App() {

  const [formData, setFormData] = useState({
    name: "",
    artist: "",
    album: "",
    genre: "",
    subGenre: "",
    albumPic: "",
    youtube: "",
    spotify: "",
  });

  const [songs, setSongs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = songs.filter(
    (song) =>
      song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.album.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function handleFavoriteSong(favoriteSong) {
    const favoriteSongs = songs.map((song) =>
    song.id === favoriteSong.id ? favoriteSong : song
    );
    setSongs(favoriteSongs);
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  function addSong(newSong)
  {
    setSongs(songs=>{return[...songs, newSong]})
  }

  useEffect(() => {
    fetch("http://localhost:4000/songs")
      .then((res) => res.json())
      .then((songData) => setSongs(songData));
  }, []);

  return (
    <div className="App">
      <NavBar setSearchQuery={setSearchQuery}/>
      <Route exact path="/">
        <SongCollection
          songs={searchResults}
          setSongs={setSongs}
          onChange={handleSearch}
          handleFavoriteSong={handleFavoriteSong}
        />
      </Route>
      <Route path="/add-song">
        <SongForm formData={formData} setFormData={setFormData} addSong={addSong} />
      </Route>
      <Route path="/random-song">
        <RandomSong />
      </Route>
      <Route path="/favorites">
          <Favorites songs={songs} setSongs={setSongs} />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
