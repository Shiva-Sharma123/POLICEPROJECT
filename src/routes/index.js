import { lazy } from "react";

// Import components using lazy loading
const Users = lazy(() => import("../component/Users/Users"));
const Request = lazy(() => import("../component/Request/Request"));
const Profile = lazy(() => import("../component/Profile/Profile"));

// Define routes
const routes = [

  {
    path: "/users",
    component: Users,
    service: true,
  },
  {
    path: "/request",
    component: Request,
    service: true,
  },
  {
    path: "/profile",
    component: Profile,
    service: true,
  },
];

export default routes;
