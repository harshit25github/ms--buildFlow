import Home from "./screens/home";
import Tiffin from "./screens/tiffin";
import TiffinService from "./screens/tiffinService";

const App = () => {
  return <div>Hello World</div>;
};

const routes = [
  { path: "/login", component: App, exact: true },
  { path: "/signup", component: App, exact: true },
  { path: "/tiffin_service/:id", component: TiffinService, exact: true },
  { path: "/tiffin/:id", component: Tiffin, exact: true },
  { path: "/home", component: Home, exact: true },
];

export default routes;
