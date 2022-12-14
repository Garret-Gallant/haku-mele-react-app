import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import SongForm from "./SongForm";
import RandomSong from "./RandomSong";
import SongCollection from "./SongCollection";
import Favorites from "./Favorites";
import About from "./About";
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
  const [randomSong, setRandomSong] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  function getRandomSong() {
    setRandomSong(songs[Math.floor(Math.random() * songs.length)]);
  }

  function sortSongs(fSort) {
    if (fSort === "name") {
      const songsByName = [...songs].sort((song, nextSong) =>
        nextSong.name < song.name ? 1 : -1
      );
      setSongs(songsByName);
    }
    if (fSort === "genre") {
      const songsByGenre = [...songs].sort((song, nextSong) =>
        nextSong.genre < song.genre ? 1 : -1
      );
      setSongs(songsByGenre);
    }
    if (fSort === "artist") {
      const songsByArtist = [...songs].sort((song, nextSong) =>
        nextSong.artist < song.artist ? 1 : -1
      );
      setSongs(songsByArtist);
    }
    if (fSort === "album") {
      const songsByAlbum = [...songs].sort((song, nextSong) =>
        nextSong.album < song.album ? 1 : -1
      );
      setSongs(songsByAlbum);
    }
  }

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

  function addSong(newSong) {
    setSongs((songs) => {
      return [...songs, newSong];
    });
  }

  function initialSort(songs) {
    const songsByName = [...songs].sort((song, nextSong) =>
      nextSong.name < song.name ? 1 : -1
    );
    setSongs(songsByName);
  }

  useEffect(() => {
    fetch("https://haku-mele-backend.herokuapp.com/songs")
      .then((res) => res.json())
      .then((songs) => initialSort(songs));
  }, []);

  return (
    <div className="App">
      <NavBar
        setSearchQuery={setSearchQuery}
        setSortBy={setSortBy}
        sortBy={sortBy}
        sortSongs={sortSongs}
      />
      <Route exact path="/">
        <SongCollection
          songs={searchResults}
          setSongs={setSongs}
          onChange={handleSearch}
          handleFavoriteSong={handleFavoriteSong}
          setSearchQuery={setSearchQuery}
          setSortBy={setSortBy}
          sortBy={sortBy}
          sortSongs={sortSongs}
        />
      </Route>
      <Route path="/add-song">
        <SongForm
          formData={formData}
          setFormData={setFormData}
          addSong={addSong}
        />
      </Route>
      <Route path="/random-song">
        <RandomSong
          song={randomSong}
          getRandomSong={getRandomSong}
          handleFavoriteSong={handleFavoriteSong}
        />
      </Route>
      <Route path="/favorites">
        <Favorites
          songs={songs}
          setSongs={setSongs}
          handleFavoriteSong={handleFavoriteSong}
        />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}

export default App;
