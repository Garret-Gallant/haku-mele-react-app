import React from 'react';

function SongCard(){
    return (
    <div>
        <div>
        <div className="image">
          <img src="placeholder" alt="placeholder" />
        </div>
        <h3>Name of Song</h3>
        <div className="extra content">
            <h3>artist</h3>
            <h3>album</h3>
            <h3>albumPic</h3>
            <h3>youtube</h3>
            <h3>spotify</h3>  
        </div>
      </div>
    </div>
    )
}

export default SongCard;