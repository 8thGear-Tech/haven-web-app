import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Team } from "./components/allCards/Website/teamCards";
import { HomeHero } from "./components/hero/homeHero";
// import { AdminSideNavv } from "./components/Navbar/guestNavbar";
import { CreateAccountForm } from "./components/forms/authenticationForms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<CreateAccountForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
