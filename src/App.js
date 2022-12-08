import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Team } from "./components/allCards/Website/teamCards";
import { WhyTrustUs } from "./components/allCards/Website/whyTrustUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WhyTrustUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
