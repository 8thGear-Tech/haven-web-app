// login
// createAccount
// Save

//external import
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import havenlogo from "../../../assets/icons/havenlogo.png";
import { validateInput } from "../../forms/authenticationForms.js"; 

//internal import
import { LoginForm } from "../../forms/authenticationForms";
import { JoinUsModal } from "../../forms/authenticationForms";
import { SchoolParentSignUpModal } from "../../forms/authenticationForms";

export const LoginButton = () => {
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);

  return (
    <>
 
  <Link to="/LoginForm">
  <button className="LoginBtn">Login</button> 
    </Link>
 
    
    </>
  );
};
export const LoginBtn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* <Link
        to=""
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        {" "} */}
      <button variant="" className="LoginBtn">
        {/* <button variant="" onClick={handleShow} className="LoginBtn"> */}
        LOGIN
      </button>
      {/* </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <img src={havenlogo} width={70} className="img-fluid" />
          </Modal.Title>
        </Modal.Header>
        <LoginForm /> */}
      {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
      {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      {/* </Modal> */}
    </>
  );
};

export const LoginBtnTwo = ({ email, password }) => {
    const handleClick = async () => {
      try {
        await validateInput(email,password); // Validate the form inputs
        // Redirect to the protected page if validation passes
        window.location.href = "/ChampDashboard";
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <>
       <button className="LoginBtn" onClick={handleClick}>
        Login
      </button>
    </>
  );
};



export const SchoolCreateAccountBtn = () => {
  return (
    <>
      <Link to="/ChampsNeeds">
        {" "}
        <button className="CreateAccountBtn">Create Account</button>
      </Link>
    </>
  );
};
export const ParentCreateAccountBtn = ({ firstName, lastName, password, cpassword }) => {
  const handleClick = async () => {
    try {
      await validateInput(firstName, lastName,password, cpassword); // Validate the form inputs
      // Redirect to the protected page if validation passes
      window.location.href = "/ChampDashboard";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button className="CreateAccountBtn" onClick={handleClick}>
        Create Account
      </button>
    </>
  );
};


export const SignUpBtn = () => {
  return (
    <>
      <a href="">
        {" "}
        <button className="LoginBtn">SIGN UP</button>
      </a>
      {/* <a href="">
        {" "}
        <button className="LoginBtn">SIGN UP</button>
      </a> */}
    </>
  );
};

export const TeamPopUpCard = () => {
  //   const { id, image, name, position, text, link } = props;
  return (
    <>
      <LoginBtn />
      <div
        className="modal fade"
        // id={id}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
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
            <h4>name</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export const CreateAccountBtn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link
        href=""
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        {" "}
        <Button variant="" onClick={handleShow} className="CreateAccountBtn">
          CREATE ACCOUNT
        </Button>
      </Link>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>
            <img src={havenlogo} width={70} className="img-fluid" />
          </Modal.Title>
        </Modal.Header> */}
        <JoinUsModal />
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
export const SchoolParentSignUpBtn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <a
        href=""
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        {" "}
        <Button variant="" onClick={handleShow} className="CreateAccountBtn">
          REGISTER NOW
        </Button>
        {/* <Button variant="" onClick={handleShow} className="CreateAccountBtn">
          SIGN UP
        </Button> */}
      </a>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>
            <img src={havenlogo} width={70} className="img-fluid" />
          </Modal.Title>
        </Modal.Header> */}
        <SchoolParentSignUpModal handleClose={handleClose} />
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
