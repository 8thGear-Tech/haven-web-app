import dahboardImage from "../../../assets/images/home/activitiesimagefour.png";
const DashboardProfileCards = () => {
  return (
    <div className="dashboardProfileCardsBorder mt-5 px-3 py-2">
      <div className="d-flex py-1">
        <div>
          {" "}
          <img
            src={dahboardImage}
            alt=""
            className=" mx-1"
            // maxHeight="50px"
            // maxWidth="50px"
          />
        </div>
        <div className="my-auto mx-1">
          <p className="p-0 m-0 text-white">Username</p>
          <p className="p-0 m-0 text-white">Phone Number</p>
          <p className="p-0 m-0 text-white">Email Address</p>
          {/* <ul className="dashboardProfileList mt-3">
            <li className="p">Username</li>
            <li className="py-1">Phone Number</li>
            <li className="p">Email Address</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};
export default DashboardProfileCards;
