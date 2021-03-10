import "./App.css";
import routes from "./routes";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import useServerData from "./hooks/useServerData";
import { Button } from "@material-ui/core";

function App() {
  const data = useServerData(10000);
  console.log(data);
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <Switch>
        {routes.map((data) => {
          return <Route key={data.path} {...data} />;
        })}
        <Redirect from="/" to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
