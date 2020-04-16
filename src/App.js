import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import SearchAsteroidComponent from "./components/asteroid/searchAsteroid";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/search" component={SearchAsteroidComponent} />
        <Redirect from="/" exact to="/search" />
        <Redirect to="/search" />
      </Switch>
    </>
  );
}

export default App;
