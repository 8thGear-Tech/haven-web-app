//external import
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

//internal import
import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import {
  BackBtn,
  NextBtn,
} from "../../../../components/Buttons/website/actionBtn/schoolBtn";
import {
  UploadBestPhoto,
  ChangePhoto,
} from "../../../../components/Buttons/website/actionBtn/instructorBtn";
import { BackToApplication } from "../../../../components/Buttons/website/actionBtn/instructorBtn";

export const ProfileUpload = () => {
  return (
    <>
      <Container fluid>
        <GuestNavbar />
        <div className="selectTestBg w-50 py-4 mx-auto mt-5">
          <div className="d-flex justify-content-center px-5 mt-3">
            <div className="">
              <h4>Upload Profile Photo</h4>
            </div>
          </div>
          <div className="profileUploadBgColor d-flex justify-content-center mx-5 mt-4 p-4 ">
            <div className="text-white">
              <p>
                Add a professional picture to your profile. Ensure you select
                the best as high quality images attracts more clients to you.
              </p>
              <img src="" />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <Link to="/EditProfilePhoto">
              <UploadBestPhoto />
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link to="">
            <BackToApplication />
          </Link>
        </div>
      </Container>
    </>
  );
};
export const EditProfilePhoto = () => {
  return (
    <>
      <Container fluid>
        <GuestNavbar />
        <div className="selectTestBg w-50 py-4 mx-auto mt-5">
          <div className="d-flex justify-content-center px-5 mt-3">
            <div className="">
              <h4>Upload Profile Photo</h4>
            </div>
          </div>
          <div className="profileUploadBgColor d-flex justify-content-center mx-5 mt-4 p-4 ">
            <div className="text-white">
              <p>
                Add a professional picture to your profile. Ensure you select
                the best as high quality images attracts more clients to you.
              </p>
              <img src="" />
            </div>
          </div>

          <div className="d-flex justify-content-around mt-5">
            <Link to="">
              <ChangePhoto />
            </Link>
            <Link to="/InstructorProfileInfo">
              <NextBtn />
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link to="">
            <BackToApplication />
          </Link>
        </div>
      </Container>
    </>
  );
};
