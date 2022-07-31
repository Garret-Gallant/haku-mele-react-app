import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.js';
import SongForm from "./SongForm";
import RandomSong from './RandomSong';
import SongCollection from "./SongCollection";

//Goals
//look into bootstrap for styling
//get random render function for a single card
//add links and routes for a more dynamic render stlye
//add a search function to be filtered by genre, artist, etc.
//like function => favorites page
//pages we want: 
//all songs, random songs, add a song, about, favorites
//👍 

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/songs")
      .then((res) => res.json())
      .then((songData) => setSongs(songData));
  }, []);

  return (
    <div className="App">
      <NavBar />
        <Route exact path='/'>
          <SongCollection songs={songs}/>
        </Route>
        <Route path='/add-song'>
          <SongForm />
        </Route>
        <Route path='/random-song'>
          <RandomSong />
        </Route>
    </div>
  );
}

export default App;
