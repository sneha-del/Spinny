import React from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = (props) => {
  const { superData = [] } = props;
  console.log(superData);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
