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
      <div className="d-flex ">
        <div className="flex-shrink-0">
          <ChampSideNavBar />
        </div>
        <div className="text-center">
          <ChampsResource />
        </div>
        <div className="dashboardbg ">
          <ChampDashboardCoCards />
        </div>
      </div>
    </>
  );
};
export default ChampDashboard;
