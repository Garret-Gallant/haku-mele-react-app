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
    <div>
      <Form class="ui fluid form">
        <Form.Group widths="equal" class="field">
          <Form.Input label="Song Name" name="name" value={name} onChange={handleChange}/>
          <Form.Input label="Artist" name="artist" value={artist} onChange={handleChange}/>
          <Form.Input label="Album" name="album" value={album} onChange={handleChange}/>
          <Form.Input label="Genre" name="genre" value={genre} onChange={handleChange}/>
          <Form.Input label="Sub-Genre (leave blank if unknown)" name="subGenre" value={subGenre} onChange={handleChange}/>
          <Form.Input label="Album Image URL" name="albumPic" value={albumPic} onChange={handleChange}/>
          <Form.Input label="Youtube Link" name="youtube" value={youtube} onChange={handleChange}/>
          <Form.Input label="Spotify Link" name="spotify" value={spotify} onChange={handleChange}/>
        </Form.Group>
        <Form.Button onClick={handleSubmit}>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default SongForm;
