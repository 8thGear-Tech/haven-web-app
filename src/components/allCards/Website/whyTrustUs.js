//external import
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//internal import
import whyTrustUsInfo from "../../../data/allCards/whyTrustUs.json";

//images

//Icons

export const WhyTrustUsCard = (props) => {
  const { icon, titleText, paragraphText } = props;
  return (
    <>
      <div style={{ width: "18rem" }} className="my-5">
        <Card.Img variant="top" src={icon} className="" />
        <Card.Body className="text-center">
          <h4 className="mt-3">{titleText}</h4>
          <Card.Text className="">{paragraphText}</Card.Text>
        </Card.Body>
      </div>
    </>
  );
};
export const WhyTrustUs = () => {
  return (
    <>
      <div className="container-fluid p-5 mt-5">
        <Row
          xs={1}
          md={2}
          className="g-0 justify-content-center justify-content-evenly mt-5"
        >
          {whyTrustUsInfo.whyTrustUsInfo.map((info) => {
            return (
              <Col
                className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch"
                key={info.id}
              >
                <WhyTrustUsCard {...info} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
