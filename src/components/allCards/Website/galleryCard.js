import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardPhoto from "../../../Image/passport.jpg";
import GalleryPictures from "../../../data/gallery.json";

export const GalleryCard = (props) => {
  const { image } = props;
  return (
    <Card style={{ width: "20rem" }} className="mt-5 Gallerycard">
      <Card.Img variant="top" src={image} className="Gallerypics" />
    </Card>
  );
};

export const GallleryCardImage = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center justify-content-around ">
          {GalleryPictures.gallerydata.map((Gallery) => {
            return (
              <>
                <div className="col-lg-3 col-md-5 col-sm-12" key={Gallery.id}>
                  <GalleryCard {...Gallery} />
                </div>
              </>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};
