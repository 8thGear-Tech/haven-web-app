import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

import {
  AdminSideNavBar,
  AdminTopNavbar,
} from "../../../components/Navbar/adminDashboard";
import {
  CancelBtn,
  SubmitBtn,
} from "../../../components/Buttons/dashboard/actionBtn";

const AddChampsPage = () => {
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
              <AddChampNavbar />
              <div className="row">
                <div className="">
                  <AddCharmpForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddChampsPage;

const AddChampNavbar = () => {
  return (
    <div className="container-fluid my-5">
      <div className="row d-flex justify-content-center AdmintTutorNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          <div className="d-flex">
            <p className="navFontColor">All Students</p>
          </div>
          <div className="d-flex navFontColor">
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

const AddCharmpForm = () => {
  return (
    <>
      <div className="container-fluid shadow-lg p-3 mb-5 bg-white  mt-5 mx-5">
        <div className="p-5">
          <Form className="">
            <h2>Basic Info</h2>
            <br></br>
            <div className="row ">
              <div className="col mx-5">
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="" className="w-50" />
                </Form.Group>
              </div>
              <div className="col offset-md-1">
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="email" placeholder="" className="w-50" />
                </Form.Group>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col mx-5">
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="" className="w-50" />
                </Form.Group>
              </div>
              <div className="col offset-md-1">
                <Form.Group>
                  <Form.Label>Join Date</Form.Label>
                  <Form.Control type="email" placeholder="" className="w-50" />
                </Form.Group>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col mx-5">
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="" className="w-50" />
                </Form.Group>
              </div>
              <div className="col offset-md-1">
                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="email" placeholder="" className="w-50" />
                </Form.Group>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col mx-5">
                <Form.Group>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control type="text" placeholder="" className="w-50" />
                </Form.Group>
              </div>
              <div className="col offset-md-1">
                <Form.Group>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="email" placeholder="" className="w-50" />
                </Form.Group>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col mx-5">
                <Form.Group>
                  <Form.Label>Designation</Form.Label>
                  <Form.Control type="text" placeholder="" className="w-50" />
                </Form.Group>
              </div>
              <div className="col offset-md-1">
                <Form.Group>
                  <Form.Label>Department</Form.Label>
                  <Form.Control type="email" placeholder="" className="w-50" />
                </Form.Group>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col mx-5">
                <Form.Group>
                  <Form.Label>Faculty</Form.Label>
                  <Form.Control type="text" placeholder="" className="w-50" />
                </Form.Group>
              </div>
              <div className="col offset-md-1">
                <Form.Group>
                  <Form.Label>Education</Form.Label>
                  <Form.Control type="email" placeholder="" className="w-50" />
                </Form.Group>
              </div>
            </div>
          </Form>
          <div className="mt-5 text-center">
            <SubmitBtn />
            <CancelBtn />
          </div>
        </div>
      </div>
    </>
  );
};
