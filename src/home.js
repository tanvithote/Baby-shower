import React, { Component } from "react";
import "./App.css";
import Navbar from "./navbar";
import baby from "./images/babyway.png";
import moon from "./images/moon.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="row first">
          <img className="baby mx-auto" src={baby} />
        </div>
        <div className="row second mx-auto">
          <div className=" text col-md-6 text-center ">
            <div className="my-auto">
              <span className="home-text ">Dear proud parents-to-be,</span>
              <br />
              <span className="home-text">
                Congratulations on the new baby!
              </span>
              <br />
              <span className="home-text">
                Heres welcoming your baby with lots of love!
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <img className="moon mx-auto" src={moon} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
