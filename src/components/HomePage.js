import React, { useEffect, useState } from "react";
import SongForm from "./SongForm";
import SongPage from "./SongPage";
import SongCollection from "./SongCollection";
import NavBar from "./NavBar";

function HomePage() {
    
    const [songs, setSongs] = useState([])

    useEffect(() => {
      fetch("http://localhost:4000/songs")
        .then((res) => res.json())
        .then((songData) => setSongs(songData));
    }, []);
  
    console.log(songs)

  return (
    <div>
      <NavBar />
      <SongForm />
      <SongCollection />
      <SongPage />
    </div>
  );
}

export default HomePage;
