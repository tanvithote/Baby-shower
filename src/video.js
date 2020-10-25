import React, { Component } from "react";
import "./App.css";
import Navbar from "./navbar";
import ReactPlayer from "react-player";
import tag from "./images/moon.png";

class Video extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=CDLl719oJy8"
            width="900px"
            height="550px"
            light={tag}
            controls="true"
          />
        </div>
      </div>
    );
  }
}

export default Video;
