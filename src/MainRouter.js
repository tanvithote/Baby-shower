import React from "react";
import { Route, Switch } from "react-router-dom";
import Notes from "./notes";
import Home from "./home";
import Video from "./video";
import Guess from "./guess";

const MainRouter = () => (
  <div>
    <Switch>
      <Route path="/notes" component={Notes}></Route>
      <Route path="/video" component={Video}></Route>
      <Route path="/guess" component={Guess}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  </div>
);

export default MainRouter;
