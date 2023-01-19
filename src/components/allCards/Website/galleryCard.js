import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardPhoto from "../../../Image/passport.jpg";

const GalleryCard = () => {
  return (
    <Card style={{ width: "20rem" }} className="Gallerycard">
      <Card.Img variant="top" src={CardPhoto} className="Gallerypics" />
    </Card>
  );
};

export default GalleryCard;
