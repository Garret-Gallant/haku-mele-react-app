import React from "react";
import SongCard from './SongCard';

function SongCollection({ songs })
{


  return (
    <div className='cards'>
        {songs.map((song) => <SongCard key={song.id} song={song} />)}
    </div>
  );
}

export default SongCollection;
