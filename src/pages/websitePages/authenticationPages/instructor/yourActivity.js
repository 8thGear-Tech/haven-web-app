//external import
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AddBtn } from "../../../../components/Buttons/website/actionBtn/instructorBtn";
import { TakeATestBtn } from "../../../../components/Buttons/website/actionBtn/instructorBtn";

//internal import
import Form from "react-bootstrap/Form";
import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
// import { Add } from "../../../../components/Buttons/website/actionBtn/instructorBtn";
import { BackBtn } from "../../../../components/Buttons/website/actionBtn/schoolBtn";

export const SelectTest = () => {
  return (
    <>
      <Container fluid>
        <GuestNavbar />
        <div className="selectTestBg w-50 py-4 mx-auto mt-5">
          <div className="d-flex justify-content-center justify-content-between px-5 mt-3">
            <div className="">
              <h4>Your Activity</h4>
            </div>
            <div className="">
              <AddBtn />
            </div>
          </div>
          <div className="selectTestBgOrange d-flex justify-content-center mx-5 mt-4 p-4 ">
            <div className="">
              <p>
                Complete the following test for the chosen subject. Click on the
                add button to add more subject or select to remove subject.
              </p>
            </div>
          </div>
          <Form className="d-flex justify-content-end me-5 mt-3 ">
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check type={type} id={`default-${type}`} label="Select" />
              </div>
            ))}
          </Form>
          <div className="selectTestBgBorderPurple d-flex justify-content-center justify-content-between align-items-center p-4 mt-3  mx-5">
            <div className="">
              <h4>HTML</h4>
            </div>
            <div className="">
              <Link to="/ScreeningQuestions">
                {" "}
                <TakeATestBtn />
              </Link>
            </div>
          </div>
          <div className="selectTestBgBorderPurple d-flex justify-content-center justify-content-between align-items-center p-4 mt-3  mx-5">
            <div className="">
              <h4>React</h4>
            </div>
            <Link to="/ScreeningQuestions">
              {" "}
              <TakeATestBtn />
            </Link>
          </div>
          <div className="selectTestBgBorderPurple d-flex justify-content-center justify-content-between align-items-center p-4 mt-3  mx-5">
            <div className="">
              <h4>CSS</h4>
            </div>
            <Link to="/ScreeningQuestions">
              {" "}
              <TakeATestBtn />
            </Link>
          </div>
          <div className="selectTestBgBorderPurple d-flex justify-content-center justify-content-between align-items-center p-4 mt-3  mx-5">
            <div className="">
              <h4>JavaScript</h4>
            </div>
            <Link to="/ScreeningQuestions">
              {" "}
              <TakeATestBtn />
            </Link>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/AddActivity">
              <BackBtn />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};
