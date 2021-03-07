import "./App.css";
import routes from "./routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((data) => {
          return <Route key={data.path} {...data} />;
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
