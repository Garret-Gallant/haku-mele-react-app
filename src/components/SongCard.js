import React from 'react';

function SongCard( {song} ){

    const {
        id, 
        name, 
        artist, 
        album, 
        subGenre, 
        albumPic ="https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg", 
        youtube, 
        spotify} 
    = song

    return (
    <div>
        <div>
        <div className="image">
          <img src={albumPic} alt="Album Image" />
        </div>
        <h3>{name}</h3>
        <div className="extra content">
            <h3>{artist}</h3>
            <h3>{album}</h3>
            <h3>{subGenre}</h3>
            <href src={youtube}/>
            <href src={spotify} />
        </div>
      </div>
    </div>
    )
}

export default SongCard;