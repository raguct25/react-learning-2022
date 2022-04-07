import React from "react";

export const About = React.lazy(() => import("../pages/about"));
export const Profile = React.lazy(() => import("../pages/profile"));

const routes = [
  {
    exact: true,
    name: "Home",
    path: "/",
  },
  {
    component: About,
    exact: true,
    name: "About",
    path: "/about",
  },
  {
    component: Profile,
    exact: true,
    name: "Profile",
    path: "/profile",
  },
];

export default routes;
