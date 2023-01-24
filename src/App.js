import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//pages
import Home from "./pages/websitePages/home";
import { MaterialsandActivities } from "./components/allCards/Dashboard/activitiesCards";
import { ActivitiesPerformance } from "./components/allCards/Dashboard/activitiesCards";
import { ChampsResource } from "./components/allCards/Dashboard/dashboardCards";
import { AdminDashboardCard1 } from "./components/allCards/Dashboard/dashboardCards";
import { AdminDashboardCard2 } from "./components/allCards/Dashboard/dashboardCards";
import { AdminDashboardCard3 } from "./components/allCards/Dashboard/dashboardCards";

import { CreateAccountForm } from "./components/forms/authenticationForms";

import { SubmitBtn } from "./components/Buttons/dashboard/actionBtn";
import { UpdateBtn } from "./components/Buttons/dashboard/actionBtn";
import { SaveBtn } from "./components/Buttons/dashboard/actionBtn";
import { ReadMoreBtn } from "./components/Buttons/dashboard/actionBtn";
import { CancelBtn } from "./components/Buttons/dashboard/actionBtn";
import { UploadBtn } from "./components/Buttons/dashboard/actionBtn";
import { ViewAllBtn } from "./components/Buttons/dashboard/actionBtn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <MaterialsandActivities />
      <ActivitiesPerformance />
      <ChampsResource />
      <AdminDashboardCard1 />
      <AdminDashboardCard2 />
      <AdminDashboardCard3 />
      <SubmitBtn />
      <UpdateBtn />
      <SaveBtn />
      <ReadMoreBtn />
      <CancelBtn />
      <UploadBtn />
      <ViewAllBtn />
    </BrowserRouter>
  );
}

export default App;
