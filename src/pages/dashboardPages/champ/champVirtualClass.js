import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import VideoChatIcon from '@mui/icons-material/VideoChat';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ChampVirtualClass = () => {
  return (
    <>
      <ChampNavbar />

      <div className="margin-left-lg" style={{ marginTop: '150px' }}>
        <Container>
          <div className="materialRectangle"
            style={{ width: '100%', height: '100%', 
            background: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)', 
            borderRadius: 10, border: '0.50px black solid', 
            display: 'flex', alignItems: 'center', 
            justifyContent: 'space-between', padding: '0 20px' }}>

            <div><h3>Classroom</h3></div>
            <div style={{ display: 'flex', 
            alignItems: 'center' }}>

              <div>Home</div>
              <div style={{ marginLeft: '10px', 
              transform: 'rotate(-90deg)' }}>⤒</div>
            </div>
          </div>
        </Container>
      </div>  

      <div className="text-right m-5" >
        <h2 className="font-weight-bold  margin-left-lg" style={{ fontSize: "28px", color: "black" }}>Username: Michael</h2>
        <h2 className="font-weight-bold  margin-left-lg" style={{ fontSize: "28px", color: "black" }}>Profile ID: 647276545</h2>
      </div>

      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
          </div>
          
          <div className="col-lg-9 col-md-12 margin-left-lg">
            <div>
              <div>
                <VirtualContent/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const VirtualContent = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="shadow-lg p-3 mb-5 bg-white rounded text-center" >
          <VideoChatIcon style={{ fontSize: "150px", margin: '50px' }} />

          <div style={{ marginBottom: '20px' }}>
              <Button className="StartANewSessionBtn" style={{ width: '100%', maxWidth: '300px', background: '#8B29A4', borderRadius: 10 }}>
                JOIN A NEW SESSION
              </Button>
              <a href="" className="text-center">
                <h3>Rate Instructor's Session</h3>
              </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default ChampVirtualClass;
