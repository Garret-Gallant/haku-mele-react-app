import React, { useEffect, useState } from "react";
import SongForm from "./SongForm";
import SongPage from "./SongPage";
import SongCollection from "./SongCollection";
import NavBar from "./NavBar";
//Goals
//look into bootstrap for styling
//get random render function for a single card
//add links and routes for a more dynamic render stlye
//add a search function to be filtered by genre, artist, etc.
//like function => favorites page
//pages we want: 
//all songs, random songs, add a song, about, favorites
//👍 


function HomePage() {
    
    const [songs, setSongs] = useState([])

    useEffect(() => {
      fetch("http://localhost:4000/songs")
        .then((res) => res.json())
        .then((songData) => setSongs(songData));
    }, []);

  return (
    <div>
      <img id="logo" src={require("../images/logo.png")} alt="Logo" height="150"/>
      <SongForm />
      <NavBar />
      <SongCollection songs={songs}/>
      <SongPage />
    </div>
  );
}

export default HomePage;
