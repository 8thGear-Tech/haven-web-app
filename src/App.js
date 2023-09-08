import * as React from "react";
// import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//sidebar
// import { DashboardSidebar } from "./components/Navbar/dashboardNavbar";

//pages
import Home from "./pages/websitePages/home";
import UpComingEvent from "./pages/websitePages/upComingEvent";
import About from "./pages/websitePages/about";
import AfterSchool from "./pages/websitePages/otherActivities/afterSchool";
import CreativeSummer from "./pages/websitePages/otherActivities/creativeSummer";
import WeekendActivities from "./pages/websitePages/otherActivities/weekendActivities";
import Gallery from "./pages/websitePages/gallery";
import Blog from "./pages/websitePages/blog/blogPage";
import BlogReadMore from "./pages/websitePages/blog/blogReadMorePage";
import { PrivacyPolicy } from "./pages/websitePages/privacyPolicy";

//payment packages
import PaymentPackages from "./pages/websitePages/paymentPackages/paymentPackages";
import BasicPackage from "./pages/websitePages/paymentPackages/basicPackage";
import BasicForm from "./components/forms/website/schools/packageForm";

//school authentication pages
import ResourcePage from "./pages/dashboardPages/champ/champAllResourcePage";
import ChampDashboard from "./pages/dashboardPages/champ/champDashboardPage";
import ChampMaterialPage from "./pages/dashboardPages/champ/champMaterialBoard";
import AssignmentText from "./pages/dashboardPages/champ/champAssignmentBoard";
import ChampVirtualClass from "./pages/dashboardPages/champ/champVirtualClass";
import Champcalendar from "./pages/dashboardPages/champ/champCalenderPage";
import ProfileIdCard from "./pages/dashboardPages/champ/champStudentPage";
// import ProfileEditCard from "./pages/dashboardPages/champ/champsProfilePage";
import AdminDashboardPg from "./pages/dashboardPages/admin/adminDashboardPage";
//authentication pages
// import BasicForm from "./components/forms/website/schools/packageForm";

//school authentication pages
import { CreateAccountForm } from "./components/forms/authenticationForms";
import { SchoolCreateAccountForm } from "./components/forms/authenticationForms";
import { ParentCreateAccountForm } from "./components/forms/authenticationForms";
import ChampsNeeds from "./pages/websitePages/authenticationPages/school/champsNeeds";
import SchoolLocation from "./pages/websitePages/authenticationPages/school/schoolLocation";
import SchoolInformation from "./pages/websitePages/authenticationPages/school/schoolInformation";
import ActivitySchedule from "./pages/websitePages/authenticationPages/school/activitySchedule";

//school activities
import Technology from "./pages/websitePages/allActivities/technology";
import Arts from "./pages/websitePages/allActivities/arts";
import Languages from "./pages/websitePages/allActivities/languages";

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

//instructor dashboard page
import InstructorDashboard from "./pages/dashboardPages/instructor/instructorDashboard";
import ViewMaterials from "./pages/dashboardPages/instructor/allAssignments/viewMaterials";
import UploadMaterial from "./pages/dashboardPages/instructor/allAssignments/uploadMaterials";
import CreateAssignment from "./pages/dashboardPages/instructor/allAssignments/createAssignment";
import AssignmentCreated from "./pages/dashboardPages/instructor/allAssignments/assignmentsCreated";
import InstructorActivitiesDetails from "./pages/dashboardPages/instructor/allAssignments/activityDetails";
import InstructorVirtualClass from "./pages/dashboardPages/instructor/instructorVirtualClass";
import InstructorProfile from "./pages/dashboardPages/instructor/instructorProfile";
import InstructorUpdateProfile from "./pages/dashboardPages/instructor/instructorUpdateProfile";
import InstructorGrading from "./pages/dashboardPages/instructor/allAssignments/grading";
import InstructorNotification from "./pages/dashboardPages/instructor/instructorNotification";
import ViewSubmissions from "./pages/dashboardPages/instructor/allAssignments/viewSubmissions";
import InstructorChampsFeedback from "./pages/dashboardPages/instructor/instructorChampFeedback";
import { ReportIssueBtn } from "./components/Navbar/dashboardNavbar";
import { RateChampBtn } from "./components/Navbar/dashboardNavbar";
import { RateAppBtn } from "./components/Navbar/dashboardNavbar";

// school dashboard pages
import SchoolDashboard from "./pages/dashboardPages/school/schoolDashboard";
import AllActivitiesDashboard from "./pages/dashboardPages/school/activities/allActivities";
import ActivitiesDetails from "./pages/dashboardPages/school/activities/activityDetails";
import AllChamps from "./pages/dashboardPages/school/allUsers/champs";
import AllInstructors from "./pages/dashboardPages/school/allUsers/instructors";
import SchoolProfile from "./pages/dashboardPages/school/schoolProfile";
import SchoolUpdateProfile from "./pages/dashboardPages/school/SchoolUpdateProfile";
import AllActivitiesPerformance from "./pages/dashboardPages/school/activities/activityPerfomance";
import SchoolInstructorFeedback from "./pages/dashboardPages/school/feedbackandrating/instructorFeedback";

//parent
import AllActivities from "./pages/websitePages/allActivities/allActivities";
import RegisterNowForm from "./components/forms/website/registerNowForm";

import { Footer } from "./components/footer";
import { FooterItemToTop } from "./components/footer";
import { ScrollButton } from "./components/Buttons/website/scrollToTop";

import ProfileEditCard from "./pages/dashboardPages/champ/champsProfilePage";
import Admincalendar from "./pages/dashboardPages/admin/adminCalenderEventPage";
import AllTutorPage from "./pages/dashboardPages/admin/allInstructorPage";
import AllChampPage from "./pages/dashboardPages/admin/allChampsPage";
import AddChampsPage from "./pages/dashboardPages/admin/adminAddChamps";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        {" "}
        <FooterItemToTop>
          <Routes>
            {/* payment packages */}
            {/* <Route path="/DashboardSidebar" element={<DashboardSidebar />} /> */}

            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="afterSchool" element={<AfterSchool />} />
            <Route path="ourOfferings" element={<CreativeSummer />} />
            <Route path="weekendClub" element={<WeekendActivities />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="blog" element={<Blog />} />
            <Route path="holiday-programs" element={<UpComingEvent />} />
            <Route path=" " element={<BlogReadMore />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            {/* Error page */}
            <Route path="*" element={<ErrorPage />} />

            {/* payment packages */}
            <Route path="PaymentPackages" element={<PaymentPackages />} />
            <Route path="BasicPackage" element={<BasicPackage />} />
            <Route path="BasicForm" element={<BasicForm />} />

            {/*school authentication pages */}
            <Route path="ChampsNeeds" element={<ChampsNeeds />} />
            <Route path="SchoolLocation" element={<SchoolLocation />} />
            <Route path="SchoolInformation" element={<SchoolInformation />} />
            <Route path="ActivitySchedule" element={<ActivitySchedule />} />
            <Route path="ResourcePage" element={<ResourcePage />} />
            {/* champjourney */}
            <Route path="ChampDashboard" element={<ChampDashboard />} />
            <Route path="ChampMaterialPg" element={<ChampMaterialPage />} />
            <Route path="AssignmentText" element={<AssignmentText />} />
            <Route path="ChampVirtualClass" element={<ChampVirtualClass />} />
            <Route path="Champcalendar" element={<Champcalendar />} />
            <Route path="ProfileIdCard" element={<ProfileIdCard />} />
            <Route path="ProfileEditCard" element={<ProfileEditCard />} />

            {/* Admin dashboard pages */}
            <Route path="AdminDashboardPg" element={<AdminDashboardPg />} />
            <Route path="Admincalendar" element={<Admincalendar />} />
            <Route path="allTutorPage" element={<AllTutorPage />} />
            <Route path="allChampPage" element={<AllChampPage />} />
            <Route path="addChampsPage" element={<AddChampsPage />} />
            {/*school activities pages */}
            <Route path="Technology" element={<Technology />} />
            <Route path="Arts" element={<Arts />} />
            <Route path="Languages" element={<Languages />} />

            {/* parent authentication pages */}
            <Route path="AllActivities" element={<AllActivities />} />
            <Route path="RegisterNowForm" element={<RegisterNowForm />} />

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
            <Route
              path="InstructorActivitiesDetails"
              element={<InstructorActivitiesDetails />}
            />
            <Route path="SelectTest" element={<SelectTest />} />
            <Route path="ScreeningQuestions" element={<ScreeningQuestions />} />
            <Route path="ProfileUpload" element={<ProfileUpload />} />
            <Route path="EditProfilePhoto" element={<EditProfilePhoto />} />
            <Route path="IdUpload" element={<IdUpload />} />
            <Route path="VideoUpload" element={<VideoUpload />} />
            <Route path="SpecialNeeds" element={<SpecialNeeds />} />
            <Route path="PaymentInfo" element={<PaymentInfo />} />
            <Route path="Referees" element={<Referee />} />
            <Route
              path="InstructorAgreement"
              element={<InstructorAgreement />}
            />
            <Route path="CongratsMessage" element={<CongratsMessage />} />

            {/* instructor dashboard pages */}
            <Route
              path="InstructorDashboard"
              element={<InstructorDashboard />}
            />
            <Route path="ViewMaterials" element={<ViewMaterials />} />
            <Route path="UploadMaterial" element={<UploadMaterial />} />
            <Route path="CreateAssignment" element={<CreateAssignment />} />
            <Route path="AssignmentCreated" element={<AssignmentCreated />} />
            <Route
              path="InstructorVirtualClass"
              element={<InstructorVirtualClass />}
            />
            <Route path="InstructorProfile" element={<InstructorProfile />} />
            <Route
              path="InstructorUpdateProfile"
              element={<InstructorUpdateProfile />}
            />
            <Route path="InstructorGrading" element={<InstructorGrading />} />
            <Route
              path="InstructorNotification"
              element={<InstructorNotification />}
            />
            <Route path="ViewSubmissions" element={<ViewSubmissions />} />
            <Route
              path="InstructorChampsFeedback"
              element={<InstructorChampsFeedback />}
            />
            <Route path="ReportIssueBtn" element={<ReportIssueBtn />} />
            <Route path="RateChampBtn" element={<RateChampBtn />} />
            <Route path="RateAppBtn" element={<RateAppBtn />} />

            {/* school dashboard pages */}
            <Route path="SchoolDashboard" element={<SchoolDashboard />} />
            <Route
              path="AllActivitiesDashboard"
              element={<AllActivitiesDashboard />}
            />
            <Route path="ActivitiesDetails" element={<ActivitiesDetails />} />
            <Route path="AllChamps" element={<AllChamps />} />
            <Route path="AllInstructors" element={<AllInstructors />} />
            <Route path="SchoolProfile" element={<SchoolProfile />} />
            <Route
              path="SchoolUpdateProfile"
              element={<SchoolUpdateProfile />}
            />
            <Route
              path="AllActivitiesPerformance"
              element={<AllActivitiesPerformance />}
            />
            <Route
              path="SchoolInstructorFeedback"
              element={<SchoolInstructorFeedback />}
            />

            {/* authentication forms */}
            <Route path="signup" element={<CreateAccountForm />} />
            <Route path="school-signup" element={<SchoolCreateAccountForm />} />
            <Route path="parent-signup" element={<ParentCreateAccountForm />} />
          </Routes>{" "}
          <footer>
            <Footer />
            <ScrollButton />
          </footer>
        </FooterItemToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
