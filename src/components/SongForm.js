import React from "react";
import { Form } from "semantic-ui-react";

function SongForm({formData, setFormData, addSong}) 
{
  const {name, artist, album, genre, subGenre, albumPic, youtube, spotify} = formData

  const initialState = {
    name:"",
    artist:"", 
    album:"", 
    genre:"", 
    subGenre:"",
    albumPic:"", 
    youtube:"", 
    spotify:""
  }

  const newSong={
    name:name,
    artist:artist, 
    album:album, 
    genre:genre, 
    subGenre:subGenre,
    favorite:false, 
    albumPic:albumPic, 
    youtube:youtube, 
    spotify:spotify
  }

  function handleChange(e)
  {
    const {name, value} = e.target
    setFormData(formData=>{return{...formData,[name]:value}})
  }

  function handleSubmit(e)
  {
    e.preventDefault();

    fetch("http://localhost:4000/songs",
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(newSong)
    })
    .then(s=>s.json())
    .then(s=>{addSong(s)})
    .then(()=>{setFormData(initialState)})
    .then(()=>{return<alert>Song Submitted!</alert>})
  }

  return (
    <div className="holder">
    <div>
      <Form className="formBox">
        <h1>Add a Song</h1>
        <Form.Group widths="equal">
          <Form.Input label="Song Name" name="name" value={name} onChange={handleChange}/>
          <br></br>
          <Form.Input label="Artist" name="artist" value={artist} onChange={handleChange}/>
          <br></br>
          <Form.Input label="Album" name="album" value={album} onChange={handleChange}/>
          <br></br>
          <Form.Input label="Genre" name="genre" value={genre} onChange={handleChange}/>
          <br></br>
          <Form.Input label="Sub-Genre (leave blank if unknown)" name="subGenre" value={subGenre} onChange={handleChange}/>
          <br></br>
          <Form.Input label="Album Image URL" name="albumPic" value={albumPic} onChange={handleChange}/>
          <br></br>
          <Form.Input label="Youtube Link" name="youtube" value={youtube} onChange={handleChange}/>
          <br></br>
          <Form.Input label="Spotify Link" name="spotify" value={spotify} onChange={handleChange}/>
          <br></br>
        </Form.Group>
        <Form.Button onClick={handleSubmit}>Submit</Form.Button>
      </Form>
    </div>
    </div>
  );
}

export default SongForm;
