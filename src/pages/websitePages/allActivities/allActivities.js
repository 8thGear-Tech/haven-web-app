import { BackToActivity } from "../../../components/Buttons/website/actionBtn/facilitatorBtn";
import { Undo } from "../../../components/Buttons/website/actionBtn/facilitatorBtn";
import { Add } from "../../../components/Buttons/website/actionBtn/facilitatorBtn";
import { UploadBestPhoto } from "../../../components/Buttons/website/actionBtn/facilitatorBtn";
import { BackToApplication } from "../../../components/Buttons/website/actionBtn/facilitatorBtn";
import { StartUpload } from "../../../components/Buttons/website/actionBtn/facilitatorBtn";
import { Abort } from "../../../components/Buttons/website/actionBtn/facilitatorBtn";
import { Done } from "../../../components/Buttons/website/actionBtn/facilitatorBtn";

export const Buttons = () => {
  return (
    <>
      <div className="container">
        {" "}
        BUTTONS
        <br></br>
        <br></br>
        <br></br>
        <BackToActivity />
        <br></br>
        <br></br>
        <Undo />
        <br></br>
        <br></br>
        <Add />
        <br></br>
        <br></br>
        <UploadBestPhoto />
        <br></br>
        <br></br>
        <BackToApplication />
        <br></br>
        <br></br>
        <StartUpload />
        <br></br>
        <br></br>
        <Abort />
        <br></br>
        <br></br>
        <Done />
      </div>
    </>
  );
};
