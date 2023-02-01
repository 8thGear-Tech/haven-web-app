import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardPhoto from "../../../assets/images/blog/passport.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const BlogCard = (props) => {
  const { image, text } = props;
  return (
    <div
      style={{ width: "40rem" }}
      className="mt-5 blogcard d-flex align-items-center"
    >
      <Row className="d-flex align-items-center">
        {/* <Col> */}
        {/* <Col className="d-flex"> */}
        <Col className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <Card.Img
            variant="top"
            src={CardPhoto}
            style={{ width: "15rem" }}
            className="blogImage"
          />
        </Col>
        {/* <Col> */}
        <Col className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <Card.Body>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Col>
        {/* </Col> */}
      </Row>
    </div>
  );
};
