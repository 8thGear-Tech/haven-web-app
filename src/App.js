import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//pages
import Home from "./pages/websitePages/home";

import { CreateAccountForm } from "./components/forms/authenticationForms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<CreateAccountForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
