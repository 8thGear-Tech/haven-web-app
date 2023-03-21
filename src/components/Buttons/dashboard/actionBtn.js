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

import profilepic from "../../../assets/images/dashboard/profilepic.png";

import Button from "react-bootstrap/Button";

export const SubmitBtn = () => {
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
      <a href="" target="_blank">
        {" "}
        <button className="UpdateBtn">UPDATE</button>
      </a>
    </>
  );
};

export const SaveBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <button className="SaveBtn">SAVE</button>
      </a>
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
