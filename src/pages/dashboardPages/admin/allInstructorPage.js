import { Link } from "react-router-dom";
import {
  AdminSideNavBar,
  AdminTopNavbar,
} from "../../../components/Navbar/adminDashboard";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Button, Card, Container } from "react-bootstrap";
import { TutorReadMoreBtn } from "../../../components/Buttons/dashboard/actionBtn";
import TutorCardInfo from "../../../data/dashboard/allTutorInfo.json";
const AllTutorPage = () => {
  return (
    <>
      <AdminTopNavbar />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2">
            <AdminSideNavBar />
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="col">
              <TutorNavbar />
              <div className="row">
                <div className="">
                  <AllTutorCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const TutorNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center AdmintTutorNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">All Instructors</p>
          </div>
          <div className="d-flex navFontColor">
            {" "}
            <Link to="" className="text-decoration-none">
              <p className="navFontColor">Home</p>
            </Link>
            <ArrowRightAltOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const TutorCard = (props) => {
  const { name, title, gender, phone, email, address } = props;
  return (
    <>
      <Card
        className="mx-5 mt-5"
        style={{
          width: "20rem",
        }}
      >
        <Card.Body>
          <div className="text-center">
            <Card.Img
              variant="top"
              src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
              className="rounded-circle "
              style={{
                height: "80px",
                width: "50px",
              }}
            />
            <Card.Title>
              <h4>{name}</h4>
            </Card.Title>
            <p> {title}</p>
          </div>
          <Card.Text>{gender}</Card.Text>
          <hr />
          <Card.Text> {phone} </Card.Text>
          <hr />
          <Card.Text>{email}</Card.Text>
          <hr />
          <Card.Text>{address}</Card.Text>
          <hr />
        </Card.Body>
        <div className="mb-4 text-center">
          <Link to="">
            <TutorReadMoreBtn />
          </Link>
        </div>
      </Card>
    </>
  );
};

const AllTutorCard = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-evenly">
        {TutorCardInfo.tutordata.map((card) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4" key={card.id}>
              <TutorCard {...card}></TutorCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AllTutorPage;
