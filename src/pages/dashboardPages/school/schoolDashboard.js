import { ChampsDashboardCards } from "../../../components/allCards/Dashboard/dashboardCards";
import { DashboardNavbar } from "../../../components/Navbar/dashboardNavbar";
import schoolDashboardCard from "../../../data/allCards/dashboardCards.json";
import { SchoolDashboardSideNav } from "../../../components/Navbar/dashboardNavbar";

const SchoolDashboard = () => {
  return (
    <>
      {/* <DashboardNavbar /> */}
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3">
            <SchoolDashboardSideNav />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <DashboardCards />
              </div>
              {/* <div className="">
                <RegisteredUsersList />
              </div> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

const DashboardCards = () => {
  return (
    <div className="mt-5">
      <div className="row">
        {schoolDashboardCard.schoolDashboardCard.map((card) => {
          return (
            <div
              className="col-lg-4 col-md-4 col-sm-12 d-flex align-items-stretch"
              key={card.id}
            >
              <ChampsDashboardCards {...card}></ChampsDashboardCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SchoolDashboard;
