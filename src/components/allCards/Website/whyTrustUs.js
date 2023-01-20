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
        <Card.Img variant="top" src={icon} className="px-5" />
        <Card.Body className="text-center">
          <h4 className="mt-3">{titleText}</h4>
          <Card.Text className="">{paragraphText}</Card.Text>
        </Card.Body>
      </div>
    </>
  );
};
