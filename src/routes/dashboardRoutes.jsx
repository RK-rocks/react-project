import Demo from "views/Demo";
import { Dashboard } from "views/app/index";
// import Users from "../views/Users/User";
import Users from "views/Users/User";
import UserEdit from "views/Users/UserEdit";


const dashboardRoutes = [
  { path: "/dashboard", component: Dashboard },
  { path: "/demo", component: Demo },
  { path: "/users", component: Users },
  { path: "/users/add", component: UserEdit },
  { path: "/users/edit/:id", component: UserEdit },
];

export default dashboardRoutes;