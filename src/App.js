import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Buttons } from "../src/pages/websitePages/allActivities/allActivities";
import ProfileReadMoreCard from "../src/components/allCards/Dashboard/profileCards";
import { PaymentPackaggee } from "../src/components/allCards/Website/paymentPackage";
import { BloggCcard } from "../src/components/allCards/Website/blogCard";
import { GallleryCardImage } from "../src/components/allCards/Website/galleryCard";
//external import
//pages
import Home from "./pages/websitePages/home";

import { CreateAccountForm } from "./components/forms/authenticationForms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {" "}
        {/* <Route path="/" element={<GallleryCardImage />} />{" "} */}
        {/* <Route path="/" element={<PaymentPackaggee />} /> */}
        {/* <Route path="/" element={<BloggCcard />} /> */}
        <Route path="/" element={<BloggCcard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
