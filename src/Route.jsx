import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Configurateur } from "./components/Configurateur";
export const Router = () => {
  return (
    <Router>
      <Switch>
        <Route path="/configurateur">
          <Configurateur></Configurateur>
        </Route>
      </Switch>
    </Router>
  );
};
