import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

export const NextBtn = () => {
  return (
    <>
      {/* <a href="" target="_blank">
        {" "} */}
      <button className="NextBtn">
        NEXT <ArrowRightAltOutlinedIcon />
      </button>
      {/* </a> */}
    </>
  );
};
export const BackBtn = () => {
  return (
    <>
      {/* <a href="" target="_blank">
        {" "} */}
      <button className="BackBtn" type="submit">
        <KeyboardBackspaceOutlinedIcon />
        BACK
      </button>
      {/* </a> */}
    </>
  );
};
export const SuscribeBtn = () => {
  return (
    <>
      <button className="SuscribeBtn">SUBSCRIBE</button>
    </>
  );
};
export const SubmitBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <button className="SubmitBtn">SUBMIT</button>
      </a>
    </>
  );
};
export const RegisterNowBtn = () => {
  return (
    <>
      <a target="_blank" href="">
        <button className="RegisterNowBtn">REGISTER NOW</button>
      </a>
    </>
  );
};
