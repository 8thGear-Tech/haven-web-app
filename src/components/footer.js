// //FooterItemToTop
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// // import "C:UsersTOLANIDocumentsGitHubhaven-web-appsrcsassfilescomponents_footer.scss";

// import { Link } from "react-router-dom";

// //images
// import havenlogo from "../assets/icons/havenlogo.png";
// import googlemaps from "../assets/icons/googlemaps.png";

// // icons
// import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// // import "./Footer.css"; // import custom CSS file

// // export const Footer = () => {
// //   return (
// //     <>
// //       <div class="container-fluid px-5 footerOneBgColor">
// //         <footer class="py-3">
// //           <div class="row ">
// //             <div class="col-lg-4 d-flex flex-column justify-content-between py-4 my-4">
// //               <img
// //                 alt=""
// //                 src={havenlogo}
// //                 style={{ maxWidth: "6rem", maxHeight: "6rem" }}
// //                 className="d-inline-block align-top"
// //               />{" "}
// //               <div className="row my-4">
// //                 <div className="col-6">
// //                   <h4>Work with us</h4>
// //                   <ul class="nav flex-column">
// //                     <li class="nav-item mb-2">
// //                       <a href="/signup" class="nav-link p-0 footerParagraph">
// //                         Become an instructor
// //                       </a>
// //                     </li>
// //                   </ul>
// //                 </div>
// //                 <div className="col-6">
// //                   <h4>Learn with us</h4>
// //                   <ul class="nav flex-column">
// //                     <li class="nav-item mb-2">
// //                       <a href="/" class="nav-link p-0 footerParagraph">
// //                         School services
// //                       </a>
// //                     </li>
// //                     <li class="nav-item mb-2">
// //                       <a
// //                         href="/AllActivities"
// //                         class="nav-link p-0 footerParagraph"
// //                       >
// //                         Find Activities
// //                       </a>
// //                     </li>
// //                   </ul>
// //                 </div>
// //               </div>
// //               <div className="row">
// //                 <div className="col-6">
// //                   <h4>Get to know us</h4>
// //                   <ul class="nav flex-column">
// //                     <li class="nav-item mb-2">
// //                       <a href="/about" class="nav-link p-0 footerParagraph">
// //                         About Haven
// //                       </a>
// //                     </li>
// //                     <li class="nav-item mb-2">
// //                       <a
// //                         href="/otherActivities"
// //                         class="nav-link p-0 footerParagraph"
// //                       >
// //                         Other services
// //                       </a>
// //                     </li>
// //                     <li class="nav-item mb-2">
// //                       <a href="/gallery" class="nav-link p-0 footerParagraph">
// //                         Gallery
// //                       </a>
// //                     </li>
// //                   </ul>
// //                 </div>
// //                 <div className="col-6">
// //                   <h4>Connect with us</h4>
// //                   <a href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7">
// //                     <img
// //                       alt=""
// //                       src={googlemaps}
// //                       style={{ maxWidth: "6rem", maxHeight: "6rem" }}
// //                       className="d-inline-block align-top"
// //                     />{" "}
// //                   </a>
// //                 </div>
// //               </div>
// //               {/* <div class="d-flex flex-column flex-sm-row justify-content-between">
// //                 <div>
// //                   {" "}
// //                   <MarkAsUnreadOutlinedIcon />
// //                   <a
// //                     class="footerParagraph mx-2"
// //                     href="mailto: hello@haveneduservices.com"
// //                   >
// //                     hello@haveneduservices.com
// //                   </a>
// //                 </div>

// //                 <div className="">
// //                   <LocalPhoneOutlinedIcon />
// //                   <a
// //                     class="footerParagraph mx-2"
// //                     href="tel:2348098438885"
// //                     target="_blank"
// //                   >
// //                     080 98438885
// //                   </a>
// //                   <a
// //                     class="footerParagraph mx-2"
// //                     href="tel:2348098458885"
// //                     target="_blank"
// //                   >
// //                     080 98458885
// //                   </a>
// //                 </div>
// //                 <ul class="list-unstyled d-flex">
// //                   <li class="ms-3">
// //                     <a
// //                       class="link-dark"
// //                       href="https://m.facebook.com/haveneduservices/"
// //                       target="_blank"
// //                     >
// //                       <FacebookOutlinedIcon />
// //                     </a>
// //                   </li>
// //                 </ul>
// //               </div> */}
// //             </div>
// //           </div>
// //         </footer>{" "}
// //       </div>{" "}
// //       <div className="container-fluid footerTwoBgColor py-2">
// //         {" "}
// //         <p class="text-center text-light p-0 m-0">
// //           &copy; 2022 Haven-Edu Services
// //         </p>
// //       </div>
// //     </>
// //   );
// // };
// // export const FooterItemToTop = ({ children }) => {
// //   const { pathname } = useLocation();

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, [pathname]);

// //   return children || null;
// // };

// export const Footer = () => {
//   return (
//     <>
//       <div class="container-fluid px-5 footerOneBgColor">
//         <footer class="py-3 mx-5">
//           {/* <div
//             className="footR"
//             style={{
//               backgroundColor: " #75117a",
//             }}
//           >
//             <h5 className="text-light size ">
//               Check out our Blogpost to know our latest activities
//             </h5>
//             <LearnMoreBtn />
//           </div> */}
//           <div class="">
//             <div
//               class="row justify-self-center  d-flex  justify-content-evenly text-center
//             mx-4 my-4"
//             >
//               {/* <Link to="/">
//                 {" "}
//                 <img
//                   alt=""
//                   src={havenlogo}
//                   style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//                   className="d-inline-block align-top"
//                 />
//               </Link> */}
//               {/* <div className="col-sm-6 col-md-12 col-lg-2">
//                 <img
//                   alt=""
//                   src={havenlogo}
//                   style={{ maxWidth: "5rem", maxHeight: "5rem" }}
//                   className=" "
//                 />
//               </div> */}

//               {/* <div className="col-sm-6 col-md-6 col-lg-2">
//                 <h4 className="">Work with us</h4>
//                 <ul class="list-unstyled list-inline">
//                   <li class="nav-item mb-2 list-inline-item">
//                     <a
//                       href="/"
//                       class="nav-link p-0 footerParagraph"
//                       style={{
//                         fontSize: "16px",
//                       }}
//                     >

//                       Become an instructor
//                     </a>
//                   </li>

//                 </ul>
//               </div>

//               <div className="col-sm-6 col-md-6 col-lg-2">
//                 <h4 className="">Get to know us</h4>
//                 <ul class="list-unstyled list-inline">
//                   <li class="nav-item mb-2 list-inline-item">
//                     <a href="/about" class="nav-link p-0 footerParagraph">
//                       About Haven
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a
//                       href="/otherActivities"
//                       class="nav-link p-0 footerParagraph"
//                     >
//                       Other services
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="/gallery" class="nav-link p-0 footerParagraph">
//                       Gallery
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div className="col-sm-6 col-md-6 col-lg-2">
//                 <h4 className="">Learn with us</h4>
//                 <ul class="list-unstyled list-inline">
//                   <li class="nav-item mb-2">
//                     <a href="/" class="nav-link p-0 footerParagraph">
//                       School services
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a
//                       href="/AllActivities"
//                       class="nav-link p-0 footerParagraph"
//                     >
//                       Find Activities
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="col-sm-12 col-md-6 col-lg-2">
//                 <h4>Connect with us</h4>
//                 <a href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7">
//                   <img
//                     alt=""
//                     src={havenlogo}
//                     style={{ maxWidth: "8rem", maxHeight: "8rem" }}
//                     className="d-inline-block align-top"
//                   />
//                   </a>
//                 </div>
//                 <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none col-lg-2 col-md-2">
//                   {" "}
//                   <img
//                     alt=""
//                     src={havenlogo}
//                     style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//                     className="d-inline-block align-top"
//                   />

//                 </div>
//                 <div className="col-6 col-lg-2 col-md-2">
//                   <h4>Work with us</h4>
//                   <ul class="nav flex-column">
//                     <li class="nav-item mb-2">
//                       <a
//                         href="/https://docs.google.com/forms/d/e/1FAIpQLSdV1S2xwMwH35oaMLbzuJanRCnxK1bmrd8tLIRDdIsW9WmhAg/viewform?usp=sharing"
//                         class="nav-link p-0 footerParagraph"
//                         target="_blank"
//                       >
//                         Become an instructor
//                       </a>

//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-6 col-lg-2 col-md-2">
//                   <h4>Learn with us</h4>
//                   <ul class="nav flex-column">
//                     <li class="nav-item mb-2">
//                       <a href="/" class="nav-link p-0 footerParagraph">
//                         School services
//                       </a>
//                     </li>
//                     <li class="nav-item mb-2">
//                       <a
//                         href="/AllActivities"
//                         class="nav-link p-0 footerParagraph"
//                       >
//                         Find Activities
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-6 col-lg-2 col-md-2">
//                   <h4>Get to know us</h4>
//                   <ul class="nav flex-column">
//                     <li class="nav-item mb-2">
//                       <a href="/about" class="nav-link p-0 footerParagraph">
//                         About Haven
//                       </a>
//                     </li>
//                     <li class="nav-item mb-2">
//                       <a
//                         href="/otherActivities"
//                         class="nav-link p-0 footerParagraph"
//                       >
//                         Other services
//                       </a>
//                     </li>
//                     <li class="nav-item mb-2">
//                       <a href="/gallery" class="nav-link p-0 footerParagraph">
//                         Gallery
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-6 col-lg-2 col-md-2">
//                   <h4>Connect with us</h4>
//                   <a href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7">
//                     <img
//                       alt=""
//                       src={googlemaps}
//                       style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//                       className="d-inline-block align-top"
//                     />{" "}
//                   </a>
//                 </div>
//               </div>

//               <div class="col-lg-3 col-md-2 mb-3">
//                 <h5>Section</h5>
//                 <ul class="nav flex-column">
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Home
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Features
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Pricing
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       FAQs
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       About
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div class="col-lg-3 col-md-2 mb-3">
//                 <h5>Section</h5>
//                 <ul class="nav flex-column">
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Home
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Features
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Pricing
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       FAQs
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       About
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>  */}

//               {/* <div class="row my-2 mx-3 m-3"> */}
//               {/* <div className="col-lg-4 col-md-6 col-sm-12">
//                 {" "}
//                 <MarkAsUnreadOutlinedIcon />
//                 <a
//                   class="footerParagraph mx-2 text-decoration-none"
//                   href="mailto: hello@haveneduservices.com"
//                 >
//                   hello@haveneduservices.com
//                 </a>
//               </div> */}
//               {/*
//               <div className="col-lg-4 col-md-6 col-sm-12">
//                 <div className="d-flex d-flex-row">
//                   <LocalPhoneOutlinedIcon />
//                   <a
//                     class="footerParagraph text-decoration-none mx-2 d-sm-flex"
//                     href="tel:2348098438885"
//                     target="_blank"
//                   >
//                     080 98438885
//                   </a>
//                   <a
//                     class="footerParagraph text-decoration-none d-sm-flex"
//                     href="tel:2348098458885"
//                     target="_blank"
//                   >
//                     080 98458885
//                   </a>
//                 </div>
//                 <ul class="list-unstyled d-flex">
//                   <li class="ms-3">
//                     <a
//                       class="link-dark"
//                       href="https://www.linkedin.com/company/havenedu-services/"
//                       target="_blank"
//                     >
//                       <LinkedInIcon />
//                     </a>
//                   </li>
//                   <li class="ms-3">
//                     <a
//                       class="link-dark"
//                       href="https://m.facebook.com/haveneduservices/"
//                       target="_blank"
//                     >
//                       <FacebookOutlinedIcon />
//                     </a>
//                   </li>
//                   <li class="ms-3">
//                     <a
//                       class="link-dark"
//                       href="https://www.instagram.com/haveneduservices/"
//                       target="_blank"
//                     >
//                       <InstagramIcon />
//                     </a>
//                   </li>
//                 </ul>
//               </div> */}
//               {/* <ul class="list-unstyled d-flex footIcon col-lg-4 col-md-12 col-sm-12">
//                 <li class="ms-3">
//                   <a
//                     class="link-dark"
//                     href="https://m.facebook.com/haveneduservices/"
//                     target="_blank"
//                   >
//                     <FacebookOutlinedIcon />
//                   </a>
//                 </li>
//                 <li class="ms-3">
//                   <a
//                     class="link-dark"
//                     href="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
//                     target="_blank"
//                   >
//                     <InstagramIcon />
//                   </a>
//                 </li>
//                 <li class="ms-3">
//                   <a class="link-dark" href="#" target="_blank">
//                     <TwitterIcon />
//                   </a>
//                 </li>
//                 <li class="ms-3">
//                   <a
//                     class="link-dark"
//                     href="https://www.linkedin.com/company/havenedu-services/?originalSubdomain=ng"
//                     target="_blank"
//                   >
//                     <LinkedInIcon />
//                   </a>
//                 </li>
//               </ul> */}
//               {/* </div> */}
//             </div>
//           </div>
//         </footer>{" "}
//       </div>{" "}
//     </>
//   );
// };

// export const FooterItemToTop = ({ children }) => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return children || null;
// };

// //FooterItemToTop
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";

// //images
// import havenlogo from "../assets/icons/havenlogo.png";
// import googlemaps from "../assets/icons/googlemaps.png";

// // icons
// import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
// // import { FacebookIcon } from "../assets/icons/icons";

// export const Footer = () => {
//   return (
//     <>
//       <div class="container-fluid px-5 footerOneBgColor">
//         <footer class="py-3 mx-5">
//           <div class="row ">
//             <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
//               {/* <Link to="/">
//                 {" "}
//                 <img
//                   alt=""
//                   src={havenlogo}
//                   style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//                   className="d-inline-block align-top"
//                 />
//               </Link> */}
//               <img
//                 alt=""
//                 src={havenlogo}
//                 style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//                 className="d-inline-block align-top"
//               />{" "}
//               <div className="col-lg-2">
//                 <h4>Work with us</h4>
//                 <ul class="nav flex-column">
//                   <li class="nav-item mb-2">
//                     <a href="/signup" class="nav-link p-0 footerParagraph">
//                       Become an instructor
//                     </a>
//                   </li>

//                 </ul>
//               </div>
//               <div className="col-lg-2">
//                 <h4>Learn with us</h4>
//                 <ul class="nav flex-column">
//                   <li class="nav-item mb-2">
//                     <a href="/" class="nav-link p-0 footerParagraph">
//                       School services
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a
//                       href="/AllActivities"
//                       class="nav-link p-0 footerParagraph"
//                     >
//                       Find Activities
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="col-lg-2">
//                 <h4>Get to know us</h4>
//                 <ul class="nav flex-column">
//                   <li class="nav-item mb-2">
//                     <a href="/about" class="nav-link p-0 footerParagraph">
//                       About Haven
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a
//                       href="/otherActivities"
//                       class="nav-link p-0 footerParagraph"
//                     >
//                       Other services
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="/gallery" class="nav-link p-0 footerParagraph">
//                       Gallery
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="col-lg-2">
//                 <h4>Connect with us</h4>
//                 <a href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7">
//                   <img
//                     alt=""
//                     src={googlemaps}
//                     style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//                     className="d-inline-block align-top"
//                   />{" "}
//                 </a>
//               </div>
//             </div>
//             {/* <div className="d-flex flex-column flex-sm-row justify-content-between">
//               <div class="col-lg-3 col-md-5 mb-3">
//                 <img
//                   alt=""
//                   src={havenlogo}
//                   style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//                   className="d-inline-block align-top"
//                 />{" "}
//               </div>
//               <div class="col-lg-3 col-md-2 mb-3">
//                 <h5>Section</h5>
//                 <ul class="nav flex-column">
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Home
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Features
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Pricing
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       FAQs
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       About
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div class="col-lg-3 col-md-2 mb-3">
//                 <h5>Section</h5>
//                 <ul class="nav flex-column">
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Home
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Features
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Pricing
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       FAQs
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       About
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div class="col-lg-3 col-md-2 mb-3">
//                 <h5>Section</h5>
//                 <ul class="nav flex-column">
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Home
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Features
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       Pricing
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       FAQs
//                     </a>
//                   </li>
//                   <li class="nav-item mb-2">
//                     <a href="#" class="nav-link p-0 text-muted">
//                       About
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div> */}

//             <div class="d-flex flex-column flex-sm-row justify-content-between">
//               <div>
//                 {" "}
//                 <MarkAsUnreadOutlinedIcon />
//                 <a
//                   class="footerParagraph mx-2"
//                   href="mailto: hello@haveneduservices.com"
//                 >
//                   hello@haveneduservices.com
//                 </a>
//               </div>

//               <div className="">
//                 <LocalPhoneOutlinedIcon />
//                 <a
//                   class="footerParagraph mx-2"
//                   href="tel:2348098438885"
//                   target="_blank"
//                 >
//                   080 98438885
//                 </a>
//                 <a
//                   class="footerParagraph mx-2"
//                   href="tel:2348098458885"
//                   target="_blank"
//                 >
//                   080 98458885
//                 </a>
//               </div>
//               <ul class="list-unstyled d-flex">
//                 <li class="ms-3">
//                   <a
//                     class="link-dark"
//                     href="https://m.facebook.com/haveneduservices/"
//                     target="_blank"
//                   >
//                     <FacebookOutlinedIcon />
//                   </a>
//                 </li>
//                 {/* <li class="ms-3">
//                   <a
//                     class="link-dark"
//                     href="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
//                     target="_blank"
//                   >
//                     <FacebookOutlinedIcon />
//                   </a>
//                 </li>
//                 <li class="ms-3">
//                   <a class="link-dark" href="#" target="_blank">
//                     <FacebookOutlinedIcon />
//                   </a>
//                 </li>
//                 <li class="ms-3">
//                   <a class="link-dark" href="#" target="_blank">
//                     <FacebookOutlinedIcon />
//                   </a>
//                 </li>
//                 <li class="ms-3">
//                   <a class="link-dark" href="#" target="_blank">
//                     <FacebookOutlinedIcon />
//                   </a>
//                 </li> */}
//               </ul>
//             </div>
//           </div>
//         </footer>{" "}
//       </div>{" "}
//       <div className="container-fluid footerTwoBgColor py-2">
//         {" "}
//         <p class="text-center text-light p-0 m-0">
//           &copy; 2022 Haven-Edu Services
//         </p>
//       </div>
//     </>
//   );
// };

// export const FooterItemToTop = ({ children }) => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return children || null;
// };

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import havenlogo from "../assets/icons/havenlogo.png";
import googlemaps from "../assets/icons/googlemaps.png";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import "./Footer.css"; // import custom CSS file

// export const Footer = () => {
//   return (
//     <>
//       <div class="container-fluid px-5 footerOneBgColor">
//         <footer class="py-3">
//           <div class="row ">
//             <div class="col-lg-4 d-flex flex-column justify-content-between py-4 my-4">
//               <img
//                 alt=""
//                 src={havenlogo}
//                 style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//                 className="d-inline-block align-top"
//               />{" "}
//               <div className="row my-4">
//                 <div className="col-6">
//                   <h4>Work with us</h4>
//                   <ul class="nav flex-column">
//                     <li class="nav-item mb-2">
//                       <a href="/signup" class="nav-link p-0 footerParagraph">
//                         Become an instructor
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-6">
//                   <h4>Learn with us</h4>
//                   <ul class="nav flex-column">
//                     <li class="nav-item mb-2">
//                       <a href="/" class="nav-link p-0 footerParagraph">
//                         School services
//                       </a>
//                     </li>
//                     <li class="nav-item mb-2">
//                       <a
//                         href="/AllActivities"
//                         class="nav-link p-0 footerParagraph"
//                       >
//                         Find Activities
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-6">
//                   <h4>Get to know us</h4>
//                   <ul class="nav flex-column">
//                     <li class="nav-item mb-2">
//                       <a href="/about" class="nav-link p-0 footerParagraph">
//                         About Haven
//                       </a>
//                     </li>
//                     <li class="nav-item mb-2">
//                       <a
//                         href="/otherActivities"
//                         class="nav-link p-0 footerParagraph"
//                       >
//                         Other services
//                       </a>
//                     </li>
//                     <li class="nav-item mb-2">
//                       <a href="/gallery" class="nav-link p-0 footerParagraph">
//                         Gallery
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="col-6">
//                   <h4>Connect with us</h4>
//                   <a href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7">
//                     <img
//                       alt=""
//                       src={googlemaps}
//                       style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//                       className="d-inline-block align-top"
//                     />{" "}
//                   </a>
//                 </div>
//               </div>
//               {/* <div class="d-flex flex-column flex-sm-row justify-content-between">
//                 <div>
//                   {" "}
//                   <MarkAsUnreadOutlinedIcon />
//                   <a
//                     class="footerParagraph mx-2"
//                     href="mailto: hello@haveneduservices.com"
//                   >
//                     hello@haveneduservices.com
//                   </a>
//                 </div>

//                 <div className="">
//                   <LocalPhoneOutlinedIcon />
//                   <a
//                     class="footerParagraph mx-2"
//                     href="tel:2348098438885"
//                     target="_blank"
//                   >
//                     080 98438885
//                   </a>
//                   <a
//                     class="footerParagraph mx-2"
//                     href="tel:2348098458885"
//                     target="_blank"
//                   >
//                     080 98458885
//                   </a>
//                 </div>
//                 <ul class="list-unstyled d-flex">
//                   <li class="ms-3">
//                     <a
//                       class="link-dark"
//                       href="https://m.facebook.com/haveneduservices/"
//                       target="_blank"
//                     >
//                       <FacebookOutlinedIcon />
//                     </a>
//                   </li>
//                 </ul>
//               </div> */}
//             </div>
//           </div>
//         </footer>{" "}
//       </div>{" "}
//       <div className="container-fluid footerTwoBgColor py-2">
//         {" "}
//         <p class="text-center text-light p-0 m-0">
//           &copy; 2022 Haven-Edu Services
//         </p>
//       </div>
//     </>
//   );
// };
// export const FooterItemToTop = ({ children }) => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return children || null;
// };

export const Footer = () => {
  return (
    <>
      <div class="container-fluid px-4 footerOneBgColor">
        <footer class="py-3">
          <div class="row">
            <div class="d-flex flex-column justify-content-between">
              <div className="d-xs-block d-sm-block d-md-none d-lg-none text-center">
                {" "}
                <img
                  alt=""
                  src={havenlogo}
                  style={{ maxWidth: "6rem", maxHeight: "6rem" }}
                  className="d-inline-block align-top"
                />
              </div>
              <div className="row my-4 justify-content-center">
                {/* <div className="d-none d-lg-none d-md-block d-sm-none d-xs-none col-lg-2">
                  {" "}
                  <img
                    alt=""
                    src={havenlogo}
                    style={{ maxWidth: "8rem", maxHeight: "8rem" }}
                    className="d-inline-block align-top"
                  />
                </div> */}
                <div className="d-none d-lg-block d-md-block d-sm-none d-xs-none col-lg-2 col-md-2">
                  {" "}
                  {/* <Link> */}{" "}
                  <img
                    alt=""
                    src={havenlogo}
                    style={{ maxWidth: "6rem", maxHeight: "6rem" }}
                    className="d-inline-block align-top"
                  />
                  {/* </Link> */}
                </div>
                <div className="col-6 col-lg-2 col-md-2">
                  <h4>Work with us</h4>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a
                        href="/https://docs.google.com/forms/d/e/1FAIpQLSdV1S2xwMwH35oaMLbzuJanRCnxK1bmrd8tLIRDdIsW9WmhAg/viewform?usp=sharing"
                        class="nav-link p-0 footerParagraph"
                        target="_blank"
                      >
                        Become an Instructor
                      </a>
                      {/* <a href="/signup" class="nav-link p-0 footerParagraph">
                        Become an instructor
                      </a> */}
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-2 col-md-2">
                  <h4>Learn with us</h4>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a href="/" class="nav-link p-0 footerParagraph">
                        School Services
                      </a>
                    </li>
                    <li class="nav-item mb-2">
                      <a
                        href="/AllActivities"
                        class="nav-link p-0 footerParagraph"
                      >
                        Find Activities
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-2 col-md-2">
                  <h4>Get to know us</h4>
                  <ul class="nav flex-column">
                    <li class="nav-item mb-2">
                      <a href="/about" class="nav-link p-0 footerParagraph">
                        About Haven
                      </a>
                    </li>
                    {/* <li class="nav-item mb-2">
                      <a
                        href="/otherActivities"
                        class="nav-link p-0 footerParagraph"
                      >
                        Other services
                      </a>
                    </li> */}
                    <li class="nav-item mb-2">
                      <a href="/gallery" class="nav-link p-0 footerParagraph">
                        Gallery
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-2 col-md-2">
                  <h4>Connect with us</h4>
                  <p>Magodo, Lagos</p>
                  <a
                    href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
                    target="_blank"
                  >
                    <img
                      alt=""
                      src={googlemaps}
                      style={{ maxWidth: "6rem", maxHeight: "6rem" }}
                      className="d-inline-block align-top"
                    />{" "}
                  </a>
                </div>
              </div>
              <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center">
                <div>
                  {" "}
                  <MarkAsUnreadOutlinedIcon />
                  <a
                    class="footerParagraph mx-2"
                    href="mailto: hello@haveneduservices.com"
                  >
                    hello@haveneduservices.com
                  </a>
                </div>

                <div className="">
                  <LocalPhoneOutlinedIcon />
                  <a
                    class="footerParagraph mx-2"
                    href="tel:2348098438885"
                    target="_blank"
                  >
                    080 98438885
                  </a>
                  <a
                    class="footerParagraph mx-2"
                    href="tel:2348098458885"
                    target="_blank"
                  >
                    080 98458885
                  </a>
                </div>
                <ul class="list-unstyled d-flex">
                  <li class="ms-3">
                    <a
                      class="link-dark"
                      href="https://www.linkedin.com/company/havenedu-services/"
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li class="ms-3">
                    <a
                      class="link-dark"
                      href="https://m.facebook.com/haveneduservices/"
                      target="_blank"
                    >
                      <FacebookOutlinedIcon />
                    </a>
                  </li>
                  <li class="ms-3">
                    <a
                      class="link-dark"
                      href="https://www.instagram.com/haveneduservices/"
                      target="_blank"
                    >
                      <InstagramIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>{" "}
      </div>{" "}
      <div className="container-fluid footerTwoBgColor d-flex justify-content-center py-2">
        {" "}
        <p class="text-center text-light p-0 m-0 mx-2">
          &copy; 2023 Haven-Edu Services
        </p>
        <p className="text-center m-0 p-0 mx-2" style={{ fontSize: "0.8rem" }}>
          <Link
            to="/privacy-policy"
            style={{ color: "#ffffff", textDecoration: "none" }}
          >
            {" "}
            Privacy Policy
          </Link>
        </p>
      </div>
    </>
  );
};
export const FooterItemToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};
