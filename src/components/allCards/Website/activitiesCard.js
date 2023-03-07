// Awelewa
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import { SuscribeBtn } from "../../Buttons/website/actionBtn/schoolBtn";\
import { ReadMoreBtn } from "../../Buttons/dashboard/actionBtn";

export const ActivitiesCard = (props) => {
  const { image, link, title, text } = props;
  return (
    <Card style={{ width: "20rem" }} className="paymentpackage mx-auto">
      <Card.Img
        variant="top"
        src={image}
        className="justify-content-center border border-top-0 border-start-0 border-end-0 Cardpicture"
      />
      <Card.Body>
        <Link to={link} className="text-decoration-none titleTextColor">
          {" "}
          <Card.Title className=""> {title}</Card.Title>
        </Link>

        <Card.Text>{text}</Card.Text>
        {/* <Link to={link}>
          {" "}
          <SuscribeBtn />
        </Link> */}
      </Card.Body>
    </Card>
  );
};
export const WhatWeDoCard = (props) => {
  const { image, link, title, text } = props;
  return (
    <Card style={{ width: "20rem" }} className="paymentpackage mx-auto mb-5">
      <Card.Img
        variant="top"
        src={image}
        className="justify-content-center border border-top-0 border-start-0 border-end-0 Cardpicture"
      />
      <Card.Body>
        <Link to={link} className="text-decoration-none titleTextColor">
          {" "}
          <Card.Title className="">{title}</Card.Title>
        </Link>

        <Card.Text>{text}</Card.Text>
        <Link to={link}>
          {" "}
          <ReadMoreBtn />
        </Link>
      </Card.Body>
    </Card>
  );
};
