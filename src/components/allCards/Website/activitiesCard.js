// Awelewa
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import { SuscribeBtn } from "../../Buttons/website/actionBtn/schoolBtn";

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

export const NewActivitiesCard = (props) => {
  const {
    image,
    title,
    agetitle,
    age,
    stageonetitle,
    stageonetext,
    stagetwotitle,
    stagetwotext,
    stagethreetitle,
    stagethreetext,
  } = props;
  return (
    <Card
      style={{ width: "20rem" }}
      className="paymentpackage mx-auto text-center cardBgColor pb-4 mb-5"
    >
      <img
        src={image}
        width="100px"
        height="100px"
        className="rounded-circle mx-auto mt-4 img-fluid"
      />
      <Card.Body>
        <h4 className="text-white mt-3">{title}</h4>
        <p className="m-0 p-0 text-white">{agetitle}</p>
        <p className="m-0 p-0 text-white">{age}</p>
        <Card className="paymentpackage mx-auto text-center mt-3">
          <h6 className="mt-2 mb-0">{stageonetitle}</h6>

          <p className="mb-1 p-0" style={{ fontSize: "0.85rem" }}>
            {stageonetext}
          </p>
        </Card>
        <Card className="paymentpackage mx-auto text-center mt-3">
          <h6 className="mt-2 mb-0">{stagetwotitle}</h6>
          <p className="mb-1 p-0" style={{ fontSize: "0.85rem" }}>
            {stagetwotext}
          </p>
        </Card>
        <Card className="paymentpackage mx-auto text-center mt-3">
          <h6 className="mt-2 mb-0">{stagethreetitle}</h6>
          <p className="m-0 p-0 mb-1" style={{ fontSize: "0.85rem" }}>
            {stagethreetext}
          </p>
        </Card>
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
