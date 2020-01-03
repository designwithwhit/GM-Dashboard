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

    // ...continuation from comment at the
    // or store data in the "this.state"
    // if it preferable to store it in "this.state" because of how important "state" is to react.js

    // in REACT.js ALL application data, any peice of information that will or can change over the course of a someone using your app,
    // should be stored in the STATE of the application.

    // Please read more about STATE as it is a crucial part of REACT.js
    // FYI: Everytime a property in "this.state" is changed, this triggers a refresh of the app.  which is the core functionality behind using a react.js app.
    // dynamic loading

    // so we should save the "data" we want to display in the state so in the future we can connect it to an API
    // and have the application changed automatically
    this.state = {
      data: [
        {
          "#": 1,
          name: "Amanda Gibbon",
          launchesClosed: 45
        },
        {
          "#": 2,
          name: "Amanda Hale",
          launchesClosed: 43
        },
        {
          "#": 3,
          name: "Jeremy Helstrom",
          launchesClosed: 27
        },
        {
          "#": 4,
          name: "Tina Khatthamane",
          launchesClosed: 15
        },
        {
          "#": 5,
          name: "Nicholas Kosenkranius",
          launchesClosed: 15
        },
        {
          "#": 6,
          name: "Whitney LaRene",
          launchesClosed: 1
        },
        {
          "#": 7,
          name: "SusanStephens",
          launchesClosed: 1
        }
      ]
    }

    // we need to expose our custom functions to our app so we need to declare them here.
    // we are telling the app that anytime you see "this.tableHeaders" in the render()
    // we want to run "this.tableHeaders()"
    // we need to do this because of scope.  We can't just call this.tableHeaders()

    // if none of that made sense, lol.
    // Just know that you NEED to do this if you create a custom function otherwise you won't be able to use it in your the RENDOR()
    // portion of the code.
    this.tableHeaders = this.tableHeaders();
    this.tableBody = this.tableBody();
  }

  /**
   * creates an array with all the <th> elements dynamically filled with the object properties in the array in the "this.state.data"
   */
  tableHeaders() {
    // getting all PROPERTY KEYS of the this.state.data object (aka your table data)
    let headers = Object.keys(this.state.data[0]);

    // if you use loops to dynamically create react components like this
    // react.js will 'warn' you that you need a 'key' attribute added to your
    // component.
    // this is who react keeps track of the components internally, so do this to prevent
    // bugs.
    return headers.map((value, index) => (
      <th key={index}>
        {value}
      </th>
    ))
  }

  /**
   * creates an array with all the <tr> elements dynamically filled with the data in the "this.state.data"
   * 1 OBJECT in the this.state.data = 1 row in the table
   */
  tableBody() {
    // getting all PROPERTY KEYS of the this.state.data object (aka your table data)
    let headers = Object.keys(this.state.data[0]);

    // performing a .map on an array automatically returns a new array without us needing to create a new one like this
    // var tableRows = myArray.map()
    return this.state.data.map((object, index) => (
      <tr key={index}>
        {headers.map((header, index2) => {
          return (
            <td key={index2}>
              {object[header]}
            </td>);
        })}
      </tr>)
    )
  };

  // now that we have all our custom functions built out (tableBody and tableHeaders) we call them in our render function
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



