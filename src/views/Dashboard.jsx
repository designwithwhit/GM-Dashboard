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
                        <CardTitle tag="p">137</CardTitle>
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
                        <CardTitle tag="p">221</CardTitle>
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
                        <th>#</th>
                        <th>Name</th>
                        <th>Closed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Anna Akins</td>
                        <td>40</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jenny Atkins</td>
                        <td>19</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Kayley Edgin</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Joe Fisher</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Fawn Gregory</td>
                        <td>39</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Kevin Kerr</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Sheila Lamb</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Al Magbag</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Alyssa Morgan</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Lillian Quan</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Paul Sabovik</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Michael Scott</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Dakota Rice</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Minerva Hooper</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>Sage Rodriguez</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>Philip Chaney</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>Corey Sliter</td>
                        <td>20</td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>Jennifer Walker</td>
                        <td>13</td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>Amanda Hale</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Amanda Gibbon</td>
                        <td>0</td>
                      </tr>
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



