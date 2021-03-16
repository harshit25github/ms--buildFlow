import "./App.css";
import routes from "./routes";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

// import useServerData from "./hooks/useServerData.jsx";
import { Button } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  // const data = useServerData(10000);
  // console.log(data);
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Switch>
          {routes.map((data) => {
            return <Route key={data.path} {...data} />;
          })}
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
