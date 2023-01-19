import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//pages
import Home from "./pages/websitePages/home";
import About from "./pages/websitePages/about";
import AfterSchool from "./pages/websitePages/otherActivities/afterSchool";
import CreativeSummer from "./pages/websitePages/otherActivities/creativeSummer";
import WeekendActivities from "./pages/websitePages/otherActivities/weekendActivities";

import { CreateAccountForm } from "./components/forms/authenticationForms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="afterSchool" element={<AfterSchool />} />
        <Route path="creativeSummer" element={<CreativeSummer />} />
        <Route path="weekendActivities" element={<WeekendActivities />} />
        {/* <Route path="/" element={<CreateAccountForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
