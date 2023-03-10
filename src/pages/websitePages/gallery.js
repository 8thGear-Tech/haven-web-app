import React, { useState } from "react";
//Components

import { GallerySection } from "../../components/allCards/Website/galleryCard";
import artsgallery from "../../data/gallery.json";
import languagegallery from "../../data/gallery.json";
import techgallery from "../../data/gallery.json";

import { GuestNavbar } from "../../components/Navbar/guestNavbar";
import { GalleryHero } from "../../components/hero/galleryHero";

const Gallery = () => {
  return (
    <>
      <GuestNavbar />
      <GalleryHero />
      <GalleryImages />
    </>
  );
};

const GalleryImages = () => {
  const [active, setActive] = useState("Firstcard");
  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        <div
          className="btn ms-4 mt-3 btnHover active galleryBtn"
          // style={{ backgroundColor: "#75117a", color: "#ffffff" }}
          onClick={() => setActive("Firstcard")}
        >
          Tech
        </div>
        <div
          className="btn ms-4 mt-3 galleryBtn"
          mb1
          // style={{ backgroundColor: "#75117a", color: "#ffffff" }}
          onClick={() => setActive("Secondcard")}
        >
          Language
        </div>
        <div
          className="btn ms-4 mt-3 galleryBtn"
          mb1
          // style={{ backgroundColor: "#75117a", color: "#ffffff" }}
          onClick={() => setActive("Thirdcard")}
        >
          Arts
        </div>
      </div>
      {active === "Firstcard" && <Tech />}
      {active === "Secondcard" && <Language />}
      {active === "Thirdcard" && <Arts />}

      {/* <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p> */}
    </div>
  );
};
const Tech = () => {
  return (
    <>
      <div className="container pb-5 ">
        <div className="" id="imagegallery">
          <div className="row ">
            {techgallery.techgallery.map((tech) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={tech.id}>
                  <GallerySection {...tech}>
                    {/* <img src={language} className="card-img-top" alt="..." /> */}
                  </GallerySection>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
  //  <h1>Martialarts</h1>;
};
const Language = () => {
  return (
    <>
      <div className="container pb-5">
        <div className="" id="imagegallery">
          <div className="row justify-content-center">
            {languagegallery.languagegallery.map((language) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12" key={language.id}>
                  <GallerySection {...language}>
                    {/* <img src={language} className="card-img-top" alt="..." /> */}
                  </GallerySection>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
const Arts = () => {
  return (
    <>
      <div className="container pb-5">
        <div className="" id="imagegallery">
          <div className="row">
            {artsgallery.artsgallery.map((arts) => {
              return (
                <div className="col-lg-4 col-md-4 col-sm-12" key={arts.id}>
                  <GallerySection {...arts}>
                    {/* <img src={language} className="card-img-top" alt="..." /> */}
                  </GallerySection>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
