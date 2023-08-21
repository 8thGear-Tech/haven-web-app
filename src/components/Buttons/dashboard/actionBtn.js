// Chris
// viewAll
// ReadMore
// Submit
// Update
// Save
// Cancel
//Upload

import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ProfileReadMoreCard from "../../allCards/Dashboard/profileCards";
import { InstructorProfileReadMoreCard } from "../../allCards/Dashboard/profileCards";

// import profilepic from "../../../assets/images/dashboard/profilepic.png";

import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

export const SubmitBtn = () => {
  const handleSubmit = async () => {
    toast.success("Submitted")
  };
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <button className="SubmitBtn">Submit</button>
      </a>
    </>
  );
};

export const UpdateBtn = () => {
  return (
    <>
      <Link to="/ProfileUpdatePg">
        <button className="UpdateBtn">UPDATE</button>
      </Link>
    </>
  );
};

export const SaveBtn = ({ handleSubmit, errors }) => {
  const handleSaveClick = (e) => {
    e.preventDefault();
    
    // Call the handleSubmit function from the props to perform form validation
    handleSubmit(e);
    
    // Additional logic or actions after form submission can be added here
    if (Object.keys(errors).length === 0) {
      // Form has no validation errors, perform your save action here
      console.log("Form submitted successfully");
    } else {
      console.log("Form has validation errors, please correct them");
    }
  };
  
  return (
    <>
      <button className="SaveBtn" onClick={handleSaveClick}>
        SAVE
      </button>
    </>
  );
};

export const ReadMoreBtn = () => {
  return (
    <>
      {/* <a href="" target="_blank">
        {" "} */}
      <button className="ReadMoreBtn ">Read More</button>
      {/* </a> */}
    </>
  );
};

export const GoHome = () => {
  return (
    <>
      <a href="/" target="_blank">
        <button className="GoHome"> Go Home</button>
      </a>{" "}
    </>
  );
};

export const ProfileReadMoreBtn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link
        to=""
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        {" "}
        <button variant="" onClick={handleShow} className="ReadMoreBtn">
          READ MORE
        </button>
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <p className="m-0">
            <b>Champ Profile</b>
          </p>
          {/* <img src={profilepic} /> */}
        </Modal.Header>
        <ProfileReadMoreCard />
      </Modal>
    </>
  );
};
export const InstructorProfileReadMoreBtn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link
        to=""
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        {" "}
        <button variant="" onClick={handleShow} className="ReadMoreBtn">
          READ MORE
        </button>
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <p className="m-0">
            <b>Instructor Profile</b>
          </p>
          {/* <img src={profilepic} /> */}
        </Modal.Header>
        <InstructorProfileReadMoreCard />
      </Modal>
    </>
  );
};
export const TutorReadMoreBtn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link
        to=""
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        {" "}
        <button variant="" onClick={handleShow} className="ReadMoreBtn">
          READ MORE
        </button>
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <p className="m-0">
            <b>Instructor Profile</b>
          </p>
          {/* <img src={profilepic} /> */}
        </Modal.Header>
        <InstructorProfileReadMoreCard />
      </Modal>
    </>
  );
};

export const CancelBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <button className="CancelBtn">Cancel</button>
      </a>
    </>
  );
};

export const UploadBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="UploadBtn">Upload</Button>
      </a>
    </>
  );
};

export const ViewAllBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button className="viewAllBtn">View All</Button>
      </a>
    </>
  );
};

export const StartaNewSessionBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <button className="StartaNewSessionBtn">START A NEW SESSION</button>
      </a>
    </>
  );
};
