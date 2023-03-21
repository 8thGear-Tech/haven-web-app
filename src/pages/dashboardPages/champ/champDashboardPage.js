import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import { ChampsResource } from "../../../components/allCards/Dashboard/dashboardCards";
import { ChampDashboardCoCards } from "../../../components/allCards/Dashboard/dashboardCards";
// import { ActivitiesPerformance } from "../../../components/allCards/Dashboard/activitiesCards";
import { ChampAnnouncementCard } from "../../../components/allCards/Dashboard/dashboardCards";
import { ChampPerformanceCard } from "../../../components/allCards/Dashboard/dashboardCards";
import { ChampNote } from "../../../components/allCards/Dashboard/dashboardCards";

const ChampDashboard = () => {
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
                <ChampsResource />
              </div>
              <div className="">
                <ChampDashboardCoCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChampDashboard;
