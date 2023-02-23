import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

//internal import
import notone from "../../../assets/images/dashboard/instructor/notification/notone.png";

const InstructorNotification = () => {
  return (
    <>
      <InstructorNotificationNavbar />
      <InstructorNotificationTable />
    </>
  );
};

const InstructorNotificationNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p>Notifications</p>
          </div>
          <div className="d-flex">
            {" "}
            <Link to="">
              <p>Home</p>
            </Link>
            <ArrowUpwardOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const InstructorNotificationTable = () => {
  return (
    <>
      <div className="container">
        <Tabs
          defaultActiveKey="all"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="all" title="All">
            <div className="d-flex align-items-center">
              {" "}
              <img src={notone} />
              <div className="mx-5">
                {" "}
                <p className="p-0 m-0">Lorem ipsum dolor sit amet</p>
                <p className="p-0 m-0">
                  <b>2hrs ago</b>
                </p>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              {" "}
              <img src={notone} />
              <div className="mx-5">
                {" "}
                <p className="p-0 m-0">Lorem ipsum dolor sit amet</p>
                <p className="p-0 m-0">
                  <b>2hrs ago</b>
                </p>
              </div>
            </div>
            <hr />
            <div className="d-flex align-items-center">
              {" "}
              <img src={notone} />
              <div className="mx-5">
                {" "}
                <p className="p-0 m-0">Lorem ipsum dolor sit amet</p>
                <p className="p-0 m-0">
                  <b>2hrs ago</b>
                </p>
              </div>
            </div>
          </Tab>
          {/* <Tab eventKey="profile" title="Profile">
            Hello
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            Hello
          </Tab> */}
        </Tabs>
      </div>
    </>
  );
};

export default InstructorNotification;
