import { Link } from "react-router-dom";
import {
  AdminSideNavBar,
  AdminTopNavbar,
} from "../../../components/Navbar/adminDashboard";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import Card from "react-bootstrap/Card";
import { TutorReadMoreBtn } from "../../../components/Buttons/dashboard/actionBtn";
import ChampDataInfo from "../../../data/dashboard/allChampsInfo.json";

const AllChampPage = () => {
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
              <ChampsNavbar />
              <div className="row">
                <div className="">
                  <AllChampsCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ChampsNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center AdmintTutorNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">All Students</p>
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

const ChampsCard = (props) => {
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

const AllChampsCard = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-evenly">
        {ChampDataInfo.champsdata.map((card) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4" key={card.id}>
              <ChampsCard {...card}></ChampsCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AllChampPage;
