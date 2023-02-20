import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import { ActivitiesPerformance } from "../../../components/allCards/Dashboard/activitiesCards";
import Container from "react-bootstrap/Container";

const ChampMaterialPage = () => {
  return (
    <>
      <ChampNavbar />
      <div className="d-flex ">
        <div className="flex-shrink-0">
          <ChampSideNavBar />
        </div>
        <div className="">
          <Container>
            <h3>Welcome Michael,</h3>
          </Container>
          <Container className="d-flex justify-content-center materialBg">
            <ActivitiesPerformance />
          </Container>
        </div>
      </div>
    </>
  );
};
export default ChampMaterialPage;
