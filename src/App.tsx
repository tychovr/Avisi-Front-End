import React from "react";
import { Routes, Route } from "react-router-dom";
import VacancySearch from "./views/VacancySearch/VacancySearch";
import Wglandingpage from "./views/Werkgever/landingpage/wg-landingpage";
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

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="werkgever" element={<Wglandingpage />} />
          <Route path="Profile" element={<Profile />} />

          <Route path="/vacancy-search" element={<VacancySearch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
