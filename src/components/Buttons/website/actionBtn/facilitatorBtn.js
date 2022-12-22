// Edit
// CompleteApplication
// save
// Cancel
// Save & Continue
// Submit
// TakeATest

// Awelewa
// backToActivity
// Undo
// Add
// UploadBestPhoto
// BackToApplication
// StartUpload
// Abort
// Done
//Awelewa
import Button from "react-bootstrap/Button";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import UploadIcon from "@mui/icons-material/Upload";
import CameraRollIcon from "@mui/icons-material/CameraRoll";

export const BackToActivity = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button variant="outline-light" className="backToActivity">
          BACK TO ACTIVITY{" "}
        </Button>
      </a>
    </>
  );
};
export const Undo = () => {
  return (
    <>
      <a href="" target="_blank">
        <Button variant="outline-light" className="undo">
          UNDO
        </Button>
      </a>
    </>
  );
};
export const Add = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button variant="outline-light" className="add">
          ADD
        </Button>
      </a>
    </>
  );
};
export const UploadBestPhoto = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button variant="outline-light" className="UploadBestPhoto">
          <UploadIcon />
          UPLOAD BEST PHOTO
        </Button>
      </a>
    </>
  );
};
export const BackToApplication = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button variant="outline-light" className="BackToApplication">
          <KeyboardReturnIcon />
          BACK TO APPLICATION
        </Button>
      </a>
    </>
  );
};
export const StartUpload = () => {
  return (
    <>
      <a href="" target="_blank">
        <Button variant="outline-light" className="StartUpload">
          <CameraRollIcon />
          START UPLOAD
        </Button>
      </a>
    </>
  );
};
export const Abort = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button variant="outline-light" className="Abort">
          ABORT
        </Button>
      </a>
    </>
  );
};
export const Done = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <Button variant="outline-light" className="Done">
          DONE
        </Button>
      </a>
    </>
  );
};
