import React from "react";
import {useState} from 'react';

function SongCard({ handleFavoriteSong, song }) {
  const {
    id,
    name = 'Random Name',
    artist = 'Randomized!',
    album = 'Randomized!',
    genre = 'Randomized!',
    subGenre = 'Randomized!',
    albumPic = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png',
    youtube = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    spotify = 'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=74eb29924d1a4ac7',
    favorite = false,  
  } = song;


  function flipFavorite(){
    const favoriteObj = {
        favorite: (song.favorite = !favorite),
      };
      fetch(`http://localhost:4000/songs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favoriteObj),
      })
        .then((res) => res.json())
        .then(handleFavoriteSong);
  }

  return (
    <div className="card" text-align="center">
      <div className="image" text-align="center">
      <a className="ui left corner label">
        <i className="heart icon"></i>
      </a>
        <img
          position="relative"
          height="350"
          width="350"
          src={albumPic ? albumPic : require("../images/noImage.jpeg")}
          alt={album}
        />
      </div>
      <h1>{name}</h1>
      <div className="card-content">
        <h3>By: {artist}</h3>
        {album ? <h3>Album: {album}</h3> : null}
        {genre ? <h3>Genre: {genre}</h3> : null}
        {subGenre ? <h3>Sub-Genre: {subGenre}</h3> : null}
        <br></br>
        <a className="button" href={youtube}>
          Youtube
        </a>
        <a className="button" href={spotify}>
          Spotify
        </a>
        {favorite ? (
          <button onClick={flipFavorite} className="fav-button">★</button>
        ) : (
          <button onClick={flipFavorite} className="fav-button">☆</button>
        )}
      </div>
    </div>
  );
}


export default SongCard;
