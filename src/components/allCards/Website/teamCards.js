//external import
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

//internal import
import teamMemberOneInfo from "../../../data/allCards/team.json";
import teamMemberTwoInfo from "../../../data/allCards/team.json";
import teamMemberThreeInfo from "../../../data/allCards/team.json";
import teamMemberFourInfo from "../../../data/allCards/team.json";
import teamMemberFiveInfo from "../../../data/allCards/team.json";
import teamMemberSixInfo from "../../../data/allCards/team.json";
import teamMemberSevenInfo from "../../../data/allCards/team.json"
import { MemberOneViewBioBtn } from "../../Buttons/website/teamModalBtn";
import { TeamOneViewBioBtn } from "../../Buttons/website/actionBtn/homeandAboutBtn";

//images
// import madamwunmi from "../../../assets/images/team/madamwunmi.png";

//Icons
import EastIcon from "@mui/icons-material/East";
import LinkedIn from "@mui/icons-material/LinkedIn";

export const TeamCardOne = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    image,
    name,
    role,
    modalimage,
    modalname,
    modaltitle,
    modallink,
    modaltext,
  } = props;
  return (
    <>
      <div style={{ width: "18rem" }} className="my-3 mx-auto">
        <Card.Img variant="top" src={image} className="teamCard" />
        <Card.Body>
          <h4 className="mt-3">{name}</h4>
          <Card.Text className="m-0">{role}</Card.Text>
          <div className="d-flex">
            <a
              href="https://www.linkedin.com/in/omowunmiobidairo/"
              target="_blank"
            >
              {" "}
              <LinkedIn />
            </a>
            {/* <a
              // variant="primary"
              onClick={handleShow}
              href=""
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
              style={{ color: "#75117A" }}
              className="text-decoration-none"
            >
              View Bio
            </a> */}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={modalimage}
                  className="teamCard my-3"
                  style={{ width: "10rem" }}
                />
              </div>
              <div className="text-center">
                <h3>{modalname}</h3>
                <Card.Text>{modaltitle}</Card.Text>
                <a href="" src={modallink}>
                  {" "}
                  <LinkedIn />
                </a>
                <Card.Text className="mx-3 my-2">{modaltext}</Card.Text>
              </div>
            </Modal>
            {/* <EastIcon style={{ color: "#75117a" }} /> */}
          </div>
        </Card.Body>
      </div>
    </>
  );
};
export const TeamCardTwo = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    image,
    name,
    role,
    modalimage,
    modalname,
    modaltitle,
    modallink,
    modaltext,
  } = props;
  return (
    <>
      <div style={{ width: "18rem" }} className="my-3 mx-auto">
        <Card.Img variant="top" src={image} className="teamCard" />
        <Card.Body>
          <h4 className="mt-3">{name}</h4>
          <Card.Text className="m-0">{role}</Card.Text>
          <div className="d-flex">
            <a
              href="https://www.linkedin.com/in/oluwatobiloba-adebola-38759123a"
              target="_blank"
            >
              {" "}
              <LinkedIn />
            </a>
            {/* <a
              // variant="primary"
              onClick={handleShow}
              href=""
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
              style={{ color: "#75117A" }}
              className="text-decoration-none"
            >
              View Bio
            </a> */}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={modalimage}
                  className="teamCard my-3"
                  style={{ width: "10rem" }}
                />
              </div>
              <div className="text-center">
                <h3>{modalname}</h3>
                <Card.Text>{modaltitle}</Card.Text>
                <a href="" src={modallink}>
                  {" "}
                  <LinkedIn />
                </a>
                <Card.Text className="mx-3 my-2">{modaltext}</Card.Text>
              </div>
            </Modal>
            {/* <EastIcon style={{ color: "#75117a" }} /> */}
          </div>
        </Card.Body>
      </div>
    </>
  );
};
export const TeamCardThree = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    image,
    name,
    role,
    modalimage,
    modalname,
    modaltitle,
    modallink,
    modaltext,
  } = props;
  return (
    <>
      <div style={{ width: "18rem" }} className="my-3 mx-auto">
        <Card.Img variant="top" src={image} className="teamCard" />
        <Card.Body>
          <h4 className="mt-3">{name}</h4>
          <Card.Text className="m-0">{role}</Card.Text>
          <div className="d-flex">
            {/* <a
              href="https://www.linkedin.com/in/owoyele-femi-793a70224/"
              target="_blank"
            >
              {" "}
              <LinkedIn />
            </a> */}
            <p>LinkedIn link</p>
            {/* <a
              // variant="primary"
              onClick={handleShow}
              href=""
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
              style={{ color: "#75117A" }}
              className="text-decoration-none"
            >
              View Bio
            </a> */}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={modalimage}
                  className="teamCard my-3"
                  style={{ width: "10rem" }}
                />
              </div>
              <div className="text-center">
                <h3>{modalname}</h3>
                <Card.Text>{modaltitle}</Card.Text>
                <a href="" src={modallink}>
                  {" "}
                  <LinkedIn />
                </a>
                <Card.Text className="mx-3 my-2">{modaltext}</Card.Text>
              </div>
            </Modal>
            {/* <EastIcon style={{ color: "#75117a" }} /> */}
          </div>
        </Card.Body>
      </div>
    </>
  );
};
export const TeamCardFour = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    image,
    name,
    role,
    modalimage,
    modalname,
    modaltitle,
    modallink,
    modaltext,
  } = props;
  return (
    <>
      <div style={{ width: "18rem" }} className="my-3 mx-auto">
        <Card.Img variant="top" src={image} className="teamCard" />
        <Card.Body>
          <h4 className="mt-3">{name}</h4>
          <Card.Text className="m-0">{role}</Card.Text>
          <div className="d-flex">
            <a
              href="https://www.linkedin.com/in/samuel-afolayan-1a528b134/"
              target="_blank"
            >
              {" "}
              <LinkedIn />
            </a>
            {/* <a
              // variant="primary"
              onClick={handleShow}
              href=""
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
              style={{ color: "#75117A" }}
              className="text-decoration-none"
            >
              View Bio
            </a> */}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={modalimage}
                  className="teamCard my-3"
                  style={{ width: "10rem" }}
                />
              </div>
              <div className="text-center">
                <h3>{modalname}</h3>
                <Card.Text>{modaltitle}</Card.Text>
                <a href="" src={modallink}>
                  {" "}
                  <LinkedIn />
                </a>
                <Card.Text className="mx-3 my-2">{modaltext}</Card.Text>
              </div>
            </Modal>
            {/* <EastIcon style={{ color: "#75117a" }} /> */}
          </div>
        </Card.Body>
      </div>
    </>
  );
};
export const TeamCardFive = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    image,
    name,
    role,
    modalimage,
    modalname,
    modaltitle,
    modallink,
    modaltext,
  } = props;
  return (
    <>
      <div style={{ width: "18rem" }} className="my-3 mx-auto">
        <Card.Img variant="top" src={image} className="teamCard" />
        <Card.Body>
          <h4 className="mt-3">{name}</h4>
          <Card.Text className="m-0">{role}</Card.Text>
          <div className="d-flex">
            {/* <a
              href="https://www.linkedin.com/in/olamide-ogunbanjo-927637b2/"
              target="_blank"
            >
              {" "}
              <LinkedIn />
            </a> */}
            <p>No Link to LinkedIn</p>
            {/* <a
              // variant="primary"
              onClick={handleShow}
              href=""
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
              style={{ color: "#75117A" }}
              className="text-decoration-none"
            >
              View Bio
            </a> */}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={modalimage}
                  className="teamCard my-3"
                  style={{ width: "10rem" }}
                />
              </div>
              <div className="text-center">
                <h3>{modalname}</h3>
                <Card.Text>{modaltitle}</Card.Text>
                <a href="" src={modallink}>
                  {" "}
                  <LinkedIn />
                </a>
                <Card.Text className="mx-3 my-2">{modaltext}</Card.Text>
              </div>
            </Modal>
            {/* <EastIcon style={{ color: "#75117a" }} /> */}
          </div>
        </Card.Body>
      </div>
    </>
  );
};

export const TeamCardSix = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    image,
    name,
    role,
    modalimage,
    modalname,
    modaltitle,
    modallink,
    modaltext,
  } = props;
  return (
    <>
      <div style={{ width: "18rem" }} className="my-3 mx-auto">
        <Card.Img variant="top" src={image} className="teamCard" />
        <Card.Body>
          <h4 className="mt-3">{name}</h4>
          <Card.Text className="m-0">{role}</Card.Text>
          <div className="d-flex">
            <a
              href="https://www.linkedin.com/in/aruna-afeez-76a204102?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app 
"
              target="_blank"
            >
              {" "}
              <LinkedIn />
            </a>
            {/* <a
              // variant="primary"
              onClick={handleShow}
              href=""
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
              style={{ color: "#75117A" }}
              className="text-decoration-none"
            >
              View Bio
            </a> */}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={modalimage}
                  className="teamCard my-3"
                  style={{ width: "10rem" }}
                />
              </div>
              <div className="text-center">
                <h3>{modalname}</h3>
                <Card.Text>{modaltitle}</Card.Text>
                <a href="" src={modallink}>
                  {" "}
                  <LinkedIn />
                </a>
                <Card.Text className="mx-3 my-2">{modaltext}</Card.Text>
              </div>
            </Modal>
            {/* <EastIcon style={{ color: "#75117a" }} /> */}
          </div>
        </Card.Body>
      </div>
    </>
  );
};

export const TeamCardSeven = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    image,
    name,
    role,
    modalimage,
    modalname,
    modaltitle,
    modallink,
    modaltext,
  } = props;
  return (
    <>
      <div style={{ width: "18rem" }} className="my-3 mx-auto">
        <Card.Img variant="top" src={image} className="teamCard" />
        <Card.Body>
          <h4 className="mt-3">{name}</h4>
          <Card.Text className="m-0">{role}</Card.Text>
          <div className="d-flex">
            <a
              href=" https://www.linkedin.com/in/opeyemi-bioku"
              target="_blank"
            >
              {" "}
              <LinkedIn />
            </a>
            {/* <a
              // variant="primary"
              onClick={handleShow}
              href=""
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
              style={{ color: "#75117A" }}
              className="text-decoration-none"
            >
              View Bio
            </a> */}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={modalimage}
                  className="teamCard my-3"
                  style={{ width: "10rem" }}
                />
              </div>
              <div className="text-center">
                <h3>{modalname}</h3>
                <Card.Text>{modaltitle}</Card.Text>
                <a href="" src={modallink}>
                  {" "}
                  <LinkedIn />
                </a>
                <Card.Text className="mx-3 my-2">{modaltext}</Card.Text>
              </div>
            </Modal>
            {/* <EastIcon style={{ color: "#75117a" }} /> */}
          </div>
        </Card.Body>
      </div>
    </>
  );
};

// export const Team = () => {
//   return (
//     <>
//       <div className="container-fluid p-5 mt-5">
//         {" "}
//         <h3 className="text-center">OUR TEAM</h3>
//         <Row xs={1} md={2} className="g-0 justify-content-center mt-2">
//           {teamInfo.teamInfo.map((info) => {
//             return (
//               <Col
//                 className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch"
//                 key={info.id}
//               >
//                 <TeamCard {...info} />
//               </Col>
//             );
//           })}
//         </Row>
//       </div>
//     </>
//   );
// };

export const Team = () => {
  return (
    <div className="container ">
      <div className="row justify-content-center mt-5">
        <h3 className="text-center mb-3">OUR CORE TEAM</h3>
        <div className="col-lg-4 col-md-6 mb-5">
          {" "}
          {teamMemberOneInfo.teamMemberOneInfo.map((card) => {
            return <TeamCardOne {...card}></TeamCardOne>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          {" "}
          {teamMemberTwoInfo.teamMemberTwoInfo.map((card) => {
            return <TeamCardTwo {...card}></TeamCardTwo>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          {" "}
          {teamMemberThreeInfo.teamMemberThreeInfo.map((card) => {
            return <TeamCardThree {...card}></TeamCardThree>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          {" "}
          {teamMemberFourInfo.teamMemberFourInfo.map((card) => {
            return <TeamCardFour {...card}></TeamCardFour>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          {" "}
          {teamMemberFiveInfo.teamMemberFiveInfo.map((card) => {
            return <TeamCardFive {...card}></TeamCardFive>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          {" "}
          {teamMemberSixInfo.teamMemberSixInfo.map((card) => {
            return <TeamCardSix {...card}></TeamCardSix>;
          })}
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          {" "}
          {teamMemberSevenInfo.teamMemberSevenInfo.map((card) => {
            return <TeamCardSeven {...card}></TeamCardSeven>;
          })}
        </div>
      </div>
    </div>
  );
};

// export const TmBtn = () => {
//   const [show, setShow] = useState(false);
//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   return (
//     <>
//       <Link to="">
//         {" "}
//         <Button variant="primary" onClick={handleShow} className="LoginBtn">
//           LOGIN
//         </Button>
//       </Link>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton></Modal.Header>
//         <div className="text-center">
//           <Card.Img
//             className="rounded-circle"
//             variant="top"
//             src={modalimage}
//             style={{ width: "10rem" }}
//           />
//         </div>
//         <div className="text-center">
//           <h3>{modalname}</h3>
//           <Card.Text>{modaltitle}</Card.Text>
//           <a href="" src={modallink}>
//             {" "}
//             <LinkedIn />
//           </a>
//           <Card.Text className="m-3">{modaltext}</Card.Text>
//         </div>
//       </Modal>
//     </>
//   );
// };
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
        tabIndex="-1"
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
