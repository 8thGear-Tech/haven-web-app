import { ChampNavbar } from "../../../components/Navbar/champNavbar";
// import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import VideoChatIcon from '@mui/icons-material/VideoChat';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ChampVirtualClass = () =>{
    return (
      <>
        <ChampNavbar />

        <div style={{ marginTop: '150px' }}>
                <Container>
                  <div className="materialRectangle"
                    style={{ width: '100%', height: '100%', 
                    background: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)', 
                    borderRadius: 10, border: '0.50px black solid', 
                    display: 'flex', alignItems: 'center', 
                    justifyContent: 'space-between', padding: '0 20px' }}>

                    <div>Virtual Class</div>
                    <div style={{ display: 'flex', 
                    alignItems: 'center' }}>

                      <div>Home</div>
                      <div style={{ marginLeft: '10px', 
                      transform: 'rotate(-90deg)' }}>⤒</div>
                    </div>
                  </div>
                </Container>
              </div>  


        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3">
          
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
        <div className="d-flex">
            <div className="flex-shrink-0"> 
              
            </div>
            
            <div className="virtualClass">
                
            </div>
        </div>
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