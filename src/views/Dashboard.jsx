/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts
import { Pie } from "react-chartjs-2"; // Removed Line, from before Pie 
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
// core components
import {
  // eslint-disable-next-line
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  // eslint-disable-next-line
  dashboardNASDAQChart
} from "variables/charts.jsx";

class Dashboard extends React.Component {

  // new
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          'rank': 1,
          'name': 'Amanda Gibbon',
          'launches_closed': 45,
        }, {
          'rank': 2,
          'name': 'E Gibbon',
          'launches_closed': 3,
        }
      ]
    }

    this.tableHeaders = this.tableHeaders();
    this.tableBody = this.tableBody();
  }

  // new
  tableHeaders = () => {
    let { data } = this.state;  // deconstruct state
    let headers = Object.keys(data[0]);

    return headers.map((el, ind) => (
      <th key={ind}>
        {el}
      </th>
    ))
  }

  // new
  tableBody = () => {
    let { data } = this.state;  // deconstruct state
    let headers = Object.keys(data[0]);

    return data.map((obj, ind) => (
      <tr key={ind}>
        {headers.map((header, ind) => {
          return <td key={ind}>{obj[header]}</td>;
        })}
      </tr>)
    )
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-calendar-60 text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Backlog</p>
                        <CardTitle tag="p">24</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-check-2 text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Closed</p>
                        <CardTitle tag="p">382</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="6" md="12" sm="12">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="4">
                      <div className="numbers text-center">
                        <p className="card-category">GM Base</p>
                        <CardTitle tag="p">48</CardTitle>
                        <p />
                      </div>
                    </Col>
                    <Col md="4" xs="4">
                      <div className="numbers text-center">
                        <p className="card-category">GM Plus</p>
                        <CardTitle tag="p">132</CardTitle>
                        <p />
                      </div>
                    </Col>
                    <Col md="4" xs="4">
                      <div className="numbers text-center">
                        <p className="card-category">GM Premier</p>
                        <CardTitle tag="p">178</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">3,000 GM Signups</CardTitle>
                  <p className="card-category">Get in the boat!</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="legend">
                    <i className="fa fa-circle text-success" /> Signed Up{" "}
                    <i className="fa fa-circle text-danger" /> Opted Out{" "}
                    <i className="fa fa-circle text-gray" /> Undecided
                  </div>

                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Team Member Leaderboard</CardTitle>
                  <p className="card-category">
                    Total Closed Launches
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        {this.tableHeaders}
                      </tr>
                    </thead>
                    <tbody>
                      {this.tableBody}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      </>
    );
  }
}

export default Dashboard;



