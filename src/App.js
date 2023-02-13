import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//pages
import Home from "./pages/websitePages/home";
import About from "./pages/websitePages/about";
import AfterSchool from "./pages/websitePages/otherActivities/afterSchool";
import CreativeSummer from "./pages/websitePages/otherActivities/creativeSummer";
import WeekendActivities from "./pages/websitePages/otherActivities/weekendActivities";
import Gallery from "./pages/websitePages/gallery";
import Blog from "./pages/websitePages/blog/blogPage";
import BlogReadMore from "./pages/websitePages/blog/blogReadMorePage";

//payment packages
import PaymentPackages from "./pages/websitePages/paymentPackages/paymentPackages";
import BasicPackage from "./pages/websitePages/paymentPackages/basicPackage";
import BasicForm from "./components/forms/website/schools/packageForm";

//authentication pages
import { CreateAccountForm } from "./components/forms/authenticationForms";
import ChampsNeeds from "./pages/websitePages/authenticationPages/school/champsNeeds";
import SchoolLocation from "./pages/websitePages/authenticationPages/school/schoolLocation";
import SchoolInformation from "./pages/websitePages/authenticationPages/school/schoolInformation";
import ActivitySchedule from "./pages/websitePages/authenticationPages/school/activitySchedule";

//instructors authentication pages
import InstructorProfileInfo from "./pages/websitePages/authenticationPages/instructor/instructorInfo";
import AboutInstructor from "./pages/websitePages/authenticationPages/instructor/aboutInstructor";
import EducationHistory from "./pages/websitePages/authenticationPages/instructor/educationHistory";
import WorkHistory from "./pages/websitePages/authenticationPages/instructor/workHistory";
import InstructorLocation from "./pages/websitePages/authenticationPages/instructor/instructorLocation";
import AddYourActivity from "./pages/websitePages/authenticationPages/instructor/addActivity";
import { AddActivity } from "./pages/websitePages/authenticationPages/instructor/addActivity";
import { SelectTest } from "./pages/websitePages/authenticationPages/instructor/yourActivity";
import ScreeningQuestions from "./pages/websitePages/authenticationPages/instructor/instructorScreeningQuestions";
import { ProfileUpload } from "./pages/websitePages/authenticationPages/instructor/profileUpload";
import { EditProfilePhoto } from "./pages/websitePages/authenticationPages/instructor/profileUpload";
import { IdUpload } from "./pages/websitePages/authenticationPages/instructor/idUpload";
import { VideoUpload } from "./pages/websitePages/authenticationPages/instructor/videoUpload";
import SpecialNeeds from "./pages/websitePages/authenticationPages/instructor/specialNeeds";
import { PaymentInfo } from "./pages/websitePages/authenticationPages/instructor/paymentInfo";
import { Referee } from "./pages/websitePages/authenticationPages/instructor/referee";
import { InstructorAgreement } from "./pages/websitePages/authenticationPages/instructor/referee";
import CongratsMessage from "./pages/websitePages/authenticationPages/instructor/congratulatoryMessage";

import { Footer } from "./components/footer";

function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="afterSchool" element={<AfterSchool />} />
          <Route path="havenSummer" element={<CreativeSummer />} />
          <Route path="weekendClub" element={<WeekendActivities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path=" " element={<BlogReadMore />} />

          {/* payment packages */}
          <Route path="PaymentPackages" element={<PaymentPackages />} />
          <Route path="BasicPackage" element={<BasicPackage />} />
          <Route path="BasicForm" element={<BasicForm />} />

          {/* authentication pages */}
          <Route path="ChampsNeeds" element={<ChampsNeeds />} />

          <Route path="SchoolLocation" element={<SchoolLocation />} />
          <Route path="SchoolInformation" element={<SchoolInformation />} />
          <Route path="ActivitySchedule" element={<ActivitySchedule />} />

          {/* instructor authentication pages */}
          <Route
            path="InstructorProfileInfo"
            element={<InstructorProfileInfo />}
          />
          <Route path="AboutInstructor" element={<AboutInstructor />} />
          <Route path="EducationHistory" element={<EducationHistory />} />
          <Route path="WorkHistory" element={<WorkHistory />} />
          <Route path="InstructorLocation" element={<InstructorLocation />} />
          <Route path="AddYourActivity" element={<AddYourActivity />} />
          <Route path="AddActivity" element={<AddActivity />} />
          <Route path="SelectTest" element={<SelectTest />} />
          <Route path="ScreeningQuestions" element={<ScreeningQuestions />} />
          <Route path="ProfileUpload" element={<ProfileUpload />} />
          <Route path="EditProfilePhoto" element={<EditProfilePhoto />} />
          <Route path="IdUpload" element={<IdUpload />} />
          <Route path="VideoUpload" element={<VideoUpload />} />
          <Route path="SpecialNeeds" element={<SpecialNeeds />} />
          <Route path="PaymentInfo" element={<PaymentInfo />} />
          <Route path="Referees" element={<Referee />} />
          <Route path="InstructorAgreement" element={<InstructorAgreement />} />
          <Route path="CongratsMessage" element={<CongratsMessage />} />

          {/* authentication forms */}
          <Route path="signup" element={<CreateAccountForm />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
