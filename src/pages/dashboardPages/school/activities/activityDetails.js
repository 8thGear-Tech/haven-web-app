import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { MaterialsandActivities } from "../../../../components/allCards/Dashboard/activitiesCards";
import activitiesData from "../../../../data/allCards/activitiesCard.json";
import { MaterialsandActivitiesCard } from "../../../../components/allCards/Dashboard/activitiesCards";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { SchoolDashboardSideNav } from "../../../../components/Navbar/dashboardNavbar";

//images
import detailsimage from "../../../../assets/images/dashboard/school/detailsimage.png";

const ActivitiesDetails = () => {
  return (
    <>
      {/* <DashboardNavbar /> */}
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2">
            <SchoolDashboardSideNav />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <MaterialsNavbar />
              </div>
              <div className="">
                {" "}
                <Details />
              </div>
              {/* <div className="">
                <RegisteredUsersList />
              </div> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

const MaterialsNavbar = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">All Activities</p>
          </div>
          <div className="d-flex navFontColor">
            {" "}
            <Link to="" className="text-decoration-none">
              <p className="navFontColor">Home</p>
            </Link>
            <ArrowUpwardOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
const Details = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center py-5 align-items-center">
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 m-auto">
          <div className="col d-lg-flex d-md-flex mb-5">
            <div className="col">
              <Card style={{ width: "22rem" }} className="mx-auto">
                <Card.Img variant="top" src={detailsimage} />
                <Card.Body>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col d-lg-flex d-md-flex mb-5">
            <div className="col">
              <Card style={{ width: "22rem" }} className="mx-auto">
                <Card.Body>
                  <Card.Title>About Activities</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Title>Duration</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Title>Instructors</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Title>Price</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Title>Date</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 pb-5">
          {" "}
          <Card style={{ width: "22rem" }} className="mx-auto">
            <Card.Body>
              <Card.Title>Summary</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Title>Our Activities</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Title>Languages</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Title>Activity Info</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          {/* <img src={whychooseus} className="card-img-top" alt="..." /> */}
        </div>
      </div>
    </div>
  );
};
const Materials = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center InstructorMaterialBg py-5">
        <h4 className="ps-5">Welcome Michael</h4>
        <h3 className="text-center my-3">Materials</h3>
        {activitiesData.activitiesData.map((card) => {
          return (
            <div className="col-sm-12 col-md-4 col-lg-4" key={card.id}>
              <MaterialsandActivitiesCard
                {...card}
              ></MaterialsandActivitiesCard>
            </div>
          );
        })}
        <div className="d-flex justify-content-between p-5">
          {" "}
          <div className="d-flex urlFontColor">
            <Link to="/UploadMaterial" className="urlFontColor">
              <p className="urlFontColor">Upload material</p>
            </Link>{" "}
            <ArrowRightAltOutlinedIcon />
          </div>
          <div className="d-flex urlFontColor">
            {" "}
            <Link to="" className="urlFontColor">
              <p className="urlFontColor">Go to resource</p>
            </Link>
            <ArrowRightAltOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesDetails;
