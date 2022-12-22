import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Buttons } from "../src/pages/websitePages/allActivities/allActivities";
//external import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        <Route path="/" element={<Buttons />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
