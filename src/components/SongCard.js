import React from 'react';

function SongCard( {song} ){

    const {
        id, 
        name, 
        artist, 
        album, 
        genre,
        subGenre, 
        albumPic = "https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg", 
        youtube, 
        spotify} 
    = song

    return (
    <div className='card' text-align='center'>
        <div className="image" text-align='center'>
          <img position='relative' height='350' width='350' src={albumPic} alt="Album Image" />
        </div>
        <h1>{name}</h1>
        <div className='card-content'>
            <h3>By: {artist}</h3>
            <h3>Album: {album}</h3>
            {genre ? <h3>Genre: {genre}</h3> : null}
            {subGenre ? <h3>Sub-Genre: {subGenre}</h3> : null}
            <a href={youtube} className='button'>Youtube</a>
            <a className='button' href={spotify}>Spotify</a> 
            
        </div>
    </div>
    )
}

export default SongCard;