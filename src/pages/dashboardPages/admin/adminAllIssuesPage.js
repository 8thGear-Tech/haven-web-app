import {
  AdminSideNavBar,
  AdminTopNavbar,
} from "../../../components/Navbar/adminDashboard";

const AdminAllIssuesPage = () => {
  return (
    <>
      <AdminTopNavbar />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-3">
          <AdminSideNavBar />
        </div>
        <h1>hello</h1>
      </div>
    </>
  );
};

export default AdminAllIssuesPage;
