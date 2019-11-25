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
import Dashboard from "views/Dashboard.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "GM Migrations", //changed from "Dashboard" to "GM Migrations" to fix navbar brand text
    icon: "nc-icon nc-check-2",
    component: Dashboard,
    layout: "/admin"
  },
];
export default routes;