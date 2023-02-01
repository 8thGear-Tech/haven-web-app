import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardPhoto from "../../../assets/images/blog/passport.jpg";
import GalleryPictures from "../../../data/gallery.json";

export const GallerySection = (props) => {
  const { img } = props;
  return (
    <>
      <div className="container py-5">
        {" "}
        <div className="row g-0">
          <div className="card">
            <img src={img} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

//  <div className="container-fluid">
//         <div className="row justify-content-center mx-5">
//           {GalleryPictures.gallerydata.map((Gallery) => {
//             return (
//               <>
//                 <div className="col-lg-4 col-md-6 col-sm-12" key={Gallery.id}>
//                   <GalleryCard {...Gallery} />
//                 </div>
//               </>
//             );
//           })}
//           ;
// // export const GalleryCard = (props) => {
//   const { image } = props;
//   return (
//     <Card style={{ width: "20rem" }} className="mt-5 Gallerycard">
//       <Card.Img variant="top" src={image} className="Gallerypics" />
//     </Card>
//   );
// };
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import CardPhoto from "../../../Image/passport.jpg";

// const GalleryCard = () => {
//   return (
//     <Card style={{ width: "20rem" }} className="Gallerycard">
//       <Card.Img variant="top" src={CardPhoto} className="Gallerypics" />
//     </Card>
//   );
// };

// export default GalleryCard;
// export const GallleryCardImage = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="row text-center justify-content-around ">
//           {GalleryPictures.gallerydata.map((Gallery) => {
//             return (
//               <>
//                 <div className="col-lg-3 col-md-5 col-sm-12" key={Gallery.id}>
//                   <GalleryCard {...Gallery} />
//                 </div>
//               </>
//             );
//           })}
//           ;
//         </div>
//       </div>
//     </>
//   );
// };
