import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
// import FileUploadForm from "../../../components/forms/dashboard/champs/assignmentUpload";

const AssignmentText = () => {
  return (
    <>
      <ChampNavbar />
      <div className="d-flex">
        <div className="flex-shrink-0">
          <ChampSideNavBar />
        </div>
        <div col-8>
          <ChampText />
          <FileUploadForm />
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};
const ChampText = () => {
  return (
    <>
      <div className="p-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        <br></br>
        Enim labore praesentium ipsam cum officia cupiditate
        <br></br>
        unde est harum explicabolaboriosam ad culpa,
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
    <Form className="submitFile" onSubmit={handleSubmit}>
      <Form.Group>
        {/* <Form.Label>Upload a file</Form.Label> */}
        <Form.Control type="file" onChange={handleFileChange} style={{ height: '100px', width: '200px' }} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AssignmentText;
