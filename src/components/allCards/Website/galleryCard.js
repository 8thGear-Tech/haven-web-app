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
