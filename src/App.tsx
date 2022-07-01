import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import VacancySearch from "./views/VacancySearch/VacancySearch";
import Wglandingpage from "./views/Werkgever/landingpage/wg-landingpage";
=======
import VacancySearch from "./views/VacancySearch/VacancySearch"
>>>>>>> c3c780aaf8f806a5e11bc6296e86d710d09bf884
import "./App.scss";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />} />
        <Route path="werkgever" element={<Wglandingpage />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="/vacancy-search" element={<VacancySearch />} />
      </Routes>
    </div>
  );
}

export default App;
