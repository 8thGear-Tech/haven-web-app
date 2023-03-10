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
import { StartUpload } from "../../../../components/Buttons/website/actionBtn/instructorBtn";

export const VideoUpload = () => {
  return (
    <>
      <Container fluid>
        <GuestNavbar />
        <div className="col-lg-8 col-md-12 col-sm-12 py-4 mx-auto mt-2 px-5">
          <div className="justify-content-center mt-3">
            <h4 className="text-center">Video Introduction Upload</h4>
            <p>
              Upload a short video responding to the questions below. we would
              love to understand your passion for tutoring, personality,
              communication skills, and unique teaching ability. ensure you are
              in a quiet, well lighted environment so we can hear and see you.
            </p>
          </div>
          <div className="VideoUploadBgOne d-flex justify-content-center mt-4 p-4 ">
            <p>
              Briefly introduce yourself, tell us what’s unique in your tutoring
              approach. whats your method of breaking down complex things to
              simplier ways that students can understand.
            </p>
            <img src="" />
          </div>
          <div className="VideoUploadBgTwo text-center py-5 px-4 mt-5">
            {/* <div className="VideoUploadBgTwo d-flex justify-content-center d-flex justify-content-between py-3 px-4 mt-5"> */}
            <h4>Upload A Video</h4>
            <p>Select a recorded video to upload</p>
            <StartUpload />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3 mx-5">
          <Link to="">
            <BackToApplication />
          </Link>
          <Link to="/InstructorProfileInfo">
            <NextBtn />
          </Link>
        </div>
      </Container>
    </>
  );
};
