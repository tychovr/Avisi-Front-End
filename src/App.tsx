import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./views/Home/Home";
import Layout from "./views/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
