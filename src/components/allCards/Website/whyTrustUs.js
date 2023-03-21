//external import
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const WhyTrustUsCard = (props) => {
  const { icon, titleText, paragraphText } = props;
  return (
    <>
      <div className="w-100 px-5">
        <img
          src={icon}
          className="card-img-center px-5 py-3 mx-auto img-fluid"
          alt="..."
          // style={{ width: "60%" }}
        />
        {/* <Card.Img variant="top" src={icon} className="px-5" /> */}
        <Card.Body className="text-center">
          <h4 className="mt-1">{titleText}</h4>
          <Card.Text className="">{paragraphText}</Card.Text>
        </Card.Body>
      </div>
    </>
  );
};
