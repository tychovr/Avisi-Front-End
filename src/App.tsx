import React from "react";
import { Routes, Route } from "react-router-dom";
import Wglandingpage from "./views/Werkgever/landingpage/wg-landingpage";
import "./App.scss";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import Profile from "./views/Werkgever/profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
