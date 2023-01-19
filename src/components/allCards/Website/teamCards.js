//external import
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//internal import
import teamInfo from "../../../data/allCards/team.json";
import { MemberOneViewBioBtn } from "../../Buttons/website/teamModalBtn";

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
        {" "}
        <h3 className="text-center">OUR TEAM</h3>
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

export const TeamPopUpCard = (props) => {
  const { id, image, name, position, text, link } = props;
  return (
    <>
      <MemberOneViewBioBtn />
      <div
        className="modal fade"
        id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="d-flex justify-content-between mx-4 my-2">
              {/* <img src={logo} width={40} id="staticBackdropLabel" /> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="cards" key={id}>
              <img src={image} className="w-25 mb-4" alt="..." />
              <h4>{name}</h4>
              <h6 className="">{position}</h6>{" "}
              <a href={link}>
                {/* <div className="">
                  {" "}
                  <LinkedInIcon />
                </div> */}
              </a>
              <div className="card-body">
                <p className="card-text ">{text}</p>
              </div>
              {/* <img src={linkedin} className="mb-4" width={25} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// export const TeamPopUp = () => {
//   return (
//     <>

//     </>
//   )
// }
