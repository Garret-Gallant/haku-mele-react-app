import React, { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar.js';
import SongForm from "./SongForm";
import RandomSong from './RandomSong';
import SongCollection from "./SongCollection";

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
