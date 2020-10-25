import React, { Component } from "react";
import "./App.css";
import Notes from "./notes";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg">
        <Link to="/" class="navbar-brand">
          Shayari's Baby Shower
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/notes" class="navtext nav-link">
                Notes from loved ones <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/video" class="navtext nav-link" href="#">
                The grand video
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/guess" class="navtext nav-link" href="#">
                Guess who?
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
