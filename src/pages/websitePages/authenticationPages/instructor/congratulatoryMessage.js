//external import
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

//internal import
import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import { Done } from "../../../../components/Buttons/website/actionBtn/instructorBtn";
import { BackToApplication } from "../../../../components/Buttons/website/actionBtn/instructorBtn";

const CongratsMessage = () => {
  return (
    <>
      <Container fluid className="containerBg">
        <GuestNavbar />
        <div className="w-50 py-4 mx-auto mt-5">
          <div className="d-flex justify-content-center px-5 mt-3">
            <div className="">
              <h4>Congratulations</h4>
            </div>
          </div>
          <div className="congratsBgColor d-flex justify-content-center mx-5 mt-2 p-4 ">
            <div className="text-black">
              <p>
                Thank You Micheal for successfully applying as an instructor in
                Haven. We wish you success as you become part of us and share in
                our growth success.
              </p>
              <img src="" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link to="/InstructorDashboard">
            <Done />
          </Link>
        </div>
      </Container>
    </>
  );
};

export default CongratsMessage;
