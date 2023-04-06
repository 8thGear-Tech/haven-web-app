import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import { Title } from "@mui/icons-material";
// import FileUploadForm from "../../../components/forms/dashboard/champs/assignmentUpload";

const AssignmentText = () => {
  return (
    <>
      <ChampNavbar />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3">
            <ChampSideNavBar />
          </div>
          <div className="col-lg-9 col-md-12">
            <div>
              <div>
                <ChampText />
                <FileUploadForm />
              </div>
              {/* <div className="">
                
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ChampText = () => {
  return (
    <>
      <div className="container-fluid">
        <h2>ASSIGNMENT</h2>
        <div className="assignmenttext">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim labore
          praesentium ipsam cum officia cupiditate unde est harum
          explicabolaboriosam ad culpa,
        </div>
        <div className="assignmenttext">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim labore
          praesentium ipsam cum officia cupiditate unde est harum
          explicabolaboriosam ad culpa,
        </div>
        <div className="assignmenttext">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim labore
          praesentium ipsam cum officia cupiditate unde est harum
          explicabolaboriosam ad culpa,
        </div>
      </div>
    </>
  );
};

const FileUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the file here, e.g. upload it to a server
    console.log("File uploaded:", file);
  };

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <Form className="submitFile" onSubmit={handleSubmit}>
        <Form.Group>
          {/* <Form.Label>Upload a file</Form.Label> */}
          <Form.Control
            placeholder="Drop Your Assignmnet Here"
            type="file"
            onChange={handleFileChange}
            style={{ height: "500px" }}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default AssignmentText;
