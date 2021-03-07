import React from "react";

const App = () => {
  return <div>Hello World</div>;
};

export default [
  { path: "/login", component: App, exact: true },
  { path: "/signup", component: App, exact: true },
  { path: "/tiffin_service/:id", component: App, exact: true },
  { path: "/tiffin/:id", component: App, exact: true },
  { path: "/home", component: App, exact: true },
];
