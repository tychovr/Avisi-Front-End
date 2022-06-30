import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
import Profile from "./views/Werkgever/profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile />
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
