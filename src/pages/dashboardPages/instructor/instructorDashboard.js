import { ChampsDashboardCards } from "../../../components/allCards/Dashboard/dashboardCards";
import instructorDashboardCard from "../../../data/allCards/dashboardCards.json";

const InstructorDashboard = () => {
  return (
    <>
      <DashboardCards />
    </>
  );
};

const DashboardCards = () => {
  return (
    <div className="mt-5">
      <div className="row">
        {instructorDashboardCard.instructorDashboardCard.map((card) => {
          return (
            <div className="col-lg-4 col-md-4 col-sm-12" key={card.id}>
              <ChampsDashboardCards {...card}></ChampsDashboardCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstructorDashboard;
