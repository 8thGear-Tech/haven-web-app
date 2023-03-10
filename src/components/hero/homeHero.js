//internal import

//buttons
import { GetAnInstructorBtn } from "../Buttons/website/actionBtn/homeandAboutBtn";

//images
import homehero from "../../assets/images/hero/homehero.png";
import hero from "../../assets/images/hero/hero.png";
// import homeheronew from "../../assets/images/hero/homeheronew.png";

//icons

export const HomeHero = () => {
  return (
    <>
      <div className="container-fluid homeHeroBg d-flex align-items-center">
        <div className="container-fluid homeHeroBgg d-flex align-items-center">
          <div className="row d-flex align-items-center mx-lg-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className="d-none d-lg-block d-md-none d-sm-none d-xs-none heroTextColor">
                Exciting Young Champs Towards Technology, Arts And Foreign
                Languages
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-block d-lg-none heroTextColor mt-3">
                {" "}
                Exciting Young Champs Towards Technology, Arts And Foreign
                Languages
              </h3>{" "}
              <div className="mb-3">
                {" "}
                <GetAnInstructorBtn />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <img src={hero} class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const HomeMobileHero = () => {
  return (
    <>
      <div className="container-fluid  homeHeroMobileBg d-flex align-items-center py-4 d-xs-block d-sm-block d-md-block d-lg-none">
        {/* <div className="px-3 container-fluid  d-flex pt-3"> */}
        <div className="row d-flex justify-content-center g-0">
          <div className="col-sm-12  text-center">
            {/* <img src={homeheromobilee} class="img-fluid" /> */}
          </div>
          <div className="">
            <h4 className="col-sm-10 mx-auto">
              Exciting Young Champs Towards Technology, Arts And Foreign
              Languages
            </h4>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export const HomeHer = () => {
  return (
    <>
      <div className="container-fluid homeHeroBg d-flex align-items-center d-none d-xs-none d-sm-none d-md-block d-lg-block">
        {/* <div className="px-3 container-fluid homeHeroBgg pt-3 pb-4"> */}
        {/* <div className="row"> */}
        {/* <div className=""> */}
        <h2 className="col-lg-6 col-md-5 ms-5 d-flex align-items-center ">
          Exciting Young Champs Towards Technology, Arts And Foreign Languages
        </h2>
        {/* <h3 className="col-lg-7 col-md-6 d-xs-block d-sm-block d-md-block d-lg-none">
                {" "}
                Exciting Young Champs Towards Technology, Arts And Foreign
                Languages
              </h3> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <div className="container-fluid  homeHeroMobileBg d-flex align-items-center py-4">
        {/* <div className="px-3 container-fluid  d-flex pt-3"> */}
        <div className="row d-flex justify-content-center g-0">
          <div className="col-sm-12 d-xs-block d-sm-block d-md-none d-lg-none text-center">
            {/* <img src={homeheromobilee} class="img-fluid" /> */}
          </div>
          <div className="">
            <h4 className="col-sm-10 d-xs-block d-sm-block d-md-none d-lg-none mx-auto">
              Exciting Young Champs Towards Technology, Arts And Foreign
              Languages
            </h4>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
// export const HomeHero = () => {
//   return (
//     <>
//       <div className="px-3">
//         {" "}
//         <div className="px-4 container-fluid underconstructionPageBg pb-4">
//           <div className="row align-items-center justify-content-center mt-3">
//             <div className="col-lg-5 col-md-12 col-sm-12 ">
//               <h1 className="headerFontColor d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
//                 Exciting Young Champs Towards Technology, Arts And Foreign
//                 Languages
//               </h1>
//               <h2 className="headerFontColor d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
//                 Exciting Young Champs Towards Technology, Arts And Foreign
//                 Languages
//               </h2>
//             </div>
//             <div className="col-lg-7 col-md-12 col-sm-10 mb-5">
//               <img
//                 src={homehero}
//                 className="mx-lg-auto img-fluid "
//                 alt=""
//                 loading=""
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
