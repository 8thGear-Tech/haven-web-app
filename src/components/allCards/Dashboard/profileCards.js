// Michael
// PersonalDetailsCard
// ProfileCard

// Awelewa
// ProfileReadMoreCard
import { Photo } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import CardPhoto from "../../../Image/passport.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profilepic from "../../../assets/images/dashboard/profilepic.png";
import champpic from "../../../assets/images/dashboard/champpic.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ProfileReadMoreBtn } from "../../Buttons/dashboard/actionBtn";
import { InstructorProfileReadMoreBtn } from "../../Buttons/dashboard/actionBtn";

const ProfileReadMoreCard = () => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Body>
        <div className="text-center">
          <Card.Img
            className="rounded-circle"
            variant="top"
            src={champpic}
            style={{ width: "10rem" }}
          />
        </div>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content. card title and
          card title and make up the bulk of the card's content. make up the
          card title and make up the bulk of the card's content.
        </Card.Text>
        {/* <div className="text-center">
          <LinkedInIcon />
        </div> */}
      </Modal.Body>
    </div>
  );
};

export const ProfileCard = () => {
  return (
    <>
      <Card className="mx-auto" style={{ width: "20rem" }}>
        <Card.Body className="">
          <div className="text-center">
            {" "}
            <img
              src={champpic}
              className="rounded-circle ms-3 border border-light border-5 img-fluid"
            />
          </div>
          <h4 className="text-center">Alexander </h4>
          {/* <Card.Text className="text-center">M.COM., P.H.D.</Card.Text> */}
          <Card.Text>Email : adekolaokesanya@gmail.com</Card.Text>
          <hr />
          <Card.Text>Phone : +2348023672339</Card.Text>
          <hr />
          <Card.Text>Home Address : Number 55, albert street</Card.Text>
          <hr />
          <Card.Text>Gender : Male</Card.Text>
          <hr />
        </Card.Body>
        <div className="mb-4 text-center">
          <Link to="">
            {" "}
            <ProfileReadMoreBtn />
          </Link>
        </div>
      </Card>
    </>
  );
};

export const InstructorProfileReadMoreCard = () => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Body>
        <div className="text-center">
          <Card.Img
            className="rounded-circle"
            variant="top"
            src={profilepic}
            style={{ width: "10rem" }}
          />
        </div>

        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content. card title and
          card title and make up the bulk of the card's content. make up the
          card title and make up the bulk of the card's content.
        </Card.Text>
        {/* <div className="text-center">
          <LinkedInIcon />
        </div> */}
      </Modal.Body>
    </div>
  );
};
export const InstructorProfileCard = () => {
  return (
    <>
      <Card className="mx-auto" style={{ width: "20rem" }}>
        <Card.Body className="">
          <div className="text-center">
            {" "}
            <img
              src={profilepic}
              className="rounded-circle ms-3 border border-light border-5 img-fluid"
            />
          </div>
          <h4 className="text-center">Alexander </h4>
          {/* <Card.Text className="text-center">M.COM., P.H.D.</Card.Text> */}
          <Card.Text>Email : adekolaokesanya@gmail.com</Card.Text>
          <hr />
          <Card.Text>Phone : +2348023672339</Card.Text>
          <hr />
          <Card.Text>Home Address : Number 55, albert street</Card.Text>
          <hr />
          <Card.Text>Gender : Male</Card.Text>
          <hr />
        </Card.Body>
        <div className="mb-4 text-center">
          <Link to="">
            {" "}
            <InstructorProfileReadMoreBtn />
          </Link>
        </div>
      </Card>
    </>
  );
};

export const PersonalDetailsCard = () => {
  return (
    <>
      <Card className="" style={{ width: "23rem" }}>
        <Card.Body className="">
          <div className="text-center"></div>
          <Card.Title className="text-center">Personal Details</Card.Title>
          {/* <Card.Text className="text-center">M.COM., P.H.D.</Card.Text> */}
          <Card.Text>Email : adekolaokesanya@gmail.com</Card.Text>
          <Card.Text>Phone : +2348023672339</Card.Text>
          <Card.Text>Home Address : Number 55, albert street</Card.Text>
          <Card.Text>Gender : Male</Card.Text>
        </Card.Body>
        <div className="mb-4 text-center">
          <Link to=""> {/* <ProfileReadMoreBtn /> */}</Link>
        </div>
      </Card>
    </>
  );
};

export default ProfileReadMoreCard;
