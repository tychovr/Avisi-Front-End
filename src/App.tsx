import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";
<<<<<<< HEAD
import Profile from "./views/Werkgever/profile/Profile";
=======
import Wglandingpage from "./views/Werkgever/landingpage/wg-landingpage";
>>>>>>> e9e1c1686a5a5b0aea630b012d8a8ce29d4a1719

function App() {
  return (
    <div className="App">
      <Profile />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Layout />}></Route>
=======
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="werkgever" element={<Wglandingpage />} />
        </Route>
>>>>>>> e9e1c1686a5a5b0aea630b012d8a8ce29d4a1719
      </Routes>
    </div>
  );
}

export default App;
