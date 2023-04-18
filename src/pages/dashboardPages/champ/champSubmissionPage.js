import React from "react";
import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import { Table } from "react-bootstrap";

const ChampSubmissionPage = () => {
  return (
    <>
      <ChampNavbar />

      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3">
            <ChampSideNavBar />
          </div>
          <div className="col-lg-9 col-md-12">
            <Submission />
          </div>
        </div>
      </div>
    </>
  );
};

const Submission = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Activities</th>
            <th>staus</th>
            <th>Grade</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
            <td>Value 3</td>
            <td>Value 4</td>
            <td>Value 5</td>
            <td>Value 5</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
            <td>Value 3</td>
            <td>Value 4</td>
            <td>Value 5</td>
            <td>Value 5</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
            <td>Value 3</td>
            <td>Value 4</td>
            <td>Value 5</td>
            <td>Value 5</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
            <td>Value 3</td>
            <td>Value 4</td>
            <td>Value 5</td>
            <td>Value 5</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default ChampSubmissionPage;
