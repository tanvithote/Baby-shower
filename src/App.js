import React, { Component } from "react";
import "./App.css";
import MainRouter from './MainRouter';
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./navbar";
import Home from "./home";

const App = () => (
  <BrowserRouter>
    <MainRouter/>
  </BrowserRouter>
);

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <Home />
//       </div>
//     );
//   }
// }

// export default App;
