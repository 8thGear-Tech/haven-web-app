import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Team } from "./components/allCards/Website/teamCards";

//external import

function App() {
  return (
    <BrowserRouter>
      <Routes>{/* <Route path="/" element={<Team />} /> */}</Routes>
    </BrowserRouter>
  );
}

export default App;
