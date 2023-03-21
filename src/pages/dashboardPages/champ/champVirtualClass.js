import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import VideoChatIcon from '@mui/icons-material/VideoChat';
import Button from "react-bootstrap/Button";


const ChampVirtualClass = () =>{
    return (
      <>
        <ChampNavbar />

        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3">
              <ChampSideNavBar />
            </div>
            <div className="col-lg-9 col-md-12">
              <div>
                <div>
                  <VirtualContent/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="d-flex">
            <div className="flex-shrink-0"> 
              <ChampSideNavBar />
            </div>
            
            <div className="virtualClass">
                
            </div>
        </div> */}
      </>
    );
};
const VirtualContent =() =>{
    return (
      <>
        <div className="container-fluid">
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div className="text-right m-5">
              <h3>Classroom</h3>
              <p className="font-weight-bold">Username:Michael</p>
              <p className="font-weight-bold"> Profile ID:647276545</p>
            </div>
            <div style={{ fontSize: "18px " }}> </div>

            <VideoChatIcon />

            <div>
              <a href="" className="text-center">
                {" "}
                <h3>Start your first session</h3>{" "}
              </a>
            </div>
            <div className="text-center">
              <a target="_blank" href="">
                <Button className="StartANewSessionBtn">
                  Start a new session
                </Button>
              </a>
            </div>
            <div>
              <a href="" className="text-center">
                {" "}
                <h3>Click here for previous session</h3>{" "}
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default ChampVirtualClass; 