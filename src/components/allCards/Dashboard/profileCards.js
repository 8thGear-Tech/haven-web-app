// Michael
// PersonalDetailsCard
// ProfileCard

// Awelewa
// ProfileReadMoreCard
import { Photo } from "@mui/icons-material";

import Card from "react-bootstrap/Card";
import CardPhoto from "../../../Image/passport.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProfileReadMoreCard = () => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Instructors Profile</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            <Card.Img
              className="rounded-circle"
              variant="top"
              src={CardPhoto}
              style={{ width: "10rem" }}
            />
          </div>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Some quick example text to build on the
            card title and make up the bulk of the card's content. card title
            and card title and make up the bulk of the card's content. make up
            the card title and make up the bulk of the card's content.
          </Card.Text>
          <div className="text-center">
            <LinkedInIcon />
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default ProfileReadMoreCard;
