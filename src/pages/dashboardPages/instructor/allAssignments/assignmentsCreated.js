import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

import { CancelBtn } from "../../../../components/Buttons/dashboard/actionBtn";
import { SubmitBtn } from "../../../../components/Buttons/dashboard/actionBtn";

const AssignmentCreated = () => {
  return (
    <>
      <AssignmentCreatedNavbar />
      <ListofAssignments />
    </>
  );
};

const AssignmentCreatedNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p>Assignments Created</p>
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

const ListofAssignments = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center InstructorMaterialBg py-5 mb-4">
          <p className="px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit ut aliquam, purus sit amet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit ut aliquam, purus sit amet. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit ut aliquam, purus sit amet.
          </p>
          <div className="d-flex ">
            <Link to="">
              <p className="ms-4">Update</p>
            </Link>
            <Link to="">
              {" "}
              <p className="ms-3">Delete</p>
            </Link>
          </div>
        </div>
        <div className="row d-flex justify-content-center InstructorMaterialBg py-5 mb-4">
          <p className="px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit ut aliquam, purus sit amet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit ut aliquam, purus sit amet. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit ut aliquam, purus sit amet.
          </p>
          <div className="d-flex ">
            <Link to="">
              <p className="ms-4">Update</p>
            </Link>
            <Link to="">
              {" "}
              <p className="ms-3">Delete</p>
            </Link>
          </div>
        </div>
        <div className="row d-flex justify-content-center InstructorMaterialBg py-5 mb-4">
          <p className="px-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit ut aliquam, purus sit amet. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit ut aliquam, purus sit amet. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
            amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit ut aliquam, purus sit amet.
          </p>
          <div className="d-flex ">
            <Link to="">
              <p className="ms-4">Update</p>
            </Link>
            <Link to="">
              {" "}
              <p className="ms-3">Delete</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignmentCreated;
