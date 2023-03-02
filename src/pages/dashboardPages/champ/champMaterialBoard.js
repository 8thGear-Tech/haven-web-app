import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import { ActivitiesPerformance } from "../../../components/allCards/Dashboard/activitiesCards";
import Container from "react-bootstrap/Container";

const ChampMaterialPage = () => {
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
                <Container>
                  <h3>Welcome Michael,</h3>
                </Container>
                <Container className="d-flex justify-content-center materialBg">
                  <ActivitiesPerformance />
                </Container>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChampMaterialPage;
