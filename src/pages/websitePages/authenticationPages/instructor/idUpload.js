//external import
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

//icons
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

//internal import
import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import { NextBtn } from "../../../../components/Buttons/website/actionBtn/schoolBtn";
import { UploadBestPhoto } from "../../../../components/Buttons/website/actionBtn/instructorBtn";
import { BackToApplication } from "../../../../components/Buttons/website/actionBtn/instructorBtn";

export const IdUpload = () => {
  return (
    <>
      <Container fluid>
        <GuestNavbar />
        <div className="col-lg-8 col-md-12 col-sm-12 py-4 mx-auto mt-2 px-5">
          <div className="justify-content-center mt-3">
            <h4 className="text-center">Upload A Valid ID</h4>
            <p>
              Confirm your identity by uploading a clear copy of any accepted
              valid ID by the government. This helps us build a trusted
              relationship with our clients.
            </p>
          </div>
          <div className="IdUploadBgColor d-flex justify-content-center mt-4 p-4 ">
            <p>
              Your Face and Name must be Clearly seen, else yourID will be
              rejected.
            </p>
            <img src="" />
          </div>
          <div className="d-flex justify-content-around pt-4">
            <div>
              <p>We Accept:</p>
              <ul className="text-decoration-none">
                <li>
                  <CheckCircleOutlineOutlinedIcon />
                  National ID card or NIMC
                </li>
                <li>
                  <CheckCircleOutlineOutlinedIcon />
                  International Passport
                </li>
                <li>
                  <CheckCircleOutlineOutlinedIcon />
                  Drivers License
                </li>
                <li>
                  <CheckCircleOutlineOutlinedIcon />
                  Voter’s Card
                </li>
              </ul>
            </div>
            <div>
              <p>We don’t Accept:</p>
              <ul className="text-decoration-none">
                <li>
                  <CheckCircleOutlineOutlinedIcon />
                  School IDs
                </li>
                <li>
                  <CheckCircleOutlineOutlinedIcon />
                  Work or Union IDs
                </li>
                <li>
                  <CheckCircleOutlineOutlinedIcon />
                  Blurry IDs
                </li>
                <li>
                  <CheckCircleOutlineOutlinedIcon />
                  Others
                </li>
              </ul>
            </div>
          </div>
          <div className="selectTestBg d-flex justify-content-center d-flex justify-content-between py-3 px-4 mt-5">
            <UploadBestPhoto />
            <Link to="/InstructorProfileInfo">
              <NextBtn />
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <Link to="/InstructorProfileInfo">
            <BackToApplication />
          </Link>
        </div>
      </Container>
    </>
  );
};
