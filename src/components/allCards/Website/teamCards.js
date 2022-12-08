// new
// TeamCard
// TeamPopUpCard
//external import
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//internal import
import teamInfo from "../../../data/allCards/team.json";

//images
// import madamwunmi from "../../../assets/images/team/madamwunmi.png";

//Icons
import EastIcon from "@mui/icons-material/East";

export const TeamCard = (props) => {
  const { image, name, role, bio } = props;
  return (
    <>
      <div style={{ width: "18rem" }} className="my-5">
        <Card.Img variant="top" src={image} className="teamCard" />
        <Card.Body>
          <h4 className="mt-3">{name}</h4>
          <Card.Text className="">{role}</Card.Text>
          <div className="d-flex">
            {" "}
            <a href="" className="text-decoration-none d-flex">
              {" "}
              <h5 className="">
                <b> View Bio</b>
              </h5>
              <EastIcon style={{ color: "#75117a" }} />
            </a>
          </div>
        </Card.Body>
      </div>
    </>
  );
};
export const Team = () => {
  return (
    <>
      <div className="container-fluid p-5 mt-5">
        <Row
          xs={1}
          md={2}
          className="g-0 justify-content-center justify-content-evenly mt-5"
        >
          {teamInfo.teamInfo.map((info) => {
            return (
              <Col
                className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch"
                key={info.id}
              >
                <TeamCard {...info} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
