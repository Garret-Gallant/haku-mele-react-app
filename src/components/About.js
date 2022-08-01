import React from "react";

function About() {
  return (
    <div className="holder" id="about">
      <h1>About the Devs</h1>
      <br />
      <div className="about-cards">
        <div className="card">
          <h3>Garret Gallant</h3>
          <img height="350" src={require("../images/garret-about.jpg")} />
          <p>
            I listen to all kinds of songs in all kinds of genres, and I wanted
            to make an app that makes it easier to find new music! Now a week
            later here we are!
          </p>
        </div>
        <br />
        <div className="card">
          <h3>Andrea (Dre) Esparza</h3>
          <img height="350" src={require("../images/noImage.jpeg")} />
          <p>
            While I enjoy listening to all types of music, reggaeton will always
            be number one for me. When you hear a good reggaeton song, you can't
            help but dance.
          </p>
          <br />
        </div>
        <div className="card">
          <h3>Karter Livingston</h3>
          <img height="350" src={require("../images/noImage.jpeg")} />
          <p>
            I grew up with all sorts of music and I am always looking for new
            music. When Garret came up with this idea, I was all in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
