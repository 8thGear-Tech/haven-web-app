import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import { ActivitiesPerformance } from "../../../components/allCards/Dashboard/activitiesCards";
import Container from "react-bootstrap/Container";

const ChampMaterialPage = () => {
  return (
    <>
      <ChampNavbar /> 
      {/* material rectangle */}
      <div style={{ marginTop: '150px' }}>
                <Container>
                  <div className="materialRectangle"
                    style={{ width: '100%', height: '100%', 
                    background: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)', 
                    borderRadius: 10, border: '0.50px black solid', 
                    display: 'flex', alignItems: 'center', 
                    justifyContent: 'space-between', padding: '0 20px' }}>

                    <div>Materials</div>
                    <div style={{ display: 'flex', 
                    alignItems: 'center' }}>

                      <div>Home</div>
                      <div style={{ marginLeft: '10px', 
                      transform: 'rotate(-90deg)' }}>⤒</div>
                    </div>
                  </div>
                </Container>
              </div>
      {/* welcome user */}
      <div style={{ marginTop: '70px' }}>
                <Container>
                  <h3>Welcome Michael,</h3>
                </Container>
              </div>

     
     {/* activities panel */}
     
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4">
           
          </div>
          <div className="col-lg-9 col-md-12">
            <div>
              
                <Container className="d-flex justify-content-center materialBg">
                  <ActivitiesPerformance />
                </Container>
              </div>
              
            
          </div>
        </div>
      </div>
    </>
  );
};
export default ChampMaterialPage;
