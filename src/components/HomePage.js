import React, { useEffect } from "react";
import SongForm from './SongForm';
import SongPage from './SongPage';
import SongCollection from './SongCollection';
import NavBar from './NavBar';


function HomePage() {
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
