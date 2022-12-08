import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { GetAFacilitatorBtn } from "./components/Buttons/website/actionBtn/homeandAboutBtn";
// import { LearnMoreBtn } from "./components/Buttons/website/actionBtn/homeandAboutBtn";

//external import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<GetAFacilitatorBtn />} /> */}
        {/* <Route path="/" element={<LearnMoreBtn />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
