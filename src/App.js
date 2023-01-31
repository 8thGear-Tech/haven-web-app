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
          <Route path="creativeSummer" element={<CreativeSummer />} />
          <Route path="weekendActivities" element={<WeekendActivities />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogReadMore" element={<BlogReadMore />} />
          {/* <Route path="/" element={<CreateAccountForm />} /> */}
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
