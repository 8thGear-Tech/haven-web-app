import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Team } from "./components/allCards/Website/teamCards";
import { HomeHero } from "./components/hero/homeHero";
// import { AdminSideNav } from "./components/Navbar/dashboardNavbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>{/* <Route path="/" element={<AdminSideNav />} /> */}</Routes>
    </BrowserRouter>
  );
}

export default App;
