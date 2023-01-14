import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MaterialsandActivitiesCard } from "../src/components/allCards/Dashboard/activitiesCards";

//external import

function App() {
  return (
    <BrowserRouter>
      <Routes>{/* <Route path="/" element={<RegisterNowBtn />} /> */}</Routes>
      <MaterialsandActivitiesCard />
    </BrowserRouter>
  );
}

export default App;
