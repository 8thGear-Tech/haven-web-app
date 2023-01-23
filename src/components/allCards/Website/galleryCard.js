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
      <div className="container-fluid">
        <div className="row justify-content-center mx-5">
          {GalleryPictures.gallerydata.map((Gallery) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12" key={Gallery.id}>
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
